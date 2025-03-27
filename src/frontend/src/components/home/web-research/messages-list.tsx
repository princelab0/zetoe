import { AssistantMessageContent } from "@/components/home/web-research/assistant-message";
import { Separator } from "../../ui/separator";
import { UserMessageContent } from "@/components/home/web-research/user-message";
import { memo } from "react";
import {
  AgentSearchFullResponse,
  ChatMessage,
  MessageRole,
} from "../../../../generated";
import { ProSearchRender } from "@/components/home/web-research/pro-search-render";

const MessagesList = ({
  messages,
  streamingMessage,
  isStreamingMessage,
  streamingPromptMode,
  onRelatedQuestionSelect,
}: {
  messages: ChatMessage[];
  streamingMessage: ChatMessage | null;
  isStreamingMessage: boolean;
  streamingPromptMode: {
    Web: boolean;
    Research: boolean;
    Writing: boolean;
    Grammar: boolean;
    Translation: boolean;
    // Coding: boolean;
  };
  onRelatedQuestionSelect: (question: string) => void;
}) => {
  const streamingProResponse = streamingMessage?.agent_response;
  // console.log("messages", messages);
  // console.log("streamingMessage", streamingMessage);
  // console.log("isStreamingMessage", isStreamingMessage);
  // console.log("streamingPromptMode", streamingPromptMode);
  // console.log("onRelatedQuestionSelect", onRelatedQuestionSelect);
  return (
    <div className='flex flex-col pb-28'>
      {messages.map((message, index) =>
        message.role === MessageRole.USER ? (
          <UserMessageContent key={index} message={message} />
        ) : (
          <>
            {message.agent_response && (
              <ProSearchRender streamingProResponse={message.agent_response} />
            )}
            <AssistantMessageContent
              key={index}
              message={message}
              onRelatedQuestionSelect={onRelatedQuestionSelect}
            />
            {index !== messages.length - 1 && <Separator />}
          </>
        )
      )}

      {streamingPromptMode.Research && (
        <div className='mb-4'>
          <ProSearchRender
            streamingProResponse={streamingProResponse ?? null}
            streamingPromptMode={streamingPromptMode.Research}
          />
        </div>
      )}

      {streamingMessage && isStreamingMessage && (
        <AssistantMessageContent
          message={streamingMessage}
          isStreaming={true}
          onRelatedQuestionSelect={onRelatedQuestionSelect}
        />
      )}
    </div>
  );
};

export default memo(MessagesList);
