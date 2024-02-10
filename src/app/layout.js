import "./globals.css";
import { Outfit } from "next/font/google";
import { Footer } from "@/components";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Ketsadaphone BOUTPANYDA",
  description: "Next.js + Tailwind CSS + Google Fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} text-secondary relative`}>
        {children}
        <Footer />
        <div className="absolute inset-0 background z-[-1]" />
      </body>
    </html>
  );
}
