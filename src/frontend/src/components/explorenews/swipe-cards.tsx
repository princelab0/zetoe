"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import ExploreCard from "./explore-card";

interface SwipeCardsProps {
  isModalOpen: boolean;
  posts: any[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  isMobile: boolean;
}

export default function SwipeCards({
  isModalOpen,
  posts,
  currentIndex,
  onNext,
  onPrev,
  isMobile,
}: SwipeCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    let autoScrollInterval: any;

    if (isMobile && !isTouching) {
      autoScrollInterval = setInterval(() => {
        if (currentIndex < posts.length - 1) {
          onNext();
        }
      }, 3000);
      return () => clearInterval(autoScrollInterval);
    }
  }, [isMobile, currentIndex, isTouching, posts.length, onNext]);

  const handlers = useSwipeable({
    onSwipedUp: () => isMobile && onNext(),
    onSwipedDown: () => isMobile && onPrev(),
    onSwipedLeft: () => !isMobile && onNext(),
    onSwipedRight: () => !isMobile && onPrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
    onTap: ({ event }) => {
      event.stopPropagation(); // Allow video controls to work
    },
  });

  const handleTouchStart = (e: TouchEvent) => {
    setIsTouching(true);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.3s ease-in-out";
      if (isMobile) {
        containerRef.current.style.transform = `translateY(-${currentIndex * 100}vh)`;
      } else {
        containerRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }
    }
  }, [currentIndex, isMobile]);

  return (
    <div
      className='relative w-full h-full overflow-hidden pointer-events-none'
      {...handlers}
    >
      <div
        ref={containerRef}
        className={`flex ${isMobile ? "flex-col" : "flex-row items-center"} w-full h-full`}
        style={{
          height: isMobile ? `${posts.length * 100}vh` : "100%",
          width: isMobile ? "100%" : `${posts.length * 100}vw`,
        }}
      >
        {posts.map((post: any, index: number) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 ${
              index === currentIndex
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            style={{
              height: isMobile ? "100vh" : "100%",
              width: isMobile ? "100vw" : "100vw",
            }}
          >
            <ExploreCard
              isModalOpen={isModalOpen}
              cardImage={post.media_url}
              title={post.caption}
              author={post.username}
              mediaType={post.media_type}
              childrenPost={post?.children}
              likeCount={post.like_count}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
