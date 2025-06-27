// src/components/Header.tsx
"use client"; // Diperlukan untuk useState dan useEffect

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300
                 ${hasScrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:p-5">
        <Link href="/" className="text-2xl font-bold text-white">
          Arya Putra
        </Link>

        {/* Navigasi Desktop - Font Putih & Efek Opacity */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white hover:opacity-75 transition-opacity duration-300">
            Tentang Saya
          </Link>
          <Link href="#projects" className="text-white hover:opacity-75 transition-opacity duration-300">
            Proyek
          </Link>
          <Link href="#contact" className="text-white hover:opacity-75 transition-opacity duration-300">
            Kontak
          </Link>
        </nav>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile - Muncul saat Hamburger di-klik */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl absolute top-full left-0 w-full h-screen">
          <nav className="flex flex-col items-center justify-center h-2/3 space-y-8">
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:opacity-75 transition-opacity">
              Tentang Saya
            </Link>
            <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:opacity-75 transition-opacity">
              Proyek
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:opacity-75 transition-opacity">
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;