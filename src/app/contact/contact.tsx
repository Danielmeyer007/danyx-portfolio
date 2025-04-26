"use client";

import React, { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { "agent-id": string };
    }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  // Load ElevenLabs AI widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setChatResponse(data.chatResponse);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
      </div>

      <div className="relative z-10 container max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          📩 Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Let’s connect! Fill out the form below, and we’ll get back to you.
        </p>

        <div className="relative bg-gray-900/90 p-6 rounded-2xl shadow-lg max-w-md w-full text-center border border-purple-500">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-24 rounded bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>

          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}

          {chatResponse && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg text-sm">
              <p className="font-bold text-purple-400">AI Response:</p>
              <p>{chatResponse}</p>
            </div>
          )}

          <div className="absolute -inset-[3px] rounded-2xl border border-purple-500 opacity-40 animate-pulse"></div>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 flex flex-col items-center z-10">
        <p className="text-white mb-2">
          For customer service live, please call
        </p>
        <elevenlabs-convai agent-id="0yRJ9gUoUHkH5PR2mJWV"></elevenlabs-convai>
      </div>
    </section>
  );
}
