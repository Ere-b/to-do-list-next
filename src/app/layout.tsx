import "./globals.css";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My First Next.js App",
  description: "Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
