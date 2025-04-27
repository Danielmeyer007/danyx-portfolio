"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-[80px]">
      {/* Full-screen video background */}
      <video
        id="background-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/imagen-bh-dnx.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to dim the background for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center flex-col text-center px-4 md:px-12 h-full space-y-8">
        {/* Welcome Title with 3D effect */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl transform hover:scale-110 transition duration-500">
          Welcome to the Future of Digital Finance
        </h1>

        {/* Catchy description */}
        <p className="text-lg md:text-xl text-white opacity-90 max-w-3xl mx-auto">
          Unlock the power of innovation. Explore limitless possibilities with a
          decentralized ecosystem designed to bring you closer to financial
          freedom. Join us in shaping the future of global transactions and
          beyond.
        </p>

        {/* Atomic Reactor Container */}
        <div className="relative w-80 h-80 mt-8 flex items-center justify-center">
          {/* Central core with glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
                <span className="text-white font-bold text-2xl">DNX</span>
              </div>
              {/* Glowing ring effect */}
              <div className="absolute -inset-[10px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Orbiting Electrons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Clockwise rotating electrons */}
            <div className="absolute inset-0 flex items-center justify-center animate-orbit-clockwise">
              {/* Top Electron */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
              {/* Bottom Electron */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
            </div>

            {/* Additional Electrons (left and right) */}
            <div className="absolute inset-0 flex items-center justify-center animate-orbit-counterclockwise">
              {/* Left Electron */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
              {/* Right Electron */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-md">
                  <span className="text-xs text-white">DNX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Get Started Button */}
          <div className="absolute z-20">
            <a
              href="/buy-dnx"
              className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-b from-[#0a0a0a] to-[#090909] text-white hover:text-yellow-400 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* 3D Effect on Title */}
      <style>{`
        h1 {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4);
        }
        @keyframes orbit-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-counterclockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-orbit-clockwise {
          animation: orbit-clockwise 20s linear infinite;
        }
        .animate-orbit-counterclockwise {
          animation: orbit-counterclockwise 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
