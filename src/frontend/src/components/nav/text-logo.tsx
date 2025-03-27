"use client";
import Logo from "@/public/home-logo.svg";

import darkLogo from "@/public/dark-logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const TextLogo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className='text-2xl font-medium !h-[2rem] !w-[2rem]'>
      {resolvedTheme === "light" && (
        <Image src={Logo} alt='light-mode-logo' height={40} width={40} />
      )}

      {resolvedTheme === "dark" && (
        <Image src={darkLogo} alt='dark-mode-logo' height={40} width={40} />
      )}
    </div>
  );
};

export default TextLogo;
