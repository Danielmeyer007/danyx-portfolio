"use client";

import React from "react";

const Whitepaper: React.FC = () => {
  return (
    <>
      {/* Include the Header component to keep it consistent across pages */}

      {/* Whitepaper Content */}
      <section className="relative w-full py-12 overflow-hidden z-10">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              DNX Coin Whitepaper
            </h1>

            {/* Introduction Section */}
            <p className="text-xl mb-8 leading-relaxed text-gray-200">
              Welcome to the official whitepaper of DNX Coin, a revolutionary
              digital currency poised to transform the cryptocurrency landscape.
              Here we lay out our vision, technology, and strategic roadmap for
              achieving global decentralization. Read on to discover how DNX
              Coin will change the future of finance.
            </p>

            {/* Vision Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-semibold mb-4 text-purple-400">
                The Vision
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                At DNX Coin, we envision a decentralized future where
                individuals can transact freely and securely, without the need
                for intermediaries. Our vision is to create a seamless,
                borderless financial ecosystem that fosters transparency and
                financial freedom.
              </p>
            </div>

            {/* Technology Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-semibold mb-4 text-purple-400">
                The Technology
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                DNX Coin is powered by cutting-edge blockchain technology. It
                ensures maximum security, scalability, and decentralization.
                With advanced cryptographic protocols, DNX Coin ensures the
                privacy of its users while enabling fast and low-cost
                transactions globally.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                Our platform supports smart contracts, decentralized
                applications (dApps), and cross-chain interoperability, offering
                an ecosystem that is both flexible and secure for developers and
                users alike.
              </p>
            </div>

            {/* Roadmap Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-semibold mb-4 text-purple-400">
                Roadmap
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                Our roadmap outlines the steps we will take to revolutionize the
                world of digital finance. From our initial coin offering (ICO)
                to strategic partnerships and global platform integration, DNX
                Coin will follow a well-defined and ambitious plan.
              </p>
              {/* Properly structured: no <ul> inside <p> */}
              <div className="text-lg mb-6 leading-relaxed text-gray-300 text-left">
                <p className="mb-2">Key milestones include:</p>
                <ul className="list-disc pl-6">
                  <li>Initial coin offering (ICO)</li>
                  <li>Platform and dApp development</li>
                  <li>Global partnerships</li>
                  <li>Full ecosystem deployment</li>
                </ul>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center mt-16">
              <button
                onClick={() => alert("Learn more functionality coming soon!")}
                className="inline-block py-3 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
              >
                Learn More and Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitepaper;
