import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import verificationImage from "../../../../public/verification-image.png";
import Link from "next/link";

export default function EmailVerification() {
  return (
    <div className='flex flex-col items-center text-center gap-4 w-full bg-transparent rounded-2xl pt-[72px]'>
      <div className='relative w-[15rem] h-[13rem]'>
        <Image
          src={verificationImage}
          alt='Email verification illustration'
          fill
          className='object-contain'
          priority
        />
      </div>
      <h1 className='text-xl md:text-2xl   font-semibold text-gray-800'>
        Verify your email address
      </h1>
      <p className='text-gray-600 font-medium text-base '>
        Check your email & click the link to activate your account
      </p>

      <p className='text-gray-600 font-medium text-base'>
        Verification Completed? Click below to Signin
      </p>
      <Button
        variant='outline'
        size='lg'
        className='w-auto min-w-[150px] text-base bg-[#4361ee] hover:bg-[#3651d4]'
      >
        <Link href='/signin' className='flex items-center'>
          <Check className='w-4 h-4 mr-2' />
          Signin
        </Link>
      </Button>
    </div>
  );
}
