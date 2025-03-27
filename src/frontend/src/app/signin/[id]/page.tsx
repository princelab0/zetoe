import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getAuthTypes,
  getViewTypes,
  getDefaultSignInView,
  getRedirectMethod,
} from "@/utils/auth-helpers/settings";
import PasswordSignIn from "@/components/auth/login/login";
import SignUp from "@/components/auth/signup/signup";
import UpdatePassword from "@/components/auth/update-password";
import ForgotPassword from "@/components/auth/forget-password";

export default async function SignIn({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ disable_button: boolean }>;
}) {
  const { allowPassword, allowOauth } = getAuthTypes();
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  // Declare 'viewProp' and initialize with the default value
  let viewProp: string;

  // Assign url id to 'viewProp' if it's a valid string and ViewTypes includes it
  if (
    typeof (await params).id === "string" &&
    viewTypes.includes((await params).id)
  ) {
    viewProp = (await params).id;
  } else {
    const cookie = await cookies();
    const preferredSignInView =
      cookie.get("preferredSignInView")?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);
    return redirect(`/signin/${viewProp}`);
  }

  // Check if the user is already logged in and redirect to the account page if so
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && viewProp !== "update_password") {
    return redirect("/");
  } else if (!user && viewProp === "update_password") {
    return redirect("/signin");
  }

  return (
    <div>
      {viewProp === "password_signin" && allowOauth && (
        <PasswordSignIn redirectMethod={redirectMethod} />
      )}

      {viewProp === "forgot_password" && (
        <ForgotPassword
          allowEmail={allowPassword}
          redirectMethod={redirectMethod}
          disableButton={(await searchParams).disable_button}
        />
      )}
      {viewProp === "update_password" && (
        <UpdatePassword redirectMethod={redirectMethod} />
      )}
      {viewProp === "signup" && <SignUp redirectMethod={redirectMethod} />}
    </div>
  );
}
