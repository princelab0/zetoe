"use client";
import getSearch, { cn } from "@/lib/utils";
import { useChatStore, useConfigStore } from "@/stores";
import { useEffect, useState } from "react";
import { Tables } from "../../../types_db";
import { createClient } from "@/utils/supabase/client";
import { getSubscription } from "@/utils/supabase/queries";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PromptMode } from "../../../generated";
import { promptModeMap } from "./proptmode-map";
import _ from "lodash";
import { ModelItem } from "./model-item";

type Subscription = Tables<"subscriptions">;
type Price = Tables<"prices">;
type Product = Tables<"products">;
type SubscriptionWithPriceAndProduct = Subscription & {
  prices:
    | (Price & {
        products: Product | null;
      })
    | null;
};
export default function PromptModeSelection({
  user,
  id,
}: {
  user: any;
  id: string;
}) {
  const [subscription, setSubscription] =
    useState<SubscriptionWithPriceAndProduct | null>(null);
  const { proSearchCount, fetchProSearchCount } = useChatStore();
  const t = useTranslations("proToggle");
  const { promptMode, setPromptMode } = useConfigStore(); //localMode ,toggleLocalMode
  const selectedModel =
    promptModeMap[promptMode] ?? promptModeMap[PromptMode.Web];

  let selectedModelContentClassName;

  if (selectedModel.name === "Web")
    selectedModelContentClassName =
      "text-green-600 hover:text-green-400 bg-green-100 hover:border-green-400 dark:hover:border-green-300 dark:bg-neutral-600 dark:hover:text-green-400 ";
  if (selectedModel.name === "Grammar")
    selectedModelContentClassName =
      "text-yellow-600 hover:text-yellow-400 bg-yellow-100 hover:border-yellow-400 dark:hover:border-yellow-300 dark:bg-neutral-600 dark:hover:text-yellow-400";

  if (selectedModel.name === "Research")
    selectedModelContentClassName =
      "text-blue-600 hover:text-blue-400 bg-blue-100 hover:border-blue-400 dark:hover:border-blue-300 dark:bg-neutral-600 dark:hover:text-blue-400";
  if (selectedModel.name === "Writing")
    selectedModelContentClassName =
      "text-purple-600 hover:text-purple-400 bg-purple-100 hover:border-purple-400 dark:hover:border-purple-300 dark:bg-neutral-600 dark:hover:text-purple-400";
  if (selectedModel.name === "Translation")
    selectedModelContentClassName =
      "text-pink-600 hover:text-pink-400 bg-pink-100 hover:border-pink-400 dark:hover:border-pink-300 dark:bg-neutral-600 dark:hover:text-pink-400";

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const [subscription] = await Promise.all([getSubscription(supabase)]);
      setSubscription(subscription);
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetchProSearchCount(user?.id);
  }, [fetchProSearchCount, user?.id]);

  // const { proMode, toggleProMode, checkAuthStatus } = useConfigStore();
  // const { searchesLeft, localizedSearchesLeft, progressPercentage } = getSearch(
  //   subscription,
  //   proSearchCount
  // );
  // useEffect(() => {
  //   if (searchesLeft <= 0 && proMode) {
  //     (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleProMode(e); // Turn off proMode if it's enabled
  //   }
  // }, [searchesLeft, proMode, toggleProMode]);
  // useEffect(() => {
  //   checkAuthStatus();
  // }, [checkAuthStatus]);

  return (
    <Select
      defaultValue={promptMode}
      value={promptMode}
      onValueChange={(value) => {
        if (value) {
          setPromptMode(value as PromptMode);
        }
      }}
    >
      <SelectTrigger
        className={cn(
          selectedModelContentClassName,
          "w-fit  space-x-2     border-gray-300  dark:border-gray-400    select-none rounded-full  focus:!ring-0 focus:!ring-offset-transparent focus:!outline-0 shadow-none transition-all duration-500 ease-in-out  text-[14px]"
        )}
      >
        <SelectValue>
          <div className='flex items-center  space-x-1  '>
            <div>{selectedModel.smallIcon}</div>
            <span className='medium'>{selectedModel.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        align='start'
        side='bottom'
        className='w-[225px] border border-transparent  rounded-xl shadow-2xl '
      >
        <SelectGroup className='w-full border border-transparent rounded-lg px-1'>
          {Object.values(promptModeMap)

            .map((model, index) => (
              <ModelItem
                key={index}
                model={model}
                disabled={!user && index !== 0}
              />
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// {
/* <HoverCard openDelay={0} closeDelay={0}>
<HoverCardTrigger
  asChild
  className={cn(
    "hover:cursor-pointer",
    !env.NEXT_PUBLIC_PRO_MODE_ENABLED && "hover:cursor-not-allowed "
  )}
>
  <div className='group flex space-x-2 items-center justify-end'>
    <Button
      variant='outline'
      disabled={
        !env.NEXT_PUBLIC_PRO_MODE_ENABLED || !user || searchesLeft <= 0
      }
      onClick={(e) => {
        if (searchesLeft > 0) {
          toggleProMode(e);
        }
      }}
      className={cn(
        "rounded-full transition-all text-[12px] ease-in-out duration-0 px-3 py-0 gap-1 disabled:pointer-events-auto disabled:cursor-not-allowed",
        proMode
          ? "bg-blue-100  hover:bg-blue-100 dark:bg-transparent dark:hover:!bg-transparent border-gray-300 hover:border-gray-200 dark:border-gray-400 dark:hover:border-gray-300   hover:text-blue-400  text-blue-400  "
          : "bg-transparent dark:hover:bg-[#5858586b] hover:bg-gray-100 border-gray-300 hover:border-gray-200  dark:border-gray-500 dark:hover:border-gray-300   text-gray-700 dark:text-neutral-200 ",
        id === "follow_up_input" ? "!h-8 w-8" : "h-8 w-24"
      )}
    >
      {/* <Lightbulb className='w-18 h-18' /> */
// }
//       <Telescope className='w-4 h-4' />
//       {id === "follow_up_input" ? null : t("label")}
//     </Button>
//   </div>
// </HoverCardTrigger>

// {!proMode && (
//   <HoverCardContent className='w-80 h-[100%] p-3' sideOffset={10}>
//     <div className='flex flex-col gap-3 items-start rounded-md '>
//       <div className='flex gap-1 items-center'>
//         <span>
//           <LuBrainCircuit className='w-6 h-6 text-blue-950 dark:text-blue-400' />
//         </span>
//         <h3 className='font-semibold text-base text-blue-950 dark:text-white'>
//           {t("title")}
//         </h3>
//       </div>

//       <p
//         style={{ width: "100%" }}
//         className='text-sm text-gray-500 dark:text-gray-400 pb-[4px]'
//       >
//         {t("description")}
//       </p>

//       {user && (
//         <div className='bg-gray-200 w-full rounded-full h-1.5 dark:bg-gray-700'>
//           <div
//             className='bg-blue-500 h-1.5 rounded-3xl transition-all duration-300 ease-in-out'
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//       )}

//       {user && (
//         <p className='text-sm text-gray-500 p-1 pt-2 dark:text-gray-400'>
//           {t("progressSearchesLeft", {
//             searchesLeft: localizedSearchesLeft,
//           })}
//         </p>
//       )}

//       {!user && (
//         <Link
//           href='/signin'
//           role='button'
//           className='cursor-pointer px-1 py-2 rounded-lg w-full text-center text-sm font-medium bg-blue-400 text-black dark:text-white dark:hover:bg-blue-500 transition-colors'
//         >
//           {t("login")}
//         </Link>
//       )}

//       {user && (
//         <Link
//           href='/subscriptions'
//           role='button'
//           className='cursor-pointer px-1 py-2 rounded-lg w-full text-center text-sm font-medium bg-blue-400 text-black dark:text-white dark:hover:bg-blue-500 transition-colors'
//         >
//           {t("getMore")}
//         </Link>
//       )}
//     </div>
//   </HoverCardContent>
// )}

// {proMode && user && (
//   <HoverCardContent className='text-cyan-50 bg-neutral-800 text-[0.8rem] font-thin rounded-md px-[6px] text-nowrap w-auto py-[4px] dark:text-white'>
//     {t("proModeTooltip", { searchesLeft: localizedSearchesLeft })}
//   </HoverCardContent>
// )}
// </HoverCard> */}
