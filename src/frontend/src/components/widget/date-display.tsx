"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import NepaliDate from "nepali-date-converter";
import { useEffect, useState } from "react";
import { Toggle } from "@radix-ui/react-toggle";
// Mapping of Western digits to Nepali digits
import { date } from "./data";
export default function DateDisplay({ onRemove }: { onRemove: () => void }) {
  const [todayDate, setTodayDate] = useState<date>({
    year: "",
    month: "",
    day: "",
    week: "",
  });
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const todayDate = async () => {
      const today = new NepaliDate(new Date());

      const formatedYear = isEnglish
        ? today.format("YYYY")
        : today.format("YYYY", "np");
      const formatedMonth = isEnglish
        ? today.format("MMMM")
        : today.format("MMMM", "np");
      const formatedDay = isEnglish
        ? today.format("DD")
        : today.format("DD", "np");
      const formatedWeek = isEnglish
        ? today.format("ddd")
        : today.format("ddd", "np");
      setTodayDate({
        ...todayDate,
        year: formatedYear,
        month: formatedMonth,
        day: formatedDay,
        week: `${formatedWeek},`,
      });
    };
    todayDate();
  }, [isEnglish]);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <Card className='shadow-none relative h-full flex  dark:bg-[hsl(240,3%,27%)]   bg-[#eeeee4] border dark:border-neutral-400 dark:hover:border-neutral-100 border-neutral-400 hover:border-neutral-300 text-gray-800 overflow-hidden'>
      <CardContent className='flex flex-col items-start w-[95%] text-start h-full p-2 gap-2'>
        <div className='flex justify-start gap-2 items-center mt-2  text-[hsl(222,8%,48%)] dark:text-gray-400'>
          <span className='font-bold text-4xl'> {todayDate.day}</span>

          <div className='w-[60%] flex flex-wrap gap-[2px]'>
            <span className=' text-lg'> {todayDate.week}</span>
            <span className=' text-lg'>{todayDate.month} </span>
            <span className='text-lg '>{todayDate.year}</span>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 '>
          <Toggle
            pressed={isEnglish}
            onPressedChange={toggleLanguage}
            aria-label='Toggle temperature unit'
            className='text-gray-600 dark:text-gray-400  absolute bottom-1 right-1 flex !justify-center !bg-[#bfc1c738] !h-6 !items-center rounded-lg min-w-6  !p-1'
          >
            {isEnglish ? "np" : "en"}
          </Toggle>
          <div className='absolute right-0 top-0'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onRemove}
              className='text-gray-600 dark:text-gray-400 h-2 w-2 p-3 rounded-full hover:text-gray-800 hover:bg-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-400'
            >
              <X className='h-2 w-2' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
