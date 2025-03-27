// app/components/NavbarClient.tsx (Client Component)
"use client";
import Link from "next/link";
import { Earth, HistoryIcon, PlusIcon } from "lucide-react";
import UserProfile from "../profile/user-profile";
import NewChatButton from "./newchat-button";
import TextLogo from "./text-logo";
import { useChatStore, useGroqChatStore } from "@/stores";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useUserStore } from "@/stores/slices/userStore";
interface NavbarClientProps {
  initialUser: any; // Replace with your user type
  onHomePage: boolean;
}

const NavbarClient = ({
  initialUser,
  onHomePage: initialOnHomePage,
}: NavbarClientProps) => {
  const { messages } = useChatStore();
  const { grokMessages } = useGroqChatStore();
  const [onHomePage, setOnHomePage] = useState(initialOnHomePage);
  const { user, setUser, initializeUser, loading, setLoading } = useUserStore(); // Use the global user store

  const supabase = createClient();

  // Initialize the user state with the initialUser prop
  useEffect(() => {
    if (initialUser) {
      initializeUser(initialUser);
    }
  }, [initialUser, initializeUser]);

  // Fetch the user on the client side
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false); // Set loading to false after fetching the user
    };

    fetchUser();
  }, [setUser, setLoading]);

  // Subscribe to auth state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Update onHomePage based on message lengths
    setOnHomePage(messages.length === 0 && grokMessages.length === 0);

    // Cleanup subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [messages.length, grokMessages.length, setUser]);

  // Delay rendering until the user state is confirmed
  if (loading) {
    return null; // Or return a loading spinner
  }

  return (
    <header className='w-full  flex fixed px-4 z-50 py-4 bg-background justify-between items-center '>
      <div className='flex items-center gap-2'>
        <Link
          href='/'
          className='h-auto w-auto'
          passHref
          onClick={() => (location.href = "/")}
        >
          {onHomePage ? <TextLogo /> : <NewChatButton />}
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href='/newsexplore'
                className='text-neutral-600 hover:text-neutral-500 hover:mouse-pointer'
              >
                <Earth className=' w-6 h-6' />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Explore</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {!user && (
          <Link
            href='/signin/signup'
            passHref
            className='text-[15px] font-medium md:text-base hover:text-neutral-400 border-2 rounded-[1.25rem] border-neutral-200 px-3 py-1  bg-neutral-100 text-neutral-900 hover:mouse-pointer hover:bg-neutral-200'
          >
            Signup
          </Link>
        )}
        {!user && (
          <Link
            passHref
            href='/signin'
            className='text-[15px] font-medium md:text-base hover:text-neutral-400   rounded-[1.25rem] border-2 shadow-md border-neutral-900 px-3 py-1  md:px-3 md:py-1 bg-neutral-900 text-neutral-100 hover:mouse-pointer hover:bg-neutral-800'
          >
            Login
          </Link>
        )}

        {user && <UserProfile user={user}></UserProfile>}
      </div>
    </header>
  );
};

export default NavbarClient;
