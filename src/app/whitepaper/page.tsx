import Whitepaper from "../whitepaper/whitepaper"; // Adjusted import path to match file structure
import Header from "../sections/header";
import Footer from "../sections/footer";
export default function WhitepaperPage() {
  return (
    <>
      <Header />

      {/* The Whitepaper component renders the main content of the whitepaper page */}
      <Whitepaper />

      <Footer />
    </>
  );
}
