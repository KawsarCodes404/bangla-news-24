import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Marquee from "@/component/Marquee";
import { Toaster } from "react-hot-toast";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", 'bengali'],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "বাংলাদেশ ও বিশ্বের সর্বশেষ খবর",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme='light'
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Header />
        <Marquee />

        <main className="max-w-7xl mx-auto">
          {children}
        </main>

        <div></div>

        <Toaster />

      </body>

    </html>
  );
}
