"use client";

import React from "react";
import { motion } from "framer-motion";

const dummyTestimonials = [
  "DNX Coin es el futuro de las criptomonedas.",
  "Innovación y tecnología en cada transacción.",
  "Un salto cuántico en el mundo cripto.",
  "Experiencia única, no hay nada igual.",
  "El ecosistema DNX te sorprende.",
];

const Prefooter: React.FC = () => {
  // Duplicamos el array para un efecto de carrusel continuo
  const items = [...dummyTestimonials, ...dummyTestimonials];

  return (
    <section className="relative w-full bg-transparent py-8 overflow-hidden">
      {/* Background overlay to improve readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {items.map((text, index) => (
              <div
                key={`${text}-${index}`} // Make the key unique by appending the index
                className="inline-block px-6 py-4 bg-purple-600 bg-opacity-40 rounded-lg shadow-xl text-gray-100 text-center text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-purple-700"
              >
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
