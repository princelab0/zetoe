"use client";
import { useTranslations } from "next-intl";
import intLangAction from "./int-lang-action";
import { getCookie } from "cookies-next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";

export default function Language() {
  const t = useTranslations("settingsModal");
  const [language, setLanguage] = useState("");

  // Fetch the language from cookies when the component mounts
  useEffect(() => {
    const fetchCookieLanguage = async () => {
      const cookieLanguage = await getCookie("language");
      if (cookieLanguage) {
        setLanguage(cookieLanguage as string);
      }
    };
    fetchCookieLanguage();
  }, []);

  const handleLanguageChange = async (value: string) => {
    setLanguage(value);
    await intLangAction(value); // Store new value in cookie
  };

  return (
    <div className='flex items-center justify-between flex-wrap'>
      <label className='text-base font-medium leading-none'>
        {t("general.language")}
      </label>
      <Select
        onValueChange={(value) => handleLanguageChange(value)}
        value={language}
      >
        <SelectTrigger className='w-[160px] h-10 '>
          <SelectValue placeholder={t("general.selectLanguage")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='en'>
            {t("general.selectOptions.english")}
          </SelectItem>
          <SelectItem value='np'>
            {t("general.selectOptions.nepali")}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
