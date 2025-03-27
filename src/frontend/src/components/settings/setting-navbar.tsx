import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function SettingNavbar({ currentView, setCurrentView }: any) {
  const t = useTranslations("settingsModal");
  const handleNavigation = (e: any, hash: string) => {
    e.preventDefault();
    window.location.hash = hash; // Update the hash in the URL
    setCurrentView(
      hash === "#setting/profile"
        ? "profile"
        : hash === "#setting/general"
          ? "general"
          : "subscriptions"
    );
  };

  return (
    <div className='md:w-[200px] flex-shrink-0 overflow-x-hidden'>
      <div className='flex md:flex-col space-x-2 md:space-x-0 md:space-y-1 p-2 md:p-0'>
        <Button
          variant={`${currentView === "general" ? "secondary" : "ghost"}`}
          className='justify-start px-2'
          size='lg'
          onClick={(e) => handleNavigation(e, "#setting/general")}
        >
          {t("tabs.general")}
        </Button>
        <Button
          variant={`${currentView === "profile" ? "secondary" : "ghost"}`}
          className='justify-start px-2'
          size='lg'
          onClick={(e) => handleNavigation(e, "#setting/profile")}
        >
          {t("tabs.profile")}
        </Button>
        <Button
          variant={`${currentView === "subscriptions" ? "secondary" : "ghost"}`}
          className='justify-start px-2'
          size='lg'
          onClick={(e) => handleNavigation(e, "#setting/subscriptions")}
        >
          {t("tabs.subscriptions")}
        </Button>
      </div>
    </div>
  );
}
