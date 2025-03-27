"use client";

import type { Tables } from "../../../types_db";
import { getStripe } from "@/utils/stripe/client";
import { checkoutWithStripe } from "@/utils/stripe/server";
import { getErrorRedirect } from "@/utils/helpers";
import { User } from "@supabase/supabase-js";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

type Subscription = Tables<"subscriptions">;
type Product = Tables<"products">;
type Price = Tables<"prices">;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = "lifetime" | "year" | "month";

export default function Pricing({ user, products, subscription }: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const currentPath = usePathname();

  const t = useTranslations("pricing"); // Use the translations

  const benefitFreeList: string[] = t.raw("freePlan.benefits"); // Fetch localized benefits
  const benefitProList: string[] = t.raw("proPlan.benefits"); // Fetch localized benefits

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push("/signin/signup");
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          "An unknown error occurred.",
          "Please try again later or contact a system administrator."
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  if (products.length) {
    return (
      <section
        id='plans'
        className='bg-transparent w-full h-full   pt-[72px] overflow-hidden px-4'
      >
        <div className='flex flex-col items-center justify-start mb-10 gap-2 '>
          <h1 className='text-3xl font-medium text-center text-gray-800 dark:text-gray-100 w-full'>
            {t("title")} {/* Localized title */}
          </h1>
          <div className='p-[4px] flex gap-2 rounded-3xl border border-slate-300 bg-slate-200 '>
            {intervals.includes("month") && (
              <button
                onClick={() => setBillingInterval("month")}
                type='button'
                className={`${
                  billingInterval === "month" ? "bg-white" : "bg-transparent"
                } font-medium text-sm dark:text-neutral-950 rounded-full px-3 py-[6px] transition-all ease-linear duration-500`}
              >
                {t("monthly")}
              </button>
            )}
            {intervals.includes("year") && (
              <button
                onClick={() => setBillingInterval("year")}
                type='button'
                className={`${
                  billingInterval === "year" ? "bg-white" : "bg-transparent"
                } font-medium text-sm dark:text-neutral-950 rounded-full px-3 py-[6px] transition ease-linear duration-500`}
                // Set to Yearly
              >
                {t("yearly")}
              </button>
            )}
          </div>
        </div>

        <div className='flex mx-4 mb-4 flex-col md:flex-row justify-center gap-8 md:gap-10 px-4 md:mb-8 md:px-0'>
          {/* Free Plan */}
          {products.map((product) => {
            const price =
              product.name === "Free"
                ? product.prices[0] // Select any available price for Free
                : product?.prices?.find(
                    (price) => price.interval === billingInterval
                  );

            if (!price) return null;
            const priceString = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: price.currency!,
              minimumFractionDigits: 0,
            })
              .format((price?.unit_amount || 0) / 100)
              .replace("$", "");
            return (
              <article
                key={product.name}
                className={`md:min-w-[12.75rem] md:max-w-[22rem] md:h-[25rem] md:w-1/2  w-full flex flex-col  dark:bg-[hsl(180,3%,13%)] justify-center items-center md:justify-start md:items-start md:text-center text-center gap-4 p-4 bg-transparent rounded-2xl shadow-3xl ${
                  product.name === "Free"
                    ? "ring-1 ring-gray-950 "
                    : "md:scale-105  ring-1 ring-blue-400  "
                } transition  dark:bg-[hsl(0,0%,5%)]`}
              >
                <div className='flex gap-2 justify-start items-center'>
                  <h1 className='text-2xl font-bold text-black dark:text-green-300'>
                    {product.name}
                  </h1>
                  {product.name === "Pro" ? (
                    <span className='ring-1 text-[12px] ring-blue-400 px-2 py-[2px]  text-blue-400 rounded-lg font-medium'>
                      {t("popularBadge")}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <h2 className='text-xl font-semibold flex justify-start text-start'>
                  <pre className='text-[hsl(0,0%,36%)] dark:text-gray-300 text-lg'>
                    $
                  </pre>
                  <span className='text-black dark:text-white text-5xl font-medium items-start'>
                    {priceString}
                  </span>
                  <span className='text-[hsl(0,0%,80%)] font-[400] dark:text-gray-140 text-sm relative'>
                    <span className='absolute top-2 left-1'> USD/</span>
                    <span className='absolute top-6 left-1'>
                      {billingInterval === "year" ? t("yearly") : t("monthly")}
                    </span>
                  </span>
                </h2>
                <h3 className='text-black dark:text-white text-start text-wrap w-3/4 md:w-full'>
                  {product.name === "Free"
                    ? t("freePlan.description") // Localized Free plan description
                    : t("proPlan.description")}
                </h3>
                <Button
                  disabled={product.name === "Free" || subscription !== null}
                  onClick={() => handleStripeCheckout(price)}
                  className={`${
                    product.name === "Free"
                      ? " bg-neutral-200 hover:bg-neutral-200/80 dark:text-neutral-950 text-neutral-950 cursor-not-allowed disabled:bg-neutral-200"
                      : "hover:bg-neutral-950/80 bg-neutral-950 text-neutral-50 dark:text-neutral-50"
                  } px-4 w-3/4 md:w-full disabled:pointer-events-auto text-sm disabled:cursor-not-allowed font-bold py-3 rounded-3xl transition`}
                >
                  {priceIdLoading === price.id
                    ? t("processing") // Localized processing text
                    : product.name === "Free"
                      ? t("getStarted") // Localized get started text
                      : subscription
                        ? t("subscribed") // Localized subscribed text
                        : t("subscribe")}
                  {/* {subscription ? "Manage" : "Subscribe"} */}
                </Button>

                <ul className='flex flex-col text-sm gap-2 md:justify-start md:items-start w-3/4 md:w-[100%] text-black dark:text-white'>
                  {product.name === "Free"
                    ? benefitFreeList.map((benefit: string, index) => (
                        <li
                          key={index}
                          className='flex gap-1 justify-start items-center'
                        >
                          <span className='w-4 h-4'>
                            <Check size={14} />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))
                    : benefitProList.map((benefit: string, index) => (
                        <li
                          key={index}
                          className='flex gap-1 justify-start items-center'
                        >
                          <span className='w-4 h-4'>
                            <Check size={14} />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className='bg-transparent'>
        <div className='max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:flex-col sm:align-center'></div>
          <p className='text-2xl font-extrabold text-gray-600 dark:text-gray-400 sm:text-center sm:text-xl'>
            {t("featureUnavailable")}{" "}
            {/* Localized feature unavailable message */}
          </p>
        </div>
      </section>
    );
  }
}
