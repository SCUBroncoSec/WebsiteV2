import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles-broncoctf.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "BroncoCTF",
  description: "SCU's cybersecurity competition",
  openGraph: {
    title: "BroncoCTF",
    description: "Santa Clara University's annual cybersecurity competition",
    url: "https://broncosec.com/BroncoCTF", // replace with your production URL
    images: [
      {
        url: "icon.png",
        alt: "BroncoSec logo",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >{children}</body>
    </html>
  );
}
