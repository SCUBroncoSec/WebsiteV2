"use client";

// components/header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ headerImagePath }: { headerImagePath?: string }) => {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const heroEl = document.querySelector('.custom-hero-image');
    if (!heroEl) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  const showHeaderImage = !!headerImagePath && !heroVisible;

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-16 relative">
        <div className="text-xl font-bold">
          <Link href="/">BroncoSec</Link>
        </div>

        <nav className="flex gap-6" />
        <div className="text-xl font-bold">
          <Link href="/BroncoCTF">BroncoCTF</Link>
        </div>

        {/* Centered header image that appears when hero is not visible */}
        {showHeaderImage && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img src={headerImagePath} alt="header" className="h-12 w-auto object-contain" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
