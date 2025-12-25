import ImageWithTextComponent from "@/components/imgandtxt";
import FooterForBroncoCTF from "@/components/BroncoCTF/footerforbroncoctf";
import HeaderBroncoCTF from "@/components/BroncoCTF/headerforBroncoCTF";
import AboutUs from "@/components/BroncoCTF/CoolStats";
import SponsorBroncoCTF from "@/components/BroncoCTF/Sponnsors";
import AboutTheComp from "@/components/BroncoCTF/AbouttheComp";
import FAQ from "@/components/BroncoCTF/FAQ";



export default function Subpage() {
  return (
    <>
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
