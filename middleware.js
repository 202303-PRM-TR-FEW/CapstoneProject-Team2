import createMiddleware from "next-intl/middleware";
import { auth } from "./app/lib/firebase";

const isAuthenticated = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const authMiddleware = async (req, res, next) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    res.writeHead(302, { Location: "/profile" }); // Redirect to login page
    res.end();
    return;
  }

  next(); // Proceed to the next middleware/route handler
};

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
