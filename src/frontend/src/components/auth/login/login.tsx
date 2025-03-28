"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { handleRequest } from "@/utils/auth-helpers/client";
import { signInWithPassword } from "@/utils/auth-helpers/server";
import AuthButton from "../../button/auth-button";
import { useConfigStore } from "@/stores";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleOAuth from "../oauth/google-oauth";

interface PasswordSignInProps {
  redirectMethod: string;
}

export default function PasswordSignIn({
  redirectMethod,
}: PasswordSignInProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const errorMessage = searchParams?.get("error") || "";
  const errorDescription = searchParams?.get("error_description") || "";
  const errorMsg = errorMessage.concat(errorDescription);

  // setError(errorMsg);
  const togglePasswordVisibility = () => {
    setShowPassword(true); // Show the password
    setTimeout(() => {
      setShowPassword(false); // Hide the password after 1000ms
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithPassword, router);
    setIsSubmitting(false);
  };

  return (
    <section className='!pt-[78px] flex justify-center items-center '>
      <div className='w-[90%] max-w-[32rem] gap-2   p-4 md:p-6    bg-white dark:border-none dark:bg-[hsl(180,3%,13%)] rounded-2xl shadow-lg border border-gray-200 flex flex-col '>
        <div className='flex flex-col gap-1'>
          <h2 className='text-start w-full md:text-center text-xl md:text-2xl font-semibold text-neutral-600 dark:text-white'>
            Login to Zetoe
          </h2>
        </div>
        <GoogleOAuth />
        <div className='flex items-center justify-start gap-2'>
          <span className=' w-[40%] h-[1px] bg-neutral-400'></span>
          <Button
            variant='link'
            className=' mx-auto  text-sm text-gray-600 hover:no-underline px-0 pointer-events-none'
          >
            OR
          </Button>
          <span className='w-[40%] h-[1px] bg-neutral-400'></span>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* error */}
          {/* Display Error Message */}
          {errorMessage && (
            <div className='p-3 rounded-lg bg-red-100 text-red-600 border border-red-200'>
              {decodeURIComponent(errorMsg)} {/* Decode the error message */}
            </div>
          )}
          <div className='space-y-6 w-full'>
            {/* Email Input */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
              >
                Email Address
              </label>
              <input
                id='email'
                type='email'
                name='email'
                className='w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Input */}
            <div className='relative'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
              >
                Password
              </label>
              <input
                id='password'
                type={showPassword ? "text" : "password"} // Use the boolean state
                name='password'
                className='w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
                placeholder='Enter your password'
                required
              />
              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-3 top-1/2 transform translate-y-1/2 text-gray-500'
              >
                {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
              </button>
            </div>

            {/* Links */}
            <div className='flex justify-between items-center flex-wrap gap-1'>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                Don&apos;t have an account?{" "}
                <Link
                  href='/signin/signup'
                  className='text-blue-800 font-medium underline hover:text-blue-700'
                >
                  Sign up
                </Link>
              </p>
              <Link
                href='/signin/forgot_password'
                className='text-blue-800 font-medium underline hover:text-blue-700 text-sm  dark:text-gray-400'
              >
                Forgot Password
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end mt-1'>
            <AuthButton loading={isSubmitting} buttonText='Login'></AuthButton>
          </div>
        </form>
      </div>
    </section>
  );
}
