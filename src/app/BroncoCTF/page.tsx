import ImageWithTextComponent from "@/components/BroncoCTF/imgandtxt";
import FooterForBroncoCTF from "@/components/BroncoCTF/footerforbroncoctf";
import HeaderBroncoCTF from "@/components/BroncoCTF/headerforBroncoCTF";
import AboutUs from "@/components/BroncoCTF/CoolStats";
import SponsorBroncoCTF from "@/components/BroncoCTF/Sponnsors";
import AboutTheComp from "@/components/BroncoCTF/AbouttheComp";
import FAQ from "@/components/BroncoCTF/FAQ";

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
        <HeroSection title="BroncoCTF" subtext="Santa Clara University's international cybersecurity competition" subtext2="February 28, 2025" imagePath="original-art/Horse_Knight_final.webp"> 
        
          <button className="registration_Button" style={{zIndex: 1}}>Register</button>
        
        </HeroSection>
        <Content />
        <Footer />
      </div>
    </main>

    </>
  );
}
