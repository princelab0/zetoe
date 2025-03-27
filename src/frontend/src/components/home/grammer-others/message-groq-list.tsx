import { useState } from "react";
import { UserMessageContent } from "../web-research/user-message";
import { MessageRole } from "generated";
import { Copy, CheckCircle } from "lucide-react";
import { Section } from "../web-research/section";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const MessageGroqList = ({ messages, status }: any) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  const parseMessageContent = (content: string) => {
    const parts = [];
    let remainingContent = content;

    // Handle code blocks
    const codeBlockRegex = /```([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(remainingContent)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: remainingContent.slice(lastIndex, match.index),
        });
      }

      const codeContent = match[1].trim();
      const language = codeContent.split("\n")[0].match(/^\w+/)?.[0] || "text";
      parts.push({
        type: "code",
        content: codeContent.replace(/^\w+\n/, ""),
        language,
      });

      lastIndex = codeBlockRegex.lastIndex;
    }

    if (lastIndex < remainingContent.length) {
      parts.push({
        type: "text",
        content: remainingContent.slice(lastIndex),
      });
    }

    // Process text parts for additional formatting
    const formattedParts: any = [];
    parts.forEach((part) => {
      if (part.type === "code") {
        formattedParts.push(part);
      } else {
        // Split by double newlines for paragraphs, preserve single newlines within paragraphs
        const paragraphs = part.content.split(/\n\n+/).filter((p) => p.trim());
        paragraphs.forEach((paragraph, paraIndex) => {
          const lines = paragraph.split("\n").filter((line) => line.trim());
          let paragraphParts: any = [];

          lines.forEach((line) => {
            // Handle headings (bold text followed by colon)
            const headingMatch = line.match(/^\*\*(.+?):\*\*/);
            if (headingMatch) {
              paragraphParts.push({
                type: "heading",
                content: headingMatch[1],
              });
            } else {
              // Handle numbered lists with bold items
              const listMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*:\s*(.*)$/);
              if (listMatch) {
                paragraphParts.push({
                  type: "list",
                  number: parseInt(listMatch[1]),
                  title: listMatch[2],
                  description: listMatch[3],
                });
              } else {
                // Handle bold text within the line
                const boldRegex = /\*\*(.*?)\*\*/g;
                let lastBoldIndex = 0;
                let boldMatch;
                while ((boldMatch = boldRegex.exec(line)) !== null) {
                  if (boldMatch.index > lastBoldIndex) {
                    paragraphParts.push({
                      type: "text",
                      content: line.slice(lastBoldIndex, boldMatch.index),
                    });
                  }
                  paragraphParts.push({
                    type: "bold",
                    content: boldMatch[1],
                  });
                  lastBoldIndex = boldRegex.lastIndex;
                }
                if (lastBoldIndex < line.length) {
                  paragraphParts.push({
                    type: "text",
                    content: line.slice(lastBoldIndex),
                  });
                }
              }
            }
          });

          // Add paragraph parts to formattedParts
          formattedParts.push(...paragraphParts);

          // Add separator only between paragraphs (not within)
          if (paraIndex < paragraphs.length - 1) {
            formattedParts.push({ type: "separator" });
          }
        });
      }
    });

    return formattedParts;
  };

  return (
    <div className='flex flex-col pb-28'>
      {messages.map((message: any, index: number) =>
        message.role === MessageRole.USER ? (
          <UserMessageContent key={index} message={message} />
        ) : (
          <Section
            key={index}
            title='Answer'
            animate={status === "streaming"}
            streaming={status === "streaming"}
          >
            <div className='flex flex-col rounded-3xl relative space-y-4 bg-transparent border mr-auto px-[1.25rem] !mb-4 !mt-4 py-2.5 w-full'>
              <div className='flex justify-between items-start'>
                <div className='w-[95%]'>
                  {parseMessageContent(message.content).map(
                    (part: any, partIndex: number) => (
                      <div key={partIndex} className='mb-2'>
                        {part.type === "text" ? (
                          <span className='font-medium text-gray-500 p-1 whitespace-pre-wrap'>
                            {part.content}
                          </span>
                        ) : part.type === "bold" ? (
                          <span className='font-bold text-gray-500 p-1'>
                            {part.content}
                          </span>
                        ) : part.type === "heading" ? (
                          <h3 className='font-bold text-gray-500 text-lg mt-4 mb-2'>
                            {part.content}
                          </h3>
                        ) : part.type === "list" ? (
                          <div className='flex items-start'>
                            <span className='font-medium text-gray-500 pr-2'>
                              {part.number}.
                            </span>
                            <div>
                              <span className='font-bold text-gray-500'>
                                {part.title}
                              </span>
                              <span className='font-medium text-gray-500'>
                                : {part.description}
                              </span>
                            </div>
                          </div>
                        ) : part.type === "separator" ? (
                          <div className='h-4' /> // Increased height for clearer paragraph separation
                        ) : part.type === "code" ? (
                          <SyntaxHighlighter
                            language={part.language}
                            style={tomorrow}
                            customStyle={{
                              borderRadius: "8px",
                              padding: "1rem",
                              margin: "0.5rem 0",
                            }}
                          >
                            {part.content}
                          </SyntaxHighlighter>
                        ) : null}
                      </div>
                    )
                  )}
                </div>
                <button
                  onClick={() => copyToClipboard(message.content, index)}
                  className='text-gray-500 hover:text-gray-400 focus:outline-none absolute top-2 right-3'
                  aria-label='Copy message'
                >
                  {copiedIndex === index ? (
                    <CheckCircle className='w-4 h-4 text-green-500' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
            </div>
          </Section>
        )
      )}
    </div>
  );
};

export default MessageGroqList;
