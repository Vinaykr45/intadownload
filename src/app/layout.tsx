import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram Downloader - Download Instagram Video, Photos, IGTV & Reels",
  description: "FastDl is an tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
