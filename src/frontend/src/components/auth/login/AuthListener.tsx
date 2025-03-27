// components/AuthWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type AuthWrapperProps = {
  children: React.ReactNode;
};

export function AuthListener({ children }: AuthWrapperProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const supabase = createClient();

    // Initial session check
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setIsLoading(false);
    };

    checkSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      if (event === "SIGNED_IN") {
        router.refresh(); // Refresh to update server components
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  return <>{children}</>;
}
