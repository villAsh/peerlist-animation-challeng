import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Heart } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peerlist Animation Challenge",
  description: "5-day Animation Challenge by Peerlist and Acernity UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001] bg-gradient-to-br p-8 h-screen w-screen relative`}
      >
        {children}
        <footer className="bottom-10 absolute inset-x-0 flex justify-center items-center gap-x-2 font-semibold text-white max-lg:text-xl text-3xl text-center">
          Made with <Heart className="fill-red-500 text-red-500" size={28} /> by{" "}
          <Link href={"https://www.linkedin.com/in/vilas-chauvhan-4609391aa"}>
            Vilas
          </Link>
        </footer>
      </body>
    </html>
  );
}
