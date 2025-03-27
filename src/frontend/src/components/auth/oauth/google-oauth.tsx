"use client";

import { signInWithOAuth } from "@/utils/auth-helpers/client";
import { type Provider } from "@supabase/supabase-js";

import Image from "next/image";
import { useState } from "react";
import googleIcon from "../../../../public/google-icon.svg";
import { Button } from "@/components/ui/button";

type OAuthProviders = {
  name: Provider;
  displayName: string;
  image: any;
};

export default function GoogleOAuth() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: "google",
      displayName: "Google",
      image: googleIcon,
    },
    /* Add desired OAuth providers here */
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div>
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className='pb-0'
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type='hidden' name='provider' value={provider.name} />
          <div className='flex flex-col gap-2'>
            <Button
              variant='outline'
              className='w-[50%]  font-bold text-base rounded-xl text-neutral-600 dark:text-neutral-100 bg-neutral-100 flex items-center justify-center gap-1 px-2  py-3 dark:bg-transparent border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-50 md:mx-auto mx-0'
            >
              <Image
                src={provider.image}
                alt={`${provider.displayName} Provider`}
                width={32}
                height={32}
              ></Image>
              {provider.displayName}
            </Button>
          </div>
        </form>
      ))}
    </div>
  );
}
