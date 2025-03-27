"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaXmark } from "react-icons/fa6";
import SwipeCards from "./swipe-cards";
import { Post } from "@/app/newsexplore/page";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  posts: Post[];
  initialIndex: number;
}

const Modal = ({
  isModalOpen,
  closeModal,
  posts,
  initialIndex,
}: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 767);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "?";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [isModalOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < posts.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div
      className='fixed inset-0 z-[1000] flex w-full items-center justify-center bg-gray-800/50 backdrop-blur-lg'
      onClick={handleOverlayClick}
    >
      <div
        className={`relative z-20 flex flex-col gap items-center justify-center ${
          isMobile ? "w-full h-full" : "w-[90vw] md:w-[63%] h-fit"
        }`}
      >
        <div className='relative w-full h-full'>
          <SwipeCards
            isModalOpen={isModalOpen}
            posts={posts}
            currentIndex={currentIndex}
            onNext={handleNextCard}
            onPrev={handlePrevCard}
            isMobile={isMobile}
          />
          {isMobile && (
            <button
              className='absolute top-0 right-0 p-2 rounded-full bg-black/90 hover:bg-black/80 shadow-lg z-30 pointer-events-auto'
              onClick={closeModal}
              aria-label='Close modal'
            >
              <FaXmark className='w-3 h-3 text-white' />
            </button>
          )}
        </div>
        {!isMobile && (
          <div className='w-full justify-between items-center md:flex hidden'>
            <button
              className='absolute top-1/2 -left-24 transform -translate-y-1/2 p-3 disabled:cursor-not-allowed rounded-full bg-black/90 hover:bg-black/80 shadow-lg z-30 pointer-events-auto'
              onClick={handlePrevCard}
              disabled={currentIndex === 0}
            >
              <FaAngleLeft className='w-6 h-6 font-bold text-white' />
            </button>
            <button
              className='absolute top-1/2 -right-24 disabled:cursor-not-allowed transform -translate-y-1/2 p-3 rounded-full bg-black/90 hover:bg-black/80 shadow-lg z-30 pointer-events-auto'
              onClick={handleNextCard}
              disabled={currentIndex === posts.length - 1}
            >
              <FaAngleRight className='w-6 h-6 font-bold text-white' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
