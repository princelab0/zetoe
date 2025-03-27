// app/search/[id]/ChatPageClient.tsx
"use client";
import { useEffect, Suspense } from "react";
import { PromptMode } from "../../../../generated";
import { ChatPanel } from "@/components/home/web-research/chat-panel";
import { useChatStore, useConfigStore } from "@/stores";
import { Chat } from "@/components/home/grammer-others/chat";

export default function ChatPageClient({ threadId }: { threadId: number }) {
  const { setIsGroqMode } = useChatStore();
  const { promptMode } = useConfigStore();

  useEffect(() => {
    setIsGroqMode(
      promptMode === PromptMode.Writing ||
        promptMode === PromptMode.Grammar ||
        promptMode === PromptMode.Translation
      // || promptMode === PromptMode.Coding
    );
  }, [promptMode]);

  return (
    <div className='h-screen'>
      <div className='flex grow h-full mx-auto max-w-screen-md px-4 md:px-8'>
        <Suspense>
          {promptMode === PromptMode.Writing ||
          promptMode === PromptMode.Grammar ||
          promptMode === PromptMode.Translation ? (
            // || PromptMode.Coding
            <Chat />
          ) : (
            <ChatPanel threadId={threadId} />
          )}
        </Suspense>
      </div>
    </div>
  );
}
