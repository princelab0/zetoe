import { redirect } from "next/navigation";
import { getDefaultSignInView } from "@/utils/auth-helpers/settings";
import { cookies } from "next/headers";

export default async function SignIn() {
  const cookie = await cookies();
  const preferredSignInView = cookie.get("preferredSignInView")?.value || null;
  const defaultView = getDefaultSignInView(preferredSignInView);

  return redirect(`/signin/${defaultView}`);
}
