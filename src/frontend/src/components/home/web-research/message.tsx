import React, { FC, memo, useEffect, useState, useRef } from "react";
import { MemoizedReactMarkdown } from "@/components/home/web-research/markdown";
import rehypeRaw from "rehype-raw";
import type { Components } from "react-markdown";
import _ from "lodash";
import { cn } from "@/lib/utils";
import { Skeleton } from "../../ui/skeleton";
import { ChatMessage } from "../../../../generated";
import { animateScroll as scroll } from "react-scroll";
import { FaThinkPeaks } from "react-icons/fa6";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

export interface MessageProps {
  message: ChatMessage;
  isStreaming?: boolean;
}

function chunkString(str: string): string[] {
  const words = str.split(" ");
  const chunks = _.chunk(words, 2).map((chunk) => chunk.join(" ") + " ");
  return chunks;
}

const CitationText = ({ number, href }: { number: number; href: string }) => {
  return `
  <button className="select-none no-underline">
  <a className="" href="${href}" target="_blank">
        <span className="relative -top-[0rem] inline-flex">
          <span className="h-[1rem] min-w-[1rem] items-center justify-center rounded-full text-center px-1 text-xs font-mono bg-muted text-[0.60rem] text-muted-foreground">
            ${number}
          </span>
        </span>
      </a>
    </button>`;
};

const Text = ({
  children,
  isStreaming,
  containerElement = "p",
}: {
  children: React.ReactNode;
  isStreaming: boolean;
  containerElement: React.ElementType;
}) => {
  const renderText = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      const chunks = isStreaming ? chunkString(node) : [node];
      return chunks.flatMap((chunk, index) => (
        <span
          key={`${index}-streaming`}
          className={cn(
            isStreaming ? "animate-in fade-in-25 duration-700" : ""
          )}
        >
          {chunk}
        </span>
      ));
    } else if (React.isValidElement(node)) {
      return React.cloneElement(
        node,
        node.props as React.Attributes,
        renderText((node as any).props.children)
      );
    } else if (Array.isArray(node)) {
      return node.map((child, index) => (
        <React.Fragment key={index}>{renderText(child)}</React.Fragment>
      ));
    }
    return null;
  };

  const text = renderText(children);
  return React.createElement(containerElement, {}, text);
};

const StreamingParagraph = memo(
  ({ children }: React.HTMLProps<HTMLParagraphElement>) => (
    <Text isStreaming={true} containerElement='p'>
      {children}
    </Text>
  )
);

const Paragraph = memo(
  ({ children }: React.HTMLProps<HTMLParagraphElement>) => (
    <Text isStreaming={false} containerElement='p'>
      {children}
    </Text>
  )
);

const ListItem = memo(({ children }: React.HTMLProps<HTMLLIElement>) => (
  <Text isStreaming={false} containerElement='li'>
    {children}
  </Text>
));

const StreamingListItem = memo(
  ({ children }: React.HTMLProps<HTMLLIElement>) => (
    <Text isStreaming={true} containerElement='li'>
      {children}
    </Text>
  )
);

StreamingParagraph.displayName = "StreamingParagraph";
Paragraph.displayName = "Paragraph";
ListItem.displayName = "ListItem";
StreamingListItem.displayName = "StreamingListItem";

const ThinkBox: React.FC<{
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  isStreaming: boolean;
}> = ({ children, isExpanded, onToggle, isStreaming }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(
    "ThinkBox Render - isExpanded:",
    isExpanded,
    "isStreaming:",
    isStreaming
  );

  useEffect(() => {
    if (isStreaming && scrollRef.current) {
      const scrollInterval = setInterval(() => {
        scroll.scrollTo(scrollRef.current!.scrollHeight, {
          duration: 2000,
          smooth: "easeInOutQuad",
          containerId: scrollRef.current?.id || "think-scroll-container",
        });
      }, 1000);
      return () => clearInterval(scrollInterval);
    }
  }, [isStreaming]);

  console.log("ThinkBox - Applying class:", {
    isStreaming,
    isExpanded,
    className: cn(
      "mt-1 text-sm text-gray-700 prose dark:prose-invert",
      isStreaming
        ? "h-20 overflow-y-auto"
        : isExpanded
          ? "h-auto"
          : "h-0 overflow-hidden"
    ),
  });

  return (
    <div className='my-4 bg-transparent rounded-3xl shadow-sm border border-neutral-500/40'>
      <div
        className='flex flex-col gap-1 justify-center items-start cursor-pointer'
        onClick={() => {
          console.log("Header clicked, toggling isExpanded");
          onToggle();
        }}
      >
        <div className='text-base w-full flex items-center justify-between text-[#0A0a0a] px-5 pt-4  '>
          <div className='flex items-center gap-1'>
            <span>
              <Lightbulb width={16} height={16} />
            </span>
            <span className='font-semibold'>Thought for </span>
            <span className='font-medium text-[hsl(216,4%,51%)] text-sm '>
              {isStreaming ? "..." : "9s"}
            </span>
          </div>
          <span className='text-xs text-gray-500'>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        <p className='w-full align-middle ml-0.5 font-semibold text-sm text-gray-500 px-5 pb-4'>
          {isExpanded ? "Collapse" : "Expand"} for details
        </p>
      </div>
      <div
        ref={scrollRef}
        id='think-scroll-container'
        className={cn(
          "mt-1 px-5  font-medium break-words !leading-[1.8] max-w-full text-sm  prose dark:prose-invert",
          isStreaming
            ? "h-20 overflow-y-auto"
            : isExpanded
              ? "h-auto"
              : "h-0 overflow-hidden"
        )}
        style={{ transition: "height 0.3s ease" }}
      >
        {children}
      </div>
    </div>
  );
};

