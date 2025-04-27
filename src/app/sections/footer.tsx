"use client";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/15 md:border-none relative z-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-6">
          {/* Left Side: Logo and Branding */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              {/* Central Core */}
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
                <span className="text-white font-bold text-lg md:text-xl">
                  DNX
                </span>
              </div>
              {/* Glowing Effect */}
              <div className="absolute -inset-[3px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
            <span className="text-white text-sm md:text-base font-semibold">
              © DNX Coin® 2025
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 hidden md:flex justify-center">
            <nav>
              <ul className="flex gap-8 text-sm text-white/70 justify-center">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About DNX
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-white transition">
                    DNX Road Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whitepaper"
                    className="hover:text-white transition"
                  >
                    White Paper
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side: Connect Wallet Button */}
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#0a0a0a] to-[#090909] hover:bg-gradient-to-t hover:from-[#1a1a1a] hover:to-[#0d0d0d] transition">
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg border border-black/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset]"></div>
              </div>
              <span className="relative text-white">Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Small Screen Navigation: Hamburger Menu */}
      <div className="md:hidden flex justify-center mt-4">
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
