"use client";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useChat as useGrokChat } from "@ai-sdk/react";
import { useTranslations } from "next-intl";
import Widget from "../../widget/widget";
import MessageGroqList from "./message-groq-list";
import { AskInputGrok } from "./ask-input-groq";
import { useConfigStore, useGroqChatStore } from "@/stores";
function useScrollToBottom(element: HTMLDivElement | null, data: any) {
  const scrollToBottom = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
}
const useAutoResizeInput = (
  ref: React.RefObject<HTMLDivElement | null>,
  setWidth: (width: number) => void
) => {
  const { messages } = useGrokChat();

  useLayoutEffect(() => {
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

export const Chat = () => {
  const t = useTranslations("chatPanel");
  const tt = useTranslations("footer");
  const { promptMode } = useConfigStore();

  const { messages, input, handleSubmit, status, setInput } = useGrokChat({
    api: "/api/chat",
  });
  const { setGrokMessages } = useGroqChatStore();
  useEffect(() => {
    setGrokMessages(messages);
  }, [messages, setGrokMessages]);
  const modifiedHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, { body: { mode: promptMode } });
    // setGrokMessages(messages);
  };

  const [width, setWidth] = useState(0);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useScrollToBottom(scrollRef.current, messages);
  useAutoResizeInput(messagesRef, setWidth);
  useAutoFocus(inputRef);

  return (
    <>
      {messages.length > 0 ? (
        <div ref={messagesRef} className='mt-[72px] w-full relative'>
          <MessageGroqList status={status} messages={messages} />

          <div ref={scrollRef} />
          <div className=' w-full h-[123px] bg-[#ffffff] dark:bg-[hsl(240,10%,4%)] !border-none bottom-0 fixed flex items-end mr-4  shadow-none'>
            <div
              className=' max-w-screen-md  flex justify-center items-center mb-8 mt-4 '
              style={{ width: `${width || 704}px` }}
            >
              <AskInputGrok
                input={input}
                setInput={setInput}
                handleSubmit={modifiedHandleSubmit}
                status
                isFollowingUp
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-col justify-center items-center mb-[5rem]'>
          <span className='pb-1 bottom-0  absolute w-full text-[12px] font bold  text-center text-gray-800 dark:text-gray-50'>
            {tt("title")}
          </span>
          <div className='flex items-center justify-center mb-8'>
            <span className='md:text-[40px] text-3xl '>
              {/* Where curiosity begins. */}
              {t("mainTitle")}
            </span>
          </div>

          <AskInputGrok
            input={input}
            setInput={setInput}
            handleSubmit={modifiedHandleSubmit}
            status
          />
          <div className='w-full h-[7.5rem] flex flex-row  justify-between space-y-2 relative'>
            <Widget />
          </div>
        </div>
      )}
    </>
  );
};
