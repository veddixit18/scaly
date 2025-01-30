import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import StarfieldBackground from "../components/StarfieldBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <StarfieldBackground />
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;