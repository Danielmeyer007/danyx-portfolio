import React from "react";
import Roadmap from "./roadmap"; // Import your Roadmap component
import Header from "../sections/header"; // Make sure to import the Header component
import Footer from "../sections/footer";
const RoadmapPage: React.FC = () => {
  return (
    <>
      <Header /> {/* Clean header without any text below */}
      <Roadmap /> {/* The roadmap content with video background and timeline */}
      <Footer /> {/* The footer to remain consistent */}
    </>
  );
};

export default RoadmapPage;
