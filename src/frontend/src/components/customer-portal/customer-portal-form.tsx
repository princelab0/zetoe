"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { createStripePortal } from "@/utils/stripe/server";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tables } from "../../../types_db";
import { useTranslations } from "next-intl";
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

export default function CustomerPortalForm({
  subscription,
}: {
  subscription: SubscriptionWithPriceAndProduct | null;
}) {
  const t = useTranslations("customerPortal.card");
  const router = useRouter();
  const currentPath = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const description = subscription
    ? t("descriptionSubscribed", {
        planName: subscription.prices?.products?.name,
      })
    : t("descriptionNotSubscribed");

  const formatDate = (isoString: string) => {
    return format(new Date(isoString), "MMM dd, yyyy 'at' hh:mm:ss a");
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  const handleStripePortalRequest = async () => {
    setIsSubmitting(true);
    const redirectUrl = await createStripePortal(currentPath);
    setIsSubmitting(false);
    return router.push(redirectUrl);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className=''>
          {subscription ? (
            <div className=''>
              <div className='text-xl font-semibold'>
                {`${subscriptionPrice}/${subscription?.prices?.interval}`}
              </div>
              <CardDescription className='text-sm mt-1'>
                <span className='font-semibold text-neutral-600 dark:text-neutral-400'>
                  Expire on:
                </span>
                {formatDate(subscription.current_period_end)}
              </CardDescription>
            </div>
          ) : (
            <Button
              variant='outline'
              onClick={() => {
                window.location.href = "/subscriptions";
                // location.reload();
              }}
            >
              {t("choosePlan")}
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
          {subscription && (
            <Button
              variant='default'
              disabled={isSubmitting}
              onClick={handleStripePortalRequest}
            >
              {t("manageSubscription")}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

// comment
// comment
// comment