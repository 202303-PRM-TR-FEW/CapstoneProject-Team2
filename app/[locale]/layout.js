import "../globals.css";
import NavigationBar from "@/components/NavigationBar";
import ReduxProvider from "@/redux/provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Mudemy",
  description: "Best Learning Platform",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="flex flex-col-reverse md:flex-row bg-slate-100 dark:bg-slate-700">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <NavigationBar />
            {children}
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
