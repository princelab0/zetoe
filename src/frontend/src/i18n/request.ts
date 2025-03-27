import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const locale = (await cookies()).get("language")?.value
    ? (await cookies()).get("language")?.value
    : "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
// hello
