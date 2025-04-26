"use client";

import React from "react";

const Roadmap: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('assets/E10E5F83-4867-4B6D-87FC-A10613A5224C_1_105_c.jpeg')" }} // Change to your image path
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Roadmap Container */}
      <div className="relative z-10 container max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Career Roadmap
        </h1>

        <div className="w-full flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-5 gap-6">
          {/* Stop 1: Skills to Develop */}
          <div className="group relative flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:bg-blue-700 transition">
            <span className="text-3xl">🚀</span>
            <h3 className="text-lg font-bold text-white mt-2">Skills to Develop</h3>
            <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition">
              Identify key skills needed for career growth.
            </p>
          </div>

          {/* Stop 2: Certifications */}
          <div className="group relative flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:bg-green-700 transition">
            <span className="text-3xl">📜</span>
            <h3 className="text-lg font-bold text-white mt-2">Certifications</h3>
            <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition">
              Earn certifications to boost credibility and job prospects.
            </p>
          </div>

          {/* Stop 3: Networking */}
          <div className="group relative flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:bg-purple-700 transition">
            <span className="text-3xl">🤝</span>
            <h3 className="text-lg font-bold text-white mt-2">Networking</h3>
            <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition">
              Build strong professional connections.
            </p>
          </div>

          {/* Stop 4: Job Applications */}
          <div className="group relative flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:bg-red-700 transition">
            <span className="text-3xl">📄</span>
            <h3 className="text-lg font-bold text-white mt-2">Job Applications</h3>
            <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition">
              Apply for jobs that match your skills and interests.
            </p>
          </div>

          {/* Stop 5: Long-Term Goals */}
          <div className="group relative flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:bg-yellow-700 transition">
            <span className="text-3xl">🎯</span>
            <h3 className="text-lg font-bold text-white mt-2">Long-Term Goals</h3>
            <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition">
              Define and pursue your career ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
