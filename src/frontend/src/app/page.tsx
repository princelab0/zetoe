"use client";
import { Chat } from "@/components/home/grammer-others/chat";
import { ChatPanel } from "@/components/home/web-research/chat-panel";
import { useChatStore, useConfigStore } from "@/stores";
import { MessageRole, PromptMode } from "generated";
import { Suspense, useEffect, useRef } from "react";
export default function Home() {
  const { setIsGroqMode } = useChatStore();
  const { promptMode } = useConfigStore();

  useEffect(() => {
    setIsGroqMode(
      promptMode === PromptMode.Writing ||
        promptMode === PromptMode.Grammar ||
        promptMode === PromptMode.Translation
    );
  }, [promptMode]);

  return (
    <div className='relative   h-screen dark:bg-gradient-to-b dark:from-[hsl(220, 6%, 10%)] dark:via-[hsl(220, 5%, 13%))] dark:to-[hsl(225, 4%, 19%)]'>
      <div className='relative flex grow h-full mx-auto max-w-screen-md px-4 md:px-8'>
        <Suspense>
          {promptMode === PromptMode.Writing ||
          promptMode === PromptMode.Grammar ||
          promptMode === PromptMode.Translation ? (
            <Chat />
          ) : (
            <ChatPanel />
          )}
        </Suspense>
      </div>
    </div>
  );
}
