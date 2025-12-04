import Image from "next/image";
import HeroSection from "@/components/hero-section"
import Content from "@/components/content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroSection/>
        <Content/>
        <Footer/>
      </div>
    </main>
  );
}
