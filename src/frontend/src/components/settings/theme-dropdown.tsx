"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Laptop, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeDropdown() {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<string>(
    theme || "system"
  );

  React.useEffect(() => {
    setCurrentTheme(theme || "system");
  }, [theme]);

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };
  const t = useTranslations("settingsModal");
  return (
    <div className='flex items-center justify-between flex-wrap'>
      <label className='text-base font-medium leading-none'>
        {t("general.theme")}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='w-[160px]'>
          <Button
            variant='outline'
            size='lg'
            className='flex  justify-between items-center px-3 py-2 gap-2 text-gray-800 dark:text-[hsl(60,4%,91%)]'
          >
            <div className='flex items-center gap-1'>
              {currentTheme === "light" && (
                <Sun strokeWidth={2} className='h-5 w-5' />
              )}
              {currentTheme === "dark" && (
                <Moon strokeWidth={2} className='h-5 w-5' />
              )}
              {currentTheme === "system" && (
                <Laptop strokeWidth={2} className='h-5 w-5' />
              )}
              <span className='capitalize'>{currentTheme}</span>
            </div>
            <ChevronDown strokeWidth={2} className='h-5 w-5 ml-2' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {["light", "dark", "system"].map((themeOption) => (
            <DropdownMenuItem
              key={themeOption}
              onClick={() => handleSetTheme(themeOption)}
              className='flex gap-3 items-center'
            >
              {themeOption === "light" && <Sun strokeWidth={2} size={16} />}
              {themeOption === "dark" && <Moon strokeWidth={2} size={16} />}
              {themeOption === "system" && <Laptop strokeWidth={2} size={16} />}
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
