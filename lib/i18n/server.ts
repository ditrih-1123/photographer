import { getRequestConfig } from "next-intl/server";
import { i18nConfig } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !i18nConfig.locales.includes(locale as any)) {
    locale = i18nConfig.defaultLocale;
  }

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch {
    // Fallback to default messages
    return {
      locale: i18nConfig.defaultLocale,
      messages: (await import(`./messages/${i18nConfig.defaultLocale}.json`)).default,
    };
  }
});

