"use client";
import { useTranslations } from "next-intl";
import { HiLogout } from "react-icons/hi";
import { getRedirectMethod } from "@/utils/auth-helpers/settings";
import { useRouter } from "next/navigation";
import { Alert } from "../ui/alert";

export default function Signout() {
  const t = useTranslations("userProfile");
  const router = getRedirectMethod() === "client" ? useRouter() : null;

  const handleSignOut = async () => {
    try {
      const response = await fetch("/auth/signout/", {
        method: "POST",
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        // Error handling - show alert
        console.error("Error signing out");
        return (
          <Alert>Error! Could not sign out. Please try again later.</Alert>
        );
      }
    } catch (error) {
      // Catch any unexpected errors
      console.error("Error signing out:", error);
      return <Alert>Error! Could not sign out. Please try again later.</Alert>;
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className='flex items-center hover:!text-[hsl(11,80%,60%)] text-gray-600 gap-2 rounded  px-2 py-3 hover:cursor-pointer transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 w-full  dark:text-[hsl(60,4%,91%)]'
    >
      <HiLogout className='w-5 h-5 hover:text-inherit dark:text-[hsl(60,4%,91%)]' />
      {t("signOut")}
    </button>
  );
}
