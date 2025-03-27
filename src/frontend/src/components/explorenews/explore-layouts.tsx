"use client";
import React, { useEffect, useState, useRef } from "react";
import Categories from "./categories";
import ExploreCard from "./explore-card";
import Modal from "./modal";
import { Post } from "@/app/newsexplore/page";
import { Globe } from "lucide-react";
import { Spinner } from "flowbite-react";

interface ExploreLayoutProps {
  posts: Post[];
}

export default function ExploreLayout({ posts }: ExploreLayoutProps) {
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [page, setPage] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchMorePosts = () => {
    if (isLoading || !hasMorePosts) return;

    setIsLoading(true);
    setTimeout(() => {
      try {
        const nextPosts = filteredPosts.slice(page * 10, (page + 1) * 10);
        if (nextPosts.length > 0) {
          setDisplayPosts((prev) => [...prev, ...nextPosts]);
          setPage((prev) => prev + 1);
        } else {
          setHasMorePosts(false);
        }
      } catch (error) {
        // console.error("Failed to load more posts:", error);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  // Initial load with "For You" handled by Categories component
  useEffect(() => {
    // Do nothing here; let Categories set the initial filteredPosts
  }, [posts]);

  // Update displayPosts when filteredPosts changes
  useEffect(() => {
    setDisplayPosts(filteredPosts.slice(0, 10));
    setPage(1);
    setHasMorePosts(filteredPosts.length > 10);
  }, [filteredPosts]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (isLoading || !hasMorePosts || isModalOpen) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const isUserScroll = e.type === "wheel" || e.type === "keydown";

      if (isUserScroll && scrollTop + clientHeight >= scrollHeight - 100) {
        fetchMorePosts();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("keydown", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleScroll);
    };
  }, [isLoading, hasMorePosts, isModalOpen]);

  const handleCardClick = (index: number) => {
    setClickedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='relative pt-[72px] flex flex-col gap-8 px-4 mx-4 md:mx-8 lg:mx-32 xl:mx-48 2xl:mx-80 dark:bg-[hsl(180,2%,10%)]'>
      <div>
        <div className='flex gap-2 items-center justify-start relative pb-4'>
          <Globe className='w-8 h-8 text-gray-600 dark:text-[hsl(60,4%,91%)]' />
          <h2 className='text-3xl font-semibold text-gray-600 dark:text-[hsl(60,4%,91%)]'>
            Explore
          </h2>
        </div>
        <Categories posts={posts} setFilteredPosts={setFilteredPosts} />
      </div>

      <div
        id='exploreCard'
        className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8'
      >
        {displayPosts.map((post: Post, index: number) => (
          <div
            role='button'
            key={index}
            className={`${index === 0 ? "col-span-full" : "col-span-1"}`}
            onClick={() => handleCardClick(index)}
          >
            <ExploreCard
              isModalOpen={isModalOpen}
              cardImage={post.media_url}
              title={post.caption}
              childrenPost={post.children}
              author={post.username}
              mediaType={post.media_type}
              likeCount={post.like_count}
            />
          </div>
        ))}
      </div>

      {hasMorePosts && (
        <div ref={loaderRef} className='flex justify-center items-center py-4'>
          {isLoading && (
            <Spinner
              size='xl'
              className='text-gray-600 dark:text-[hsl(60,4%,91%)]'
            />
          )}
        </div>
      )}

      {!hasMorePosts && displayPosts.length > 0 && (
        <div className='text-center py-4 text-gray-600 dark:text-[hsl(60,4%,91%)]'>
          No more posts available.
        </div>
      )}

      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          posts={displayPosts}
          initialIndex={clickedIndex}
        />
      )}
    </section>
  );
}
