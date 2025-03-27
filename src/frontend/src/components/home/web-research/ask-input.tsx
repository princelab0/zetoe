import { useState, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "../../ui/button";
import { ArrowUp } from "lucide-react";
import PromptModeSelection from "@/components/prompt-mode/pro-toggle";
// import { ModelSelection } from "./model-selection";
import { useChatStore, useConfigStore } from "@/stores";
import { createClient } from "@/utils/supabase/client";
import { useTranslations } from "next-intl";

// shared classes

// InputBar component
const InputBar = ({
  input,
  setInput,
  user,
  inputRef,
}: {
  input: string;
  setInput: (input: string) => void;
  user?: any;
  inputRef?: React.Ref<HTMLTextAreaElement>;
}) => {
  const t = useTranslations("inputBar");
  return (
    <div className='w-full flex dark:bg-gradient-to-r dark:from-[hsl(240,3%,27%)] dark:via-[hsl(0,0%,18%)] dark:to-[hsl(240,3%,27%)] flex-col rounded-xl bg-card border border-neutral-300 dark:border-neutral-400  focus-within:ring-tint px-3 py-2'>
      <div className='w-full'>
        <TextareaAutosize
          className='!overflow-auto max-h-[150px]  w-full bg-transparent text-md resize-none  focus:outline-none p-0 placeholder-gray-500'
          placeholder={t("placeholder")}
          minRows={2}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          ref={inputRef}
        />
      </div>
      <div className='flex items-center justify-end mt-2 gap-3'>
        <div className='flex items-center justify-between w-full '>
          <PromptModeSelection id='input_bar' user={user} />
          <Button
            type='submit'
            variant='default'
            size='icon'
            className='rounded-full bg-blue-400 h-9 w-9 flex items-center justify-center disabled:opacity-20 hover:bg-blue-400/80 focus:bg-blue-500 focus:ring-2 focus:ring-blue-500'
            disabled={input.trim().length === 0}
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

// FollowUpInput component
const FollowingUpInput = ({
  input,
  setInput,
  user,
  inputRef,
}: {
  input: string;
  setInput: (input: string) => void;
  user?: any;
  inputRef?: React.Ref<HTMLTextAreaElement>;
}) => {
  const t = useTranslations("followUpInput");
  return (
    <div className='w-full flex flex-col rounded-xl focus:outline-none px-2 py-1 bg-card border-2 items-center '>
      <div className='w-full'>
        <TextareaAutosize
          ref={inputRef}
          className='!overflow-auto max-h-[150px]  w-full bg-transparent text-md resize-none focus:outline-0 p-2'
          placeholder={t("placeholder")}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className=' w-full p-2 flex items-center justify-between gap-2'>
        <PromptModeSelection id='follow_up_input' user={user} />
        <Button
          type='submit'
          variant='default'
          size='icon'
          className='rounded-full bg-blue-400 aspect-square h-8 w-8 disabled:opacity-20 hover:bg-blue-400/80 overflow-hidden'
          disabled={input.trim().length === 0}
        >
          <ArrowUp size={20} />
        </Button>
      </div>
    </div>
  );
};

// AskInput component
export const AskInput = ({
  sendMessage,
  isFollowingUp = false,
}: {
  sendMessage: (message: string) => void;
  isFollowingUp?: boolean;
}) => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<any>(null);
  const { updateProSearchCount } = useChatStore();
  const { proMode } = useConfigStore();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // fetch the user
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  // Global keydown listener to focus the textarea on Ctrl+Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "q") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  // increase the proSearchCount
  function handleIncreaseProSearchCount() {
    if (proMode === true) {
      updateProSearchCount(1, user.id);
    }
  }

  return (
    <form
      className='w-full shadow-md rounded-xl overflow-hidden'
      onSubmit={(e) => {
        if (input.trim().length === 0) return;
        e.preventDefault();
        sendMessage(input);
        handleIncreaseProSearchCount();
        setInput("");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (input.trim().length === 0) return;
          sendMessage(input);
          handleIncreaseProSearchCount();

          setInput("");
        }
      }}
    >
      {isFollowingUp ? (
        <FollowingUpInput
          input={input}
          setInput={setInput}
          user={user}
          inputRef={inputRef}
        />
      ) : (
        <InputBar
          input={input}
          setInput={setInput}
          inputRef={inputRef}
          user={user}
        />
      )}
    </form>
  );
};
