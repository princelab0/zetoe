import Price from "@/components/pricing/price";
import {
  getProducts,
  getSubscription,
  getUser,
} from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";

export default async function PricingPage() {
  const supabase = await createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase),
  ]);

  return (
    <Price user={user} products={products ?? []} subscription={subscription} />
  );
}
