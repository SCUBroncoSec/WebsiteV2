import Image from "next/image";
import HeroSection from "@/components/page/hero-section"
import Content from "@/components/Home/content";
import Footer from "@/components/page/footer";

import Link from "next/link";
import Header from "@/components/page/header";


export default function Home() {
  return (
    <>
    <Header />
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-16">
      <div className="max-w-7xl w-full">
        <HeroSection title="BroncoSec" subtext="Santa Clara University's premier cybersecurity club" imagePath="/original-art/Shield_final.webp" />
        <Content />
        <Footer />
      </div>
    </main>
    </>
  );
}
