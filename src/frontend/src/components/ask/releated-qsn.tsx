"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqTable from "@/components/ask/releated-qsn-table";
import { useTranslations } from "next-intl";

export default function ReleatedQsn() {
  const t = useTranslations("faq");
  return (
    <div className='mx-auto space-y-6 max-w-2xl px-4 py-16 !pt-[72px] sm:py-24 lg:px-0'>
      <div className='text-center'>
        <h2 className='text-3xl font-semibold tracking-tight'>{t("header")}</h2>
        <p className='mt-2 text-muted-foreground'>{t("subheader")}</p>
      </div>
      <Accordion type='single' collapsible className='w-full space-y-6 '>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg font-semibold dark:text-neutral-50  hover:no-underline text-neutral-900'>
            {t("accordion.item1.question")}
          </AccordionTrigger>
          <AccordionContent className='text-base font-medium text-gray-500 dark:text-neutral-200'>
            {t("accordion.item1.question")}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-lg font-semibold dark:text-neutral-50 text-neutral-900 hover:no-underline'>
            {t("accordion.item2.question")}
          </AccordionTrigger>
          <AccordionContent>
            <FaqTable></FaqTable>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-lg font-semibold dark:text-neutral-50 text-neutral-900 hover:no-underline'>
            {t("accordion.item3.question")}
          </AccordionTrigger>
          <AccordionContent className='text-base dark:text-neutral-200 font-medium text-gray-500'>
            {t("accordion.item3.answer")}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-4'>
          <AccordionTrigger className='text-lg font-semibold dark:text-neutral-50 text-neutral-900 hover:no-underline'>
            {t("accordion.item4.question")}
          </AccordionTrigger>
          <AccordionContent className='text-base dark:text-neutral-200 font-medium text-gray-500'>
            {t("accordion.item4.answer")}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-5'>
          <AccordionTrigger className='text-lg dark:text-neutral-50 font-semibold text-neutral-900 hover:no-underline'>
            {t("accordion.item5.question")}
          </AccordionTrigger>
          <AccordionContent className='text-base font-medium dark:text-neutral-200 text-gray-500'>
            {t("accordion.item5.answer")}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-6'>
          <AccordionTrigger className='text-lg dark:text-neutral-50 font-semibold text-neutral-900 hover:no-underline'>
            {t("accordion.item6.question")}
          </AccordionTrigger>
          <AccordionContent className='text-base dark:text-neutral-200 font-medium text-gray-500'>
            {t("accordion.item6.answer")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
