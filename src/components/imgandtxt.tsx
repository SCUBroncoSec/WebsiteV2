import React from "react";

const ImageWithTextComponent = () => {
  return (
    <div className="container">
      <img
        src="https://www.digitalmusicnews.com/wp-content/uploads/2025/06/never-gonna-give-you-up-spotify-billions-club-1024x576.jpg"
        alt="Description"
        className="headerimage"
      />

      <p className="headertext">
        <strong>BroncoCTF</strong><br />
        
      </p>
      <p className = "text">
          Santa Clara University's Best Competition
      </p>

    </div>
  );
};

export default ImageWithTextComponent;
