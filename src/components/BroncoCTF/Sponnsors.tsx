import React from "react";

const SponsorBroncoCTF: React.FC = () => {
  return (
    <section id="sponsors">
    <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",     
        flexDirection: "column",  
      }}
    >
      <div className="SponsorHeader">
        Thank you to our sponsor!
      </div>

      <header className="logoimg">
        <img
          src="Santa_Clara_U_Seal.png"
          alt="SCU LOGO"
          className="logoimg"
        />
      </header>
    </div>
    </section>

  );
};

export default SponsorBroncoCTF;
