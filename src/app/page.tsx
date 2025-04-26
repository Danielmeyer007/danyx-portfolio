import React from "react";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Footer from "./sections/footer";
import Prefooter from "./sections/prefooter";
import "./globals.css";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Prefooter />

      <Footer />
    </div>
  );
};

export default Page;
