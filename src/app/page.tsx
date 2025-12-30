import Image from "next/image";
import HeroSection from "@/components/hero-section"
import Content from "@/components/content";
import Footer from "@/components/footer";

import Link from "next/link";
import Header from "@/components/header";


export default function Home() {
  return (<>
    <Header />
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-16">
      <div className="max-w-7xl w-full">
        <HeroSection />
        <Content />
        <Footer />
      </div>
    </main>
    </>
  );
}
