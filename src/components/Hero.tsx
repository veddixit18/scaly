import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-up">
            Scale Your Business with{" "}
            <span className="text-primary">AI-Powered</span> Intelligence
          </h1>
          <p className="text-lg sm:text-xl text-neutral max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Leverage advanced AI to automate your workflows, generate insights,
            and scale your business faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:gap-4">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="text-neutral hover:text-white transition-colors duration-200">
              Watch Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;