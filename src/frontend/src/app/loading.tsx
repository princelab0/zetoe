import Spinner from "@/components/ui/Spinner";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-transparent'>
      {/* <Loader2 className='w-12 h-12 text-gray-700 dark:text-gray-300 animate-spin' /> */}
      <Spinner></Spinner>
      <p className='mt-4 text-gray-600 dark:text-gray-400 text-lg font-medium  animate-pulse'>
        Loading...
      </p>
    </div>
  );
}
