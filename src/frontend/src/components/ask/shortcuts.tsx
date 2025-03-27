"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";

interface ShortcutItem {
  action: string;
  keys: string[];
}

const shortcuts: { left: ShortcutItem[] } = {
  left: [
    { action: "keyboard_shortcuts.action1", keys: ["Ctrl", "Shift", "O"] },
    { action: "keyboard_shortcuts.action2", keys: ["Shift", "Q"] },
  ],
};

export default function Shortcuts() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("footer");
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open new chat: Ctrl + Shift + O
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "o") {
        event.preventDefault();
        // Mimic NewChatButton functionality: redirect to "/"
        location.href = "/";
      }
      // Focus chat input: Shift + Esc
      else if (event.shiftKey && event.key === "Escape") {
        event.preventDefault();
        const chatInput = document.getElementById("chat-input");
        if (chatInput) {
          (chatInput as HTMLElement).focus();
        }
      }
      // Show shortcuts dialog: Ctrl + /
      else if (event.ctrlKey && event.key === "/") {
        event.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='text-[hsl(180,3%,13%)] dark:text-[hsl(60,4%,91%)] dark:hover:bg-neutral-700 hover:scale-105  hover:bg-[hsl(60,4%,91%)]  rounded-lg  text-sm  my-0 mx-2 p-2 cursor-pointer'>
          {t("keyboard_shortcuts.title")}
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[550px]'>
        <DialogHeader className='flex flex-row items-center justify-between'>
          <DialogTitle>{t("keyboard_shortcuts.title")}</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-8'>
          <div className='space-y-4'>
            {shortcuts.left.map((item) => (
              <div
                key={item.action}
                className='flex justify-between items-center'
              >
                <span className='text-sm'>{t(item.action)}</span>
                <div className='flex gap-1'>
                  {item.keys.map((key, index) => (
                    <kbd
                      key={index}
                      className='px-2 py-1 text-xs font-semibold bg-muted rounded border'
                    >
                      {key}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
