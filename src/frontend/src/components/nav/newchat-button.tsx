"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

const NewChatButton = () => {
  const [hover, setHover] = React.useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl key is pressed and the "o" key (case-insensitive)
      if (event.ctrlKey && event.key.toLowerCase() === "o") {
        event.preventDefault(); // Prevent the browser's default behavior for Ctrl+O
        location.href = "/";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  function handleHoverMouseEnter() {
    setHover(true);
  }
  function handleHoverMouseLeave() {
    setHover(false);
  }

  return (
    <Button
      variant='secondary'
      size='sm'
      onClick={() => (location.href = "/")}
      onMouseEnter={handleHoverMouseEnter}
      onMouseLeave={handleHoverMouseLeave}
      className=' shadow-none px-4 py-2 h-10  group  hover:py-3 rounded-full text-neutral-950 bg-neutral-100 dark:text-neutral-50 dark:bg-[hsl(0,0%,11%)]  '
    >
      <PlusIcon className='!w-5 !h-5 group-hover:rotate-[90deg] transition-transform ease-in duration-300 ' />
      {hover && <span className='text-base'>New</span>}
    </Button>
  );
};

export default NewChatButton;
