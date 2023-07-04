import "./globals.css";
import NavigationBar from "@/components/NavigationBar";


export const metadata = {
  title: "Mudemy",
  description: "best learning app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavigationBar />
      <body className="">
        {children}
      </body>
    </html>
  );
}
