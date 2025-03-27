import { ChatMessage } from "../../../../generated";

export const UserMessageContent = ({ message }: { message: ChatMessage }) => {
  return (
    <div className='mt-8 mb-8'>
      <span className='text-base'>{message.content}</span>
    </div>
  );
};
