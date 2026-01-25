import HeroSection from "@/components/page/hero-section"
import Content from "@/components/BroncoCTF/content";
import Footer from "@/components/page/footer";

import Link from "next/link";
import Header from "@/components/page/header";


export default function Subpage() {
  return (
        <>
    <Header headerImagePath="original-art/Horse_Knight_final.webp" />
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-16">
      <div className="max-w-7xl w-full">
        <HeroSection title="BroncoCTF" subtext="Santa Clara University's international cybersecurity competition" subtext2="February 28 - March 1" imagePath="original-art/Horse_Knight_final.webp"> 
        
          <button className="registration_Button" style={{zIndex: 1, cursor:"not-allowed"}}>Registration Coming Soon</button>
        
        </HeroSection>
        <Content />
        <Footer />
      </div>
    </main>

    </>
  );
}
