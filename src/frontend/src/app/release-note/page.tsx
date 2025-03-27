"use client";

import { useState, useMemo } from "react";
import { changelogData } from "@/lib/changelog-data";
import Sidebar from "@/components/release-note/sidebar";
import { ErrorBoundary } from "@/components/release-note/error-boundary";
import Link from "next/link";
import ChangelogContent from "@/components/release-note/changelog-content";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export default function ChangelogPage() {
  const dates = useMemo(() => changelogData.map((entry) => entry.date), []);
  const [activeDate, setActiveDate] = useState(dates[0]);
  const [isLoading, setIsLoading] = useState(false);

  const activeEntry = useMemo(
    () =>
      changelogData.find((entry) => entry.date === activeDate) ||
      changelogData[0],
    [activeDate]
  );

  const handleDateClick = (date: string) => {
    setIsLoading(true);
    setActiveDate(date);
    setIsLoading(false);
  };

  return (
    <div className='max-w-6xl mx-auto px-4 pt-[72px]'>
      <header className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl md:text-4xl font-bold text-[hsl(0,0%,18%)] dark:text-slate-50'>
          Release Notes
        </h1>
        {/* Drawer Trigger for Mobile */}
        <Drawer>
          <DrawerTrigger asChild className='md:hidden'>
            <Button variant='outline' size='icon'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Open sidebar</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent
            aria-describedby={undefined}
            className='h-[80vh] w-full rounded-t-lg'
          >
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <div className='p-4'>
              <Sidebar
                dates={dates}
                activeDate={activeDate}
                onDateClick={(date) => {
                  handleDateClick(date);
                }}
                isInDrawer={true} // Set to true inside Drawer
              />
            </div>
          </DrawerContent>
        </Drawer>
      </header>

      <hr className='border-t border-gray-200 mb-8 dark:border-gray-800' />

      <ErrorBoundary
        fallback={
          <div className='p-4 text-red-600'>
            Something went wrong.{" "}
            <button
              className='text-blue-600 hover:underline'
              onClick={() => window.location.reload()}
            >
              Refresh the page
            </button>
            .
          </div>
        }
      >
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Sidebar for Desktop */}
          <div className='hidden md:block'>
            <Sidebar
              dates={dates}
              activeDate={activeDate}
              onDateClick={handleDateClick}
              isInDrawer={false} // Set to false outside Drawer
            />
          </div>

          <main className='flex-1'>
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <ChangelogContent activeEntry={activeEntry} />
            )}
          </main>
        </div>
      </ErrorBoundary>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className='space-y-8 animate-pulse'>
      <div className='h-8 w-1/2 bg-gray-200 rounded' />
      <div className='space-y-4'>
        {[...Array(3)].map((_, i) => (
          <div key={i} className='space-y-2'>
            <div className='h-6 w-1/3 bg-gray-200 rounded' />
            <div className='h-64 w-full bg-gray-200 rounded' />
          </div>
        ))}
      </div>
    </div>
  );
}
