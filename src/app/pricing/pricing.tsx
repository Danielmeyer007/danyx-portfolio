"use client";

import React from "react";
import Image from "next/image";

const Pricing: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Next.js Image */}
      <Image
        src="/noche.jpeg" // Ensure this is in /public
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-40"
        priority
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Container */}
      <div className="relative z-10 container max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Pricing & Services
        </h1>

        {/* Services Section */}
        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-2xl shadow-lg w-full mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">💼 Services</h2>
          <p className="text-white/70 text-sm">
            Services are provided from person to person. The cost depends on the services offered. The platform holds funds until jobs are completed.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-2xl shadow-lg w-full mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">💰 Pricing</h2>
          <p className="text-white/70 text-sm">
            Prices vary per service. We act as a secure escrow, ensuring fair transactions for all users.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-2xl shadow-lg w-full">
          <h2 className="text-2xl font-bold text-white mb-4">🔒 Privacy Notice</h2>
          <p className="text-white/70 text-sm">
            We are not responsible for any misuse. Users must ensure correct transactions. Decentralization builds trust over time.
          </p>
        </div>
      </div>

      {/* Orbiting Elements (Same as Hero) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-[0_0_30px_rgba(100,100,255,0.8)]">
                <span className="text-white font-bold text-2xl">DNX</span>
              </div>
              <div className="absolute -inset-[10px] rounded-full border border-purple-500 opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Orbiting Electrons */}
          <div className="absolute inset-0 flex items-center justify-center animate-orbit-clockwise">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-xs text-white">DNX</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-xs text-white">DNX</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center animate-orbit-counterclockwise">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-xs text-white">DNX</span>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-xs text-white">DNX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations for Orbiting */}
      <style jsx>{`
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

export default Pricing;
