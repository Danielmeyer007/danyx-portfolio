// components/Prefooter.tsx
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
      <div className="container mx-auto px-4">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex gap-6 items-center"
            // Ajusta el valor de x según la cantidad y ancho de los elementos
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {items.map((text) => (
              <div
                key={text}
                className="inline-block px-6 py-4 bg-purple-500 bg-opacity-25 rounded-lg shadow text-gray-200 text-center text-md"
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
