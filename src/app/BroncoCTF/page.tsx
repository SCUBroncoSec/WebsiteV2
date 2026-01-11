import ImageWithTextComponent from "@/components/imgandtxt";
import FooterForBroncoCTF from "@/components/BroncoCTF/footerforbroncoctf";
import HeaderBroncoCTF from "@/components/BroncoCTF/headerforBroncoCTF";
import AboutUs from "@/components/BroncoCTF/CoolStats";
import SponsorBroncoCTF from "@/components/BroncoCTF/Sponnsors";
import AboutTheComp from "@/components/BroncoCTF/AbouttheComp";
import FAQ from "@/components/BroncoCTF/FAQ";

import HeroSection from "@/components/hero-section"
import Content from "@/components/content";
import Footer from "@/components/footer";

import Link from "next/link";
import Header from "@/components/header";


export default function Subpage() {
  return (
        <>
    <Header />
    <main className="relative min-h-screen bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-16">
      <div className="max-w-7xl w-full">
        <HeroSection title="BroncoCTF" subtext="Santa Clara University's annual cybersecurity competition" />
        {/* <Content />
        <Footer /> */}
      </div>
    </main>

    <div>
      <HeaderBroncoCTF/>
    </div>
    <div>
      <ImageWithTextComponent />
    </div>

    <div>
      <AboutTheComp />
    </div>

    <div>
      <AboutUs />
    </div>
    
    <div>
      <FAQ />
    </div>

    <div> 
      <SponsorBroncoCTF />
    </div>

    
      <div className="max-w-7xl w-full">
        <FooterForBroncoCTF />
      </div>  
      
        
    </>
  );
}
