"use client";
import { Modal } from "flowbite-react";
import CategoryItem from "./category-item";
import { categories } from "./utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@ai-sdk/react";

interface ModalPreferencesProps {
  isOpen: boolean;
  onClose: (selectedProviders?: string[]) => void;
  initialSelectedProviders: string[]; // New prop for initial providers
}

export default function ModalPreferences({
  isOpen,
  onClose,
  initialSelectedProviders,
}: ModalPreferencesProps) {
  const [activeCategories, setActiveCategories] = useState<{
    [key: number]: boolean;
  }>({});
  const [aiPrompt, setAiPrompt] = useState("");
  const { messages, append } = useChat({
    api: "/api/perference",
  });

  // Initialize activeCategories based on initialSelectedProviders when modal opens
  useEffect(() => {
    if (isOpen && initialSelectedProviders) {
      const initialActive = categories.reduce(
        (acc, category, index) => {
          if (initialSelectedProviders.includes(category.id)) {
            acc[index] = true;
          }
          return acc;
        },
        {} as { [key: number]: boolean }
      );
      setActiveCategories(initialActive);
    }
  }, [isOpen, initialSelectedProviders]);

  function handlePreferenceClick(originalIndex: number) {
    setActiveCategories((prev) => ({
      ...prev,
      [originalIndex]: !prev[originalIndex],
    }));
  }

  function handleAiPromptSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (aiPrompt.trim()) {
      append({ role: "user", content: aiPrompt });
      setAiPrompt("");
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "assistant") {
        try {
          const { categories: derivedCategories } = JSON.parse(
            lastMessage.content
          );
          const newActiveCategories = categories.reduce(
            (acc, category, index) => {
              if (derivedCategories.includes(category.id)) {
                acc[index] = true;
              }
              return acc;
            },
            {} as { [key: number]: boolean }
          );
          setActiveCategories((prev) => ({ ...prev, ...newActiveCategories }));
        } catch (error) {
          // console.error("Failed to parse AI response:", error);
        }
      }
    }
  }, [messages]);

  function handleSaveNewsProviders() {
    const selectedProviders = Object.entries(activeCategories)
      .filter(([_, isActive]) => isActive)
      .map(([index]) => categories[parseInt(index)].id)
      .filter((id) => id !== "for_you");
    onClose(selectedProviders);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 ${isOpen ? "flex" : "hidden"} items-center justify-center backdrop-blur-2xl backdrop-brightness-50 bg-black/60`}
    >
      <Modal
        onClick={(e) => e.stopPropagation()}
        show={isOpen}
        onClose={() => onClose()}
        className='w-full md:w-[75%] h-fit mx-auto md:my-auto rounded-lg overflow-hidden'
      >
        <Modal.Header id='modal_header'>
          <div className='flex flex-col items-center p-4'>
            <span className='text-2xl font-semibold'>
              Customize Your Discover
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-left'>
                Tell Us What You Like
              </h3>
              <form onSubmit={handleAiPromptSubmit} className='space-y-4'>
                <Textarea
                  id='ai-prompt'
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="E.g., 'I enjoy tech news and sports updates'"
                  className='w-full h-32 p-2 border rounded-md resize-none dark:bg-[hsl(180,2%,10%)] dark:text-[hsl(60,4%,91%)]'
                />
                <Button
                  type='submit'
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white'
                >
                  Submit
                </Button>
              </form>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-left'>
                Select News Providers
              </h3>
              <ScrollArea className='h-32'>
                <div className='flex flex-wrap gap-3'>
                  {categories
                    .map((category, originalIndex) => ({
                      category,
                      originalIndex,
                    }))
                    .filter(({ category }) => category.id !== "for_you")
                    .map(({ category, originalIndex }) => (
                      <CategoryItem
                        key={originalIndex}
                        icon={category.icon}
                        title={category.title}
                        isActive={!!activeCategories[originalIndex]}
                        onClick={() => handlePreferenceClick(originalIndex)}
                        isOpen={isOpen}
                      />
                    ))}
                </div>
              </ScrollArea>
              <Button
                variant='secondary'
                size='lg'
                className='w-full bg-blue-500 hover:bg-blue-600 text-white'
                onClick={handleSaveNewsProviders}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
