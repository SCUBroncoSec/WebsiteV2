import React from "react";
import headerImage from "public/IMG_0887.webp";


const ImageWithTextComponent = () => {
  return (
    <div className="container">
      <img
        src="FlagBuckyGlow.webp"
        alt="Description"
        className="headerimage"
      />

  <div className="header">
  <p className="headertext">
    <strong>BroncoCTF</strong>
  </p>
   <p className="textdate">
    February 18, 2025
  </p>
  <p className="text">
    Santa Clara University's International Capture the Flag Competition
  </p>
 
  
  <button className="registration_Button">
    <div>
      Register Today
    </div>
  </button>

</div>


    </div>
  );
};

export default ImageWithTextComponent;
