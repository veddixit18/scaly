import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import StarfieldBackground from "../components/StarfieldBackground";

const Index = () => {
  return (
    <>
      <StarfieldBackground />
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Features />
      </div>
    </>
  );
};

export default Index;