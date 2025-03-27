import { getErrorRedirect } from "@/utils/helpers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (user) await supabase.auth.signOut();

  if (error) {
    // Assume getErrorRedirect returns a URL string
    const errorUrl = getErrorRedirect(
      "/",
      "Hmm... Something went wrong.",
      "You could not be signed out."
    );
    return NextResponse.redirect(new URL(errorUrl, req.url));
  }
  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      Refresh: "0, url=/", // Prevent caching to ensure a fresh response
    },
  });
}
