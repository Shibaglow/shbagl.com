
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Sponsers from "./components/Sponsers";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import HoldersBenefits from "./components/HoldersBenefits";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Sponsers />
      <Tokenomics />
      <Roadmap />
      <HoldersBenefits />
      <Footer />
    </>
  );
}
