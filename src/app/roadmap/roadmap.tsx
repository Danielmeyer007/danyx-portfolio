"use client";

import React from "react";

const RoadmapPage: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="stars absolute inset-0" />

      {/* Contenido principal */}
      <div className="relative z-10 container max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          🚀 Roadmap
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Our journey to decentralization with Christ-centered values.
        </p>

        {/* Timeline */}
        <div className="relative w-full max-w-lg">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>

          {/* Milestone 1 */}
          <div className="relative flex items-center mb-10">
            <div className="w-1/2 text-right pr-6">
              <h3 className="text-xl font-bold text-white">Phase 1: Concept</h3>
              <p className="text-sm text-gray-400">
                Research, ideation, and foundation.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-6 h-6 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex items-center mb-10">
            <div className="w-1/2 flex justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div className="w-1/2 pl-6">
              <h3 className="text-xl font-bold text-white">
                Phase 2: Development
              </h3>
              <p className="text-sm text-gray-400">
                Smart contracts & decentralized infra.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex items-center mb-10">
            <div className="w-1/2 text-right pr-6">
              <h3 className="text-xl font-bold text-white">Phase 3: Launch</h3>
              <p className="text-sm text-gray-400">
                Beta testing & real-world use.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-6 h-6 bg-pink-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="relative flex items-center">
            <div className="w-1/2 flex justify-center">
              <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div className="w-1/2 pl-6">
              <h3 className="text-xl font-bold text-white">Phase 4: Growth</h3>
              <p className="text-sm text-gray-400">
                Adoption & community building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPage;
