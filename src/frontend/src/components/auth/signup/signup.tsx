"use client";
import EyeButton from "@/components/button/eye-button";
import AuthButton from "../../button/auth-button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { handleRequest } from "../../../utils/auth-helpers/client";
import { signUp } from "../../../utils/auth-helpers/server";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SignUpProps {
  redirectMethod: string;
}
export default function SignUp({ redirectMethod }: SignUpProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams(); // Use this to extract query params
  const errorMessage = searchParams?.get("error") || "";
  const errorDescription = searchParams?.get("error_description") || "";
  const errorMsg = errorMessage.concat("  " + errorDescription);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Form submissi
  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({ ...prev, [field]: true }));

    setTimeout(() => {
      setShowPassword((prev) => ({ ...prev, [field]: false }));
    }, 1500);
  };

  return (
    <div className=' pt-[72px] h-screen flex px-4 mb-[4rem] md:mb-4 justify-center items-center '>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='md:w-[90%] relative w-full max-w-[32rem] md:mx-auto m-0   p-4 md:p-6  bg-white dark:border-none dark:bg-[hsl(180,3%,13%)] rounded-2xl shadow-lg border border-gray-200  flex flex-col justify-start items-start md:justify-center md:items-center gap-6'
      >
        <h2 className='text-start md:text-center w-full  text-xl md:text-2xl font-semibold text-neutral-600 dark:text-white'>
          Create an Account
        </h2>
        {/* error */}

        {errorMessage && (
          <Alert variant='destructive'>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )}

        <div className='space-y-6 w-full'>
          {/* Email */}
          <div className='grid grid-cols-1 gap-6 mb-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
              >
                Email Address*
              </label>
              <input
                id='email'
                type='email'
                name='email'
                required
                className='w-full p-3 border  border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
                placeholder='Enter your email'
              />
            </div>

            {/* Password Field */}
            <div className='relative'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
              >
                Password*
              </label>
              <input
                id='password'
                type={showPassword["password"] ? "text" : "password"}
                name='password'
                required
                minLength={6}
                className='w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
                placeholder='Create a password'
              />
              <EyeButton
                field='password'
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
              ></EyeButton>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end gap-6 w-full !mt-6'>
            <AuthButton loading={isSubmitting} buttonText='Signup'></AuthButton>
          </div>
        </div>
      </form>
    </div>
  );
}
