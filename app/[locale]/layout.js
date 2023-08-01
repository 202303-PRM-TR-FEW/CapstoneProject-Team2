"use client"

import "../globals.css";
import NavigationBar from "@/components/NavigationBar";
import { AuthContextProvider } from "../context/AuthContext";
import { NextIntlClientProvider } from "next-intl";




export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "ar" }, { locale: "tr" }, { locale: "kr" }];
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
          <AuthContextProvider>
            <NavigationBar />
            {children}
          </AuthContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