export const MessageComponent: FC<MessageProps> = ({
  message,
  isStreaming = false,
}) => {
  const { content, sources } = message;
  const [parsedMessage, setParsedMessage] = useState<string>(content);
  const [isExpanded, setIsExpanded] = useState(isStreaming);

  console.log(
    "MessageComponent Render - isExpanded:",
    isExpanded,
    "isStreaming:",
    isStreaming
  );

  useEffect(() => {
    const thinkMatch = content.match(/<think>([\s\S]*?)<\/think>/);
    let newContent = content;
    if (thinkMatch) {
      const thinkText = thinkMatch[1].trim();
      newContent = content.replace(
        /<think>[\s\S]*?<\/think>/,
        `<div class="thinking-content">${thinkText}</div>`
      );
    }

    const citationRegex = /(\[\d+\])/g;
    const finalMessage = newContent.replace(citationRegex, (match) => {
      const number = match.slice(1, -1);
      const source = sources?.find(
        (source, idx) => idx + 1 === parseInt(number)
      );
      return CitationText({
        number: parseInt(number),
        href: source?.url ?? "",
      });
    });
    setParsedMessage(finalMessage);
    console.log("Parsed Message:", finalMessage);
  }, [content, sources]);

  useEffect(() => {
    if (isStreaming) {
      console.log("Streaming started, setting isExpanded to true");
      setIsExpanded(true);
    }
    // Do not force collapse after streaming; let user control
  }, [isStreaming]);

  const thinkingMatch = parsedMessage.match(
    /<div class="thinking-content">([\s\S]*?)<\/div>/
  );
  const thinkingContent = thinkingMatch ? thinkingMatch[1] : "";
  const userContent = thinkingMatch
    ? parsedMessage
        .replace(/<div class="thinking-content">[\s\S]*?<\/div>/, "")
        .trim()
    : parsedMessage;

  return (
    <>
      {thinkingContent && (
        <ThinkBox
          key={`think-box-${isExpanded}`} // Force re-render on state change
          isExpanded={isExpanded}
          onToggle={() => {
            console.log("Toggling isExpanded from:", isExpanded);
            setIsExpanded((prev) => {
              const newExpanded = !prev;
              console.log("New isExpanded value:", newExpanded);
              return newExpanded;
            });
          }}
          isStreaming={isStreaming}
        >
          <MemoizedReactMarkdown
            components={{
              p: isStreaming ? StreamingParagraph : Paragraph,
              li: isStreaming ? StreamingListItem : ListItem,
            }}
            rehypePlugins={[rehypeRaw]}
          >
            {thinkingContent}
          </MemoizedReactMarkdown>
        </ThinkBox>
      )}
      {userContent && (
        <MemoizedReactMarkdown
          components={{
            p: isStreaming ? StreamingParagraph : Paragraph,
            li: isStreaming ? StreamingListItem : ListItem,
          }}
          className='prose dark:prose-invert inline leading-relaxed break-words mt-2'
          rehypePlugins={[rehypeRaw]}
        >
          {userContent}
        </MemoizedReactMarkdown>
      )}
    </>
  );
};

export const MessageComponentSkeleton = () => {
  return (
    <>
      <Skeleton className='w-full py-4 bg-card'>
        <div className='flex flex-col gap-4'>
          <Skeleton className='mx-5 h-2 bg-primary/30' />
          <Skeleton className='mx-5 h-2 bg-primary/30 mr-20' />
          <Skeleton className='mx-5 h-2 bg-primary/30 mr-40' />
        </div>
      </Skeleton>
    </>
  );
};
