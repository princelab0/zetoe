"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useFirstPost } from "@/hooks/first-news"; // New hook
import { clipText } from "@/lib/utils";
import { ImageSelector } from "../explorenews/utils";

export default function NewsDisplay({ onRemove }: { onRemove: () => void }) {
  const { data: post, isLoading, isError, error } = useFirstPost();

  // Handle loading state
  if (isLoading) {
    return (
      <Card className='shadow-none relative h-full flex dark:bg-[hsl(240,3%,27%)] bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
        <CardContent className='flex flex-col items-start w-[90%] text-start h-full p-0 pl-2 pt-2'>
          <div>Fetching news...</div>
          <div className='absolute right-0 top-0'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onRemove}
              className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
            >
              <X className='h-1 w-2' />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <Card className='shadow-none relative h-full flex dark:bg-[hsl(240,3%,27%)] bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
        <CardContent className='flex flex-col items-start w-[90%] text-start h-full p-0 pl-2 pt-2'>
          <div>Error: {error?.message || "Failed to load news"}</div>
          <div className='absolute right-0 top-0'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onRemove}
              className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
            >
              <X className='h-1 w-2' />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Handle no post available (shouldn't happen with proper API response)
  if (!post) {
    return (
      <Card className='shadow-none relative h-full flex dark:bg-[hsl(240,3%,27%)] bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
        <CardContent className='flex flex-col items-start w-[90%] text-start h-full p-0 pl-2 pt-2'>
          <div>No news available</div>
          <div className='absolute right-0 top-0'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onRemove}
              className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
            >
              <X className='h-1 w-2' />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Render the post
  const clippedNews = clipText(post.caption, 50);

  return (
    <Card className='shadow-none relative h-full flex dark:bg-[hsl(240,3%,27%)] bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
      <CardContent className='flex flex-col items-start w-[90%] text-start h-full p-0 pl-2 pt-2'>
        <div
          title={post.caption} // Use full caption for tooltip
          className='font-medium md:!h-auto h-auto md:text-sm text-lg items-start text-[hsl(222,8%,48%)] dark:text-gray-400'
        >
          <Avatar className='left-0 inline-block mr-1 align-middle h-[16px] w-[16px]'>
            <AvatarImage src={ImageSelector(post.username)?.src}></AvatarImage>
            <AvatarFallback>Lg</AvatarFallback>
          </Avatar>
          {clippedNews}
        </div>

        <span className='flex absolute right-2 bottom-1 ml-auto gap-0.5 justify-start items-center'>
          <Heart
            fill='#f73056'
            strokeWidth={0}
            className='w-3 h-3 dark:text-gray-400'
          />
          <span className='text-[12px] text-gray-600 dark:text-gray-400'>
            {post.like_count.toString()}
          </span>
        </span>

        <div className='absolute right-0 top-0'>
          <Button
            variant='ghost'
            size='icon'
            onClick={onRemove}
            className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
          >
            <X className='h-1 w-2' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
