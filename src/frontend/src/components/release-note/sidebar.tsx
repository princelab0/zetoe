"use client";

import Link from "next/link";
import { memo } from "react";
import { DrawerClose } from "@/components/ui/drawer";

interface SidebarProps {
  dates: string[];
  activeDate: string;
  onDateClick: (date: string) => void;
  isInDrawer?: boolean; // New prop to indicate if Sidebar is inside a Drawer
}

function Sidebar({
  dates,
  activeDate,
  onDateClick,
  isInDrawer = false,
}: SidebarProps) {
  if (!dates || dates.length === 0) {
    return <div>No release dates available.</div>;
  }

  if (!activeDate) {
    return <div>No active date selected.</div>;
  }

  return (
    <aside className='w-full md:w-64 shrink-0 mb-8 md:mb-0'>
      <nav className='sticky top-8' aria-label='Changelog navigation'>
        <h2 className='font-medium text-lg mb-4'>Table of Contents</h2>
        <ul className='space-y-2 mt-4'>
          {dates.map((date) => {
            const href = `#${date.replace(/,?\s+/g, "-").toLowerCase()}`;
            const linkContent = (
              <Link
                href={href}
                className={`block py-1 px-2 rounded transition-colors ${
                  activeDate === date
                    ? "bg-blue-100 dark:bg-[#101111] text-blue-800"
                    : "text-gray-600 dark:text-gray-400  hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onDateClick(date);
                }}
                aria-current={activeDate === date ? "page" : undefined}
              >
                {date}
              </Link>
            );

            return (
              <li key={date}>
                {isInDrawer ? (
                  <DrawerClose asChild>{linkContent}</DrawerClose>
                ) : (
                  linkContent
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default memo(Sidebar);
