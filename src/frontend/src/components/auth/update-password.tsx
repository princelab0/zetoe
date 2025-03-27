"use client";
import { updatePassword } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Spinner from "../ui/Spinner";

interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod,
}: UpdatePasswordProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <form
      noValidate
      onSubmit={(e) => handleSubmit(e)}
      className='w-[90%] max-w-[32rem] fixed top-1/2 left-1/2 p-4 md:p-8 -translate-x-1/2 -translate-y-1/2 bg-white dark:border-none dark:bg-[hsl(180,3%,13%)] rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-6'
    >
      <h2 className='text-start w-full md:text-center text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white'>
        Update your Password
      </h2>
      <div className='space-y-6 w-full'>
        {/* Email Input */}
        <div>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
          >
            New Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
            placeholder='new password'
          />
        </div>

        {/* Password Input */}
        <div className='relative'>
          <label
            htmlFor='passwordConfirm'
            className='block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2'
          >
            Confirm New Password
          </label>
          <input
            id='passwordConfirm'
            placeholder='Confirm Password'
            type='password'
            name='passwordConfirm'
            className='w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 dark:bg-[hsl(180,3%,13%)] focus:outline-none focus:border-2 focus:border-[hsl(105,8%,72%)]'
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className='flex justify-end mt-2'>
        <button
          className={`px-5 py-2 text-base font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2
      ${
        isSubmitting
          ? "cursor-not-allowed bg-blue-700"
          : "focus:ring-[hsl(200,3%,25%)]"
      }`}
        >
          Update Password
          {isSubmitting ? <Spinner /> : "Update Password"}
        </button>
      </div>
    </form>
  );
}
