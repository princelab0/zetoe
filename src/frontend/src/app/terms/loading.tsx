import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <Loader2 className='w-12 h-12 text-gray-700 dark:text-gray-300 animate-spin' />
      <p className='mt-4 text-gray-600 dark:text-gray-400 text-lg font-medium  animate-pulse'>
        Loading...
      </p>
    </div>
  );
}
