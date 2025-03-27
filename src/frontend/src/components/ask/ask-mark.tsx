"use client";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import AskMarkList from "./ask-mark-list";
import Shortcuts from "./shortcuts";
export default function AskMark() {
  const t = useTranslations("footer");
  return (
    <footer className='fixed bottom-[2px] right-[2px]'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='rounded-full w-6 h-6 p-0 bg-gray-800 dark:bg-gray-50 dark:text-black hover:bg-gray-700 text-white'>
            ?
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          loop
          side='top'
          align='start'
          alignOffset={20}
          className='w-[15rem] mr-2 rounded-2xl dark:bg-[hsl(180,3%,13%)] bg-white border dark:border-neutral-500 border-gray-300 p-2 pl-0'
        >
          {/* release notes */}
          <DropdownMenuItem asChild>
            <AskMarkList linkHref='/release-note' title='Release Notes' />
          </DropdownMenuItem>

          {/* research papers */}
          <DropdownMenuItem asChild>
            <AskMarkList
              linkHref='/pdf-viewer/research'
              title={t("footerList.research")}
            />
          </DropdownMenuItem>

          {/* feedback */}
          <DropdownMenuItem asChild>
            <AskMarkList
              linkHref='https://53mo9i5m79d.typeform.com/to/OaUES2Ul'
              title={t("footerList.feedback")}
            />
          </DropdownMenuItem>

          {/* faq */}
          <DropdownMenuItem asChild>
            <AskMarkList linkHref='/ask' title={t("footerList.faq")} />
          </DropdownMenuItem>

          {/* shortcuts */}
          <Shortcuts />

          {/* privacy */}
          <DropdownMenuItem asChild>
            <AskMarkList linkHref='/privacy' title={t("footerList.privacy")} />
          </DropdownMenuItem>

          {/* terms */}
          <DropdownMenuItem asChild>
            <AskMarkList linkHref='/terms' title={t("footerList.terms")} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </footer>
  );
}
