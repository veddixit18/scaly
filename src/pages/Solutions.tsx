import Navbar from "../components/Navbar";
import StarfieldBackground from "../components/StarfieldBackground";

const Solutions = () => {
  return (
    <>
      <StarfieldBackground />
      <div className="relative min-h-screen">
        <Navbar />
        <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-up">
              AI-Powered Solutions for Your Business
            </h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto mb-8">
              Transform your business with our cutting-edge AI solutions designed to optimize operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gray-800/50 p-8 rounded-xl animate-fade-up">
              <h2 className="text-2xl font-bold text-white mb-4">Enterprise AI</h2>
              <p className="text-neutral">Custom AI solutions tailored for enterprise-scale operations and workflows.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-white mb-4">Small Business</h2>
              <p className="text-neutral">Affordable AI tools designed to help small businesses compete and grow.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;