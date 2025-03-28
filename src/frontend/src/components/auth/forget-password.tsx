"use client";
import forgetPasswordImage from "../../../public/forget-password.png";
import { handleRequest } from "@/utils/auth-helpers/client";
import { requestPasswordUpdate } from "@/utils/auth-helpers/server";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../ui/Spinner";
import { Button } from "flowbite-react";
import AuthButton from "../button/auth-button";

interface ForgotPasswordProps {
  allowEmail: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function ForgotPassword({
  allowEmail,
  redirectMethod,
  disableButton,
}: ForgotPasswordProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, requestPasswordUpdate, router);
    setIsSubmitting(false);
  };
  return (
    <div className='flex items-start justify-start md:items-center md:justify-center gap-12 h-screen p-4 pt-[72px] md:p-8'>
      <div className='md:w-[66%] w-full p-8 '>
        <div className='mb-6 '>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6'>
            Forget your password?
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-md'>
            To reset your password, please enter the email address of your
            Zetoe account.
          </p>
          <p className='text-gray-600 dark:text-gray-300 text-base mt-2'>
            Password reset link sent to your email.
          </p>
        </div>

        <form className='space-y-6' onSubmit={(e) => handleSubmit(e)}>
          {/* Email Address */}
          <div>
            <label
              htmlFor='email'
              className='block text-md font-medium text-gray-600 dark:text-gray-300 mb-2'
            >
              Email Address
            </label>
            <input
              id='email'
              type='text'
              name='email'
              className=' w-[90%] p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
              placeholder='Enter your email'
            />
          </div>
          <AuthButton
            loading={isSubmitting}
            buttonText='Send Reset Link'
          ></AuthButton>
        </form>

        {/* Link to Login */}
        <Link
          className='block w-full underline mt-6 text-center text-sm text-blue-800 hover:text-blue-400'
          href='/signin'
        >
          Go to login
        </Link>
      </div>
    </div>
  );
}
