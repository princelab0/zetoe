import { createClient } from "@/utils/supabase/server";
import NavbarClient from "./navbar-client";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Determine if the user is on the home page (you can use a cookie or URL)
  let onHomePage = false; // Replace with your logic

  return <NavbarClient initialUser={user} onHomePage={onHomePage} />;
}
