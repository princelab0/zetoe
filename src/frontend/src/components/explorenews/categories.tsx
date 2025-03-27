"use client";
import { useRef, useState, useEffect } from "react";
import CategoryItem from "./category-item";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { PiSliders } from "react-icons/pi";
import ModalPreferences from "./modal-perference";
import { categories } from "./utils";

interface CategoriesProps {
  posts: any[];
  setFilteredPosts: (posts: any[]) => void;
}

export default function Categories({
  posts,
  setFilteredPosts,
}: CategoriesProps) {
  const [showModal, setShowModal] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to "For You" (index 0)
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  // Load preferences and set "For You" as default on mount
  useEffect(() => {
    const savedProviders = localStorage.getItem("selectedProviders");
    if (savedProviders) {
      const parsedProviders = JSON.parse(savedProviders);
      setSelectedProviders(parsedProviders);
      handleNewsDisplay(0, parsedProviders); // Apply "For You" with saved preferences
    } else {
      handleNewsDisplay(0); // Default to "For You" with all posts if no preferences
    }
  }, [posts]);

  function scrollLeft() {
    carouselRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  }

  function scrollRight() {
    carouselRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  }

  function handlePreferenceModal() {
    setShowModal((prev) => !prev);
  }

  function handleModalClose(selectedProvidersFromModal?: string[]) {
    if (selectedProvidersFromModal) {
      setSelectedProviders(selectedProvidersFromModal);
      localStorage.setItem(
        "selectedProviders",
        JSON.stringify(selectedProvidersFromModal)
      );
      if (activeIndex === 0) {
        handleNewsDisplay(0, selectedProvidersFromModal);
      }
    }
    setShowModal(false);
  }

  function handleNewsDisplay(index: number, providersFromModal?: string[]) {
    setActiveIndex(index);
    const selectedCategory = categories[index].id;
    const currentProviders = providersFromModal || selectedProviders;

    if (selectedCategory === "for_you") {
      const filtered =
        currentProviders.length > 0
          ? posts.filter((post: any) =>
              currentProviders.includes(post.username)
            )
          : posts; // Show all posts if no providers selected
      setFilteredPosts(filtered);
    } else {
      const filtered = posts.filter(
        (post: any) => post.username === selectedCategory
      );
      setFilteredPosts(filtered);
    }
  }

  return (
    <div className='w-full flex items-center justify-center gap-6'>
      <button
        onClick={scrollLeft}
        className='left-0 z-10 ml-4 p-2 bg-white rounded-full shadow-md dark:bg-[hsl(180,2%,18%)]'
      >
        <GoArrowLeft
          size={18}
          className='dark:hover:text-gray-500 transition-colors'
        />
      </button>

      <div
        ref={carouselRef}
        className='flex gap-3 overflow-x-hidden w-full px-0'
      >
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            title={category.title}
            isActive={index === activeIndex}
            onClick={() => handleNewsDisplay(index)}
          />
        ))}
      </div>

      <button
        onClick={scrollRight}
        className='right-0 z-10 mr-4 p-2 bg-white rounded-full shadow-md dark:bg-[hsl(180,2%,18%)]'
      >
        <GoArrowRight
          size={18}
          className='dark:hover:text-gray-500 transition-colors'
        />
      </button>

      <button
        onClick={handlePreferenceModal}
        className='flex justify-start items-center z-10 rounded-full p-2 dark:bg-[hsl(180,2%,18%)] bg-[hsl(60,10%,90%)]'
      >
        <PiSliders
          size={18}
          className='dark:hover:text-gray-500 transition-colors rotate-90'
        />
      </button>
      <ModalPreferences
        isOpen={showModal}
        onClose={handleModalClose}
        initialSelectedProviders={selectedProviders}
      />
    </div>
  );
}
