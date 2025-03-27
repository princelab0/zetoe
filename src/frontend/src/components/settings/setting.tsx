"use client";
import { forwardRef, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ProfilePage from "../profile/profile";
import { ThemeDropdown } from "./theme-dropdown";
import { Settings } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import CustomerPortalForm from "../customer-portal/customer-portal-form";
import { Tables } from "../../../types_db";
import { createClient } from "@/utils/supabase/client";
import { getSubscription } from "@/utils/supabase/queries";
import { useTranslations } from "next-intl";
import Language from "./language";
import SettingWidgetToggle from "./setting-widget-toggle";
import SettingNavbar from "./setting-navbar";

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

export const SettingsModal = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(function SettingsModal(props, ref) {
  const t = useTranslations("settingsModal");
  const [currentView, setCurrentView] = useState("general");
  const [open, setOpen] = useState(false);
  const [subscription, setSubscription] =
    useState<SubscriptionWithPriceAndProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const [subscription] = await Promise.all([getSubscription(supabase)]);
      setSubscription(subscription);
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (open) {
      window.history.pushState(null, "", "#settings");
    } else {
      window.history.pushState(null, "", "/"); // Reset URL to base path when modal closes
    }

    // Cleanup listener when component unmounts
    return () => {
      if (window.location.hash === "#settings") {
        window.history.pushState(null, "", "/");
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Link
          href='#settings'
          className='w-full flex justify-start px-2 py-3  items-center gap-2  relative text-gray-600 dark:text-[hsl(60,4%,91%)]  hover:cursor-pointer transition-all hover:bg-neutral-100  dark:hover:bg-neutral-800'
        >
          <Settings className='w-5 h-5 text-inherit dark:text-[hsl(60,4%,91%)]' />
          <span>{t("link")}</span>
        </Link>
      </DialogTrigger>

      <DialogContent className='lg:max-w-[75%]  max-w-[90%] h-[90vh] flex flex-col rounded-2xl'>
        <DialogHeader className='flex flex-row justify-between items-center'>
          <DialogTitle>{t("dialogTitle")}</DialogTitle>
          <DialogDescription> </DialogDescription>
        </DialogHeader>

        <Separator orientation='horizontal' className='' />
        <div className='flex flex-col md:flex-row flex-1 gap-4 overflow-hidden'>
          {/* navbar */}
          <SettingNavbar
            currentView={currentView}
            setCurrentView={setCurrentView}
          />

          <Separator orientation='vertical' className='hidden md:block' />

          <ScrollArea className='flex-1'>
            <div className='space-y-6'>
              {/* general */}
              {currentView === "general" && (
                <div className=' p-2 space-y-6 w-[90%]'>
                  <ThemeDropdown />
                  <Language />
                  <SettingWidgetToggle />
                </div>
              )}

              {/* profile */}
              {currentView === "profile" && <ProfilePage />}
              {/* subscription */}
              {currentView === "subscriptions" && (
                <CustomerPortalForm subscription={subscription} />
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
});
