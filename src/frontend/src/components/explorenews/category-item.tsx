"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CategoryItemProps {
  icon: any; // Image import object
  title: string;
  isActive: boolean;
  onClick: () => void;
  isOpen?: boolean; // Optional, true in ModalPreferences
}

export default function CategoryItem({
  icon,
  title,
  isActive,
  onClick,
  isOpen,
}: CategoryItemProps) {
  return !isOpen ? (
    // Carousel view (unchanged)
    <Button
      onClick={onClick}
      variant='ghost'
      className={cn(
        `${
          isActive
            ? "bg-transparent hover:bg-transparent dark:bg-[#3e3f3f] border-blue-500/40 border transition-all ease-in-out duration-300 text-blue-500 hover:text-blue-500 rounded-full"
            : ""
        } flex items-center gap-1 rounded-full px-6 py-4 h-[24px] dark:text-[hsl(60,4%,91%)] dark:hover:text-gray-300 transition-colors justify-center border border-transparent cursor-pointer`
      )}
    >
      <Image
        className='w-4 h-4 align-middle'
        src={icon}
        width={14}
        height={14}
        alt={`${title}'s logo`}
      />
      <span className='text-sm whitespace-nowrap font-[400]'>{title}</span>
    </Button>
  ) : (
    // Modal view (fixed to use Image)
    <button
      onClick={onClick}
      className={`${
        isActive
          ? "bg-[hsl(162,3%,92%)] dark:bg-[hsl(209,84%,66%)] dark:text-[hsl(60,4%,91%)] text-blue-400 border-violet-400 rounded-full"
          : "bg-[hsl(162,3%,92%)] dark:bg-[hsl(185,28%,31%)]"
      } flex items-center gap-1 rounded-full px-3 py-2 transition-colors justify-center border cursor-pointer`}
    >
      <Image
        className='w-4 h-4 align-middle'
        src={icon}
        width={14}
        height={14}
        alt={`${title}'s logo`}
      />
      <span className='text-sm whitespace-nowrap font-[400]'>{title}</span>
    </button>
  );
}
