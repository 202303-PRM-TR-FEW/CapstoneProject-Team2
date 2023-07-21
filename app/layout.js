<<<<<<< HEAD
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }) {
  return children;
=======
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import ReduxProvider from "../redux/provider";

export const metadata = {
  title: "Mudemy",
  description: "Best Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row bg-slate-100 dark:bg-slate-700">
        <ReduxProvider>
          <NavigationBar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
>>>>>>> main
}
