"use client";

import { useChat } from "@/hooks/chat";
import { useChatStore } from "@/stores";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AskInput } from "@/components/home/web-research/ask-input";

import { useChatThread } from "@/hooks/threads";
import { LoaderIcon } from "lucide-react";
import { MessageRole } from "../../../../generated";
import MessagesList from "@/components/home/web-research/messages-list";

import { useTranslations } from "next-intl";
import Widget from "../../widget/widget";

// function useScrollToBottom(element: HTMLDivElement | null, data: any) {
//   const scrollToBottom = () => {
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data]);
// }

const useAutoResizeInput = (
  ref: React.RefObject<HTMLDivElement | null>,
  setWidth: (width: number) => void
) => {
  const { messages } = useChatStore();

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        setWidth(ref.current.scrollWidth);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [messages, ref, setWidth]);
};

const useAutoFocus = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
  useEffect(() => {
    ref.current?.focus();
  }, [ref]);
};

export const ChatPanel = ({ threadId }: { threadId?: number }) => {
  const t = useTranslations("chatPanel");
  const tt = useTranslations("footer");
  const searchParams = useSearchParams();
  const queryMessage = searchParams.get("q");
  const hasRun = useRef(false);

  const {
    handleSend,
    streamingMessage,
    isStreamingMessage,
    streamingPromptMode,
  } = useChat();
  const { messages, setMessages, setThreadId } = useChatStore();
  const { data: thread, isLoading, error } = useChatThread(threadId);

  const [width, setWidth] = useState(0);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // const scrollRef = useRef<HTMLDivElement | null>(null);

  // useScrollToBottom(scrollRef.current, messages);
  useAutoResizeInput(messagesRef, setWidth);
  useAutoFocus(inputRef);

  useEffect(() => {
    if (queryMessage && !hasRun.current) {
      setThreadId(null);
      hasRun.current = true;
      handleSend(queryMessage);
    }
  }, [queryMessage]);

  useEffect(() => {
    if (!thread) return;
    setThreadId(thread.thread_id);
    setMessages(thread.messages || []);
  }, [threadId, thread, setMessages, setThreadId]);

  useEffect(() => {
    if (messages.length == 0) {
      setThreadId(null);
    }
  }, [messages, setThreadId]);

  return (
    <>
      {messages.length > 0 || threadId ? (
        isLoading ? (
          <div className='w-full flex justify-center items-center'>
            <LoaderIcon className='animate-spin w-8 h-8' />
          </div>
        ) : (
          <div ref={messagesRef} className='mt-[72px] w-full relative'>
            <MessagesList
              messages={messages}
              streamingMessage={streamingMessage}
              isStreamingMessage={isStreamingMessage}
              streamingPromptMode={streamingPromptMode}
              onRelatedQuestionSelect={handleSend}
            />

            {/* <div ref={scrollRef} /> */}

            <div className=' w-full h-[123px] z-[100]  bg-[#ffffff] dark:bg-[hsl(240,10%,4%)] bottom-0 fixed flex items-end mr-4 '>
              <div
                className=' max-w-screen-md  flex justify-center items-center mb-8 mt-4 '
                style={{ width: `${width}px` }}
              >
                <AskInput isFollowingUp sendMessage={handleSend} />
              </div>
            </div>
          </div>
        )
      ) : (
        <div className='w-full  flex flex-col justify-center items-center mb-[5rem]'>
          <span className='pb-1 bottom-0  absolute w-full text-[12px] font bold  text-center text-gray-800 dark:text-gray-50'>
            {tt("title")}
          </span>
          <div className='flex items-center justify-center mb-8'>
            <span className='md:text-[40px] text-3xl '>
              {/* Where curiosity begins. */}
              {t("mainTitle")}
            </span>
          </div>
          <AskInput sendMessage={handleSend} />
          <div className='w-full h-[7.5rem] flex flex-row  justify-between space-y-2 relative'>
            <Widget />
          </div>
        </div>
      )}
    </>
  );
};
