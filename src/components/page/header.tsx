// components/header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <Link href="/">BroncoSec</Link>
        </div>

        <nav className="flex gap-6"/>
        <div className="text-xl font-bold">

          <Link href="/BroncoCTF">BroncoCTF</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
