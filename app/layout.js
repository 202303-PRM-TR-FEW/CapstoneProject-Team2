import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

export const metadata = {
  title: "Mudemy",
  description: "Best Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row bg-slate-100">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
