"use client";
import Image from "next/image";
import BlogAuthor from "./blog-author";
import { useEffect, useRef } from "react";

type ExploreCardProps = {
  isModalOpen: boolean;
  cardImage: string;
  title: string;
  likeCount: number;
  author: string;
  mediaType: string;
  childrenPost: any;
};

export default function ExploreCard({
  isModalOpen,
  cardImage,
  title,
  likeCount,
  author,
  mediaType,
  childrenPost,
}: ExploreCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isModalOpen) {
        videoRef.current.pause();
      } else {
        videoRef.current.pause(); // Ensure it doesn't auto-play when modal closes unless user interacts
      }
    }
  }, [isModalOpen]);
  return (
    <article
      className={`flex flex-col max-w-full shadow-2xl min-w-[200px] bg-gray-300/80 p-4 h-[28rem] md:h-[32rem] rounded-xl gap-5 hover:bg-gray-300/50 dark:bg-[hsl(180,3%,13%)] dark:text-white dark:hover:bg-[hsl(180,5%,20%)] ${
        isModalOpen
          ? "bg-gray-300 w-[90%] h-[90vh] mx-auto my-8 md:m-0  hover:bg-gray-300/80 md:w-[63%] md:h-[90vh]"
          : "hover:shadow-lg hover:scale-[1.01] hover:cursor-pointer transition-transform duration-200"
      }`}
      style={{ pointerEvents: "auto" }} // Ensure interactivity
    >
      <div className='relative w-full h-[75%]'>
        {mediaType === "IMAGE" && (
          <Image
            fill
            src={cardImage}
            alt='blog image'
            className='h-[500px] object-cover rounded-lg object-top'
          />
        )}
        {mediaType === "VIDEO" && (
          <video
            ref={videoRef}
            muted
            width={"100%"}
            height={"100%"}
            src={cardImage}
            className='min-w-[200px] m-0 p-0 max-w-full max-h-full rounded-lg object-contain object-top'
            controls
            autoPlay={false}
            style={{ pointerEvents: "auto", position: "relative", zIndex: 25 }}
          ></video>
        )}
        {mediaType === "CAROUSEL_ALBUM" && (
          <div className='relative w-full h-full'>
            <Image
              fill
              src={childrenPost?.data[0]?.media_url}
              alt='carousel image'
              className='max-w-full max-h-full object-cover rounded-lg object-top'
            />
            <span className='absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-lg'>
              1 of {childrenPost?.data?.length} (Carousel)
            </span>
          </div>
        )}
      </div>

      <div className='flex flex-col gap-4'>
        <h5
          title={title}
          className='pl-2 text-pretty text-lg font-[600] tracking-tight text-blue-950 dark:text-white'
        >
          {isModalOpen
            ? title.length > 50
              ? title.slice(0, 100) + " ..."
              : title
            : title.length > 30
              ? title.slice(0, 30) + " ..."
              : title}
        </h5>
        <BlogAuthor likes={likeCount} author={author} />
      </div>
    </article>
  );
}
