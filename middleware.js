import createMiddleware from "next-intl/middleware";


const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "kr"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export default intlMiddleware;

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
