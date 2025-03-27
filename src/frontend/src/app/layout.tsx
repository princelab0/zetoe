import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono as Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/nav/nav";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { getLocale, getMessages } from "next-intl/server";
import AskMark from "@/components/ask/ask-mark";

const mono = Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const title = "";
const description = "Open-source AI powered answer engine.";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@rashadphz",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <body
          className={cn(
            "antialiased",
            GeistSans.className,
            // mono.className,
            "w-full"
          )}
        >
          <Providers>
            <ThemeProvider
              defaultTheme='system'
              attribute='class'
              enableSystem
              disableTransitionOnChange
            >
              <NextIntlClientProvider messages={messages}>
                <Navbar />
                {children}
                <Toaster />
                <AskMark />
              </NextIntlClientProvider>
              <Analytics />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}
