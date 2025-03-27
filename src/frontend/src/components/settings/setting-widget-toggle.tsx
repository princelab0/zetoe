"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useWidgetStore } from "@/stores/index";
import { useTranslations } from "next-intl";

export default function SettingWidgetToggle() {
  const t = useTranslations("settingsModal");
  const { isWidgetVisible, toggleWidgetVisibility } = useWidgetStore();

  return (
    <div className='flex items-center  justify-between'>
      <Label
        htmlFor='widget-toggle'
        className='text-base font-medium leading-none'
      >
        {t("general.widgets")}
      </Label>
      <div className='w-[10rem] px-2 py-3'>
        <Switch
          id='widget-toggle'
          checked={isWidgetVisible}
          onCheckedChange={toggleWidgetVisibility}
        />
      </div>
    </div>
  );
}
