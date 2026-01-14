import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles-broncoctf.css";

export const metadata: Metadata = {
  title: "BroncoCTF",
  description: "SCU's cybersecurity competition",
  openGraph: {
    title: "BroncoCTF",
    description: "Santa Clara University's annual cybersecurity competition",
    url: "https://broncosec.com/WebsiteV2/BroncoCTF", // replace with your production URL
    images: [
      {
        url: "../icon.png",
        alt: "BroncoSec logo",
      },
    ],
  },
  themeColor: "#B7010E",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
