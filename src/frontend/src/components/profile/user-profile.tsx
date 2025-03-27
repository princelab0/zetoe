"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

import { SettingsModal } from "../settings/setting";
import UserAvatar from "./user-avatar";
import Link from "next/link";
import { BadgeDollarSign } from "lucide-react";
import { useTranslations } from "next-intl";
import Signout from "./signout";
// interface UserProfileProps {
//   user: {
//     email?: string;
//     user_metadata?: {
//       full_name?: string;
//       avatar_url?: string;
//     };
//   };
// }
export function UserProfile({ user }: any) {
  const t = useTranslations("userProfile");
  const full_name = user.user_metadata?.full_name;
  const nameFirstLetter: string = full_name?.slice(0, 1) || "U";
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className='cursor-pointer translate-y-[1.5px]  focus-visible:outline-none  hover:opacity-80 transition-opacity'>
          <UserAvatar
            nameFirstLetter={nameFirstLetter}
            imgUrl={user.user_metadata?.avatar_url}
          />
        </DropdownMenuTrigger>

        {/* Dropdown content */}
        <DropdownMenuContent
          sideOffset={10}
          className='!w-[18rem] mr-4 p-3 shadow-lg rounded-xl'
        >
          <div className='flex px-2 py-3 hover:bg-transparent items-center gap-2 pb-4 rounded'>
            <div>
              <UserAvatar
                imgUrl={user.user_metadata?.avatar_url}
                nameFirstLetter={nameFirstLetter}
              />
            </div>
            <div className='flex flex-col text-sm pointer-events-none'>
              <p className='font-medium text-gray-800 dark:text-[hsl(60,4%,91%)]'>
                {user?.email}
              </p>
              <p className='text-gray-500 dark:text-[hsl(60,4%,71%)]'>
                {full_name}
              </p>
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* setting */}
          <DropdownMenuItem
            asChild
            className='flex items-center gap-2 rounded  px-2 py-3 hover:cursor-pointer transition-all hover:bg-neutral-100  dark:hover:bg-neutral-800'
          >
            <SettingsModal />
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <div className='flex items-center hover:!text-gray-600  text-gray-600 gap-2 rounded  px-2 py-3 hover:cursor-pointer  transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800'>
              <BadgeDollarSign className='!w-5 !h-5 text-gray-600 dark:text-[hsl(60,4%,91%)]' />
              <Link
                href='/subscriptions'
                className='text-base dark:text-[hsl(60,4%,91%)]'
              >
                {/* Upgrade Plan */}
                {t("upgradePlan")}
              </Link>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className=''>
            <Signout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserProfile;
