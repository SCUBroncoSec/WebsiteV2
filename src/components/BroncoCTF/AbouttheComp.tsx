import React from "react";

const AboutTheCompetition: React.FC = () => {
  return (
    <section id="about">
        
      <div className="AboutHeader">
        <div style={{ 
            textAlign: "left",          
            padding: "1rem 2rem",       
        }}>
        About the Competititon
        </div>
      </div>

        <div style={{ 
            textAlign: "left",          
            padding: "1rem 2rem",       
        }}>
            
        BroncoSec is an international CTF competition hosted by BroncoCTF, Santa Clara University’s cybersecurity club. 
        In BroncoCTF, teams of up to 3 students solve cybersecurity challenges that scale in difficulty. The harder the challenge, the more points competitors earn. 
        BroncoCTF has run since 2024, and our theme is (NEVER GONNA GIVE YOU UP) in 2026! On February 18, test your skills in forensics, hacking, and more!
        </div>

      
    </section>
  );
};

export default AboutTheCompetition;
