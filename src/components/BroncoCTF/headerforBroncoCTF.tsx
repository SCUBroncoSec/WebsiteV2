import Link from "next/link";
import Image from "next/image";

const HeaderBroncoCTF: React.FC = () => {
  return (
   <header className="headerbar">
  <nav className="nav">
    <a href="#about">About</a>
    <a href="#faq">FAQ</a>
    <a href="#sponsors">Sponsors</a>
  </nav>

  <nav className="PastProbs">
    <a href="https://github.com/SCUBroncoSec/BroncoCTF-2025-Public" target="_blank" rel="noopener noreferrer">
      Past Challenges Archive
    </a>
  </nav>

  <a href="/" className="headerlogo">
    <img
      src="/BroncoSec_Logo_Red.webp"
      alt="BroncoSec Logo"
      width={140}
      height={50}
    />
  </a>
</header>

  );
};

export default HeaderBroncoCTF;
