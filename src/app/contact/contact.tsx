"use client";

import React from "react";
import Header from "../sections/header";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start bg-transparent text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Animated Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-full px-6 md:px-20 py-32 gap-12"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400 animate-pulse text-center"
        >
          📬 Let&apos;s Make History Together
        </motion.h1>

        {/* Intro */}
        <p className="max-w-3xl text-center text-gray-300 mb-16 text-lg md:text-xl">
          DNX it&apos;s a bold new idea, a next-gen Web3 project, scrow and
          delivery services managment— I&apos;m ready.{" "}
          <span className="text-purple-400 font-semibold">
            On-demand, on point, and future-ready. 🚀
          </span>
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/qr/3BHNDE5OJGGEN1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500 hover:bg-purple-600 transition"
          >
            <FaWhatsapp className="text-green-400 text-3xl" />
            <div>
              <p className="font-bold text-lg">WhatsApp</p>
              <p className="text-gray-300 text-sm">Chat with me directly</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:danyxmeyer007@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500 hover:bg-purple-600 transition"
          >
            <FaEnvelope className="text-yellow-400 text-3xl" />
            <div>
              <p className="font-bold text-lg">Email</p>
              <p className="text-gray-300 text-sm">danyxmeyer007@gmail.com</p>
            </div>
          </motion.a>

          {/* Discord */}
          <motion.a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500 hover:bg-purple-600 transition"
          >
            <FaDiscord className="text-indigo-400 text-3xl" />
            <div>
              <p className="font-bold text-lg">Discord</p>
              <p className="text-gray-300 text-sm">Add me & DM me anytime</p>
            </div>
          </motion.a>

          {/* Telegram */}
          <motion.a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500 hover:bg-purple-600 transition"
          >
            <FaTelegramPlane className="text-blue-400 text-3xl" />
            <div>
              <p className="font-bold text-lg">Telegram</p>
              <p className="text-gray-300 text-sm">Fast encrypted chat</p>
            </div>
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-purple-500 hover:bg-purple-600 transition"
          >
            <FaTwitter className="text-blue-300 text-3xl" />
            <div>
              <p className="font-bold text-lg">Twitter</p>
              <p className="text-gray-300 text-sm">Follow + DM anytime</p>
            </div>
          </motion.a>
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
            🚀 Are you ready to be part of Something Epic
          </h2>
          <a
            href="/whitepaper"
            className="inline-block bg-purple-600 hover:bg-purple-700 p-4 mt-6 rounded-full text-lg font-bold transition"
          >
            Review White Paper
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
