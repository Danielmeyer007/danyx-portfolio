"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react"; // 🏠 Home, Menu, X (Close) icons

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage hamburger menu state

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none flex items-center justify-between px-6 md:px-12 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4">
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          {/* Core of the logo */}
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
            <span className="text-white font-bold text-xs md:text-base">
              DNX
            </span>
          </div>
          {/* Glowing ring around the logo */}
          <div className="absolute -inset-[2px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6 text-white text-sm md:text-base">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-yellow-400 transition"
        >
          <Home className="w-5 h-5" /> {/* 🏠 home icon */}
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          About DNX
        </Link>
        <Link href="/roadmap" className="hover:text-yellow-400 transition">
          DNX Road Map
        </Link>
        <Link href="/whitepaper" className="hover:text-yellow-400 transition">
          White Paper
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">
          Contact Us
        </Link>

        {/* Buy DNX Button */}
        <Link
          href="/buy-dnx"
          className="px-4 py-2 rounded-full bg-gradient-to-b from-[#0a0a0a] to-[#090909] text-white hover:text-yellow-400 transition"
        >
          Buy DNX
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? (
            <X className="w-6 h-6" /> // Close icon when menu is open
          ) : (
            <Menu className="w-6 h-6" /> // Menu icon when menu is closed
          )}
        </button>
      </div>

      {/* Mobile Menu (Shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-40">
          <div className="bg-transparent p-6 flex flex-col space-y-6 text-white text-xl">
            <Link
              href="/"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              About DNX
            </Link>
            <Link
              href="/roadmap"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              DNX Road Map
            </Link>
            <Link
              href="/whitepaper"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              White Paper
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/buy-dnx"
              className="px-4 py-2 rounded-full bg-gradient-to-b from-[#0a0a0a] to-[#090909] text-white hover:text-yellow-400 transition"
              onClick={toggleMenu}
            >
              Buy DNX
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
