import Navbar from "../components/Navbar";
import StarfieldBackground from "../components/StarfieldBackground";
import { Check } from "lucide-react";

const PricingTier = ({ name, price, features }: { name: string; price: string; features: string[] }) => (
  <div className="bg-gray-800/50 p-8 rounded-xl animate-fade-up hover:bg-gray-800/80 transition-colors duration-200">
    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <div className="text-3xl font-bold text-primary mb-6">{price}</div>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-neutral">
          <Check className="text-primary mr-2 h-5 w-5" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg mt-8 transition-colors duration-200">
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$49/mo",
      features: [
        "Up to 1,000 API calls",
        "Basic AI features",
        "Email support",
        "1 user license"
      ]
    },
    {
      name: "Professional",
      price: "$99/mo",
      features: [
        "Up to 10,000 API calls",
        "Advanced AI features",
        "Priority support",
        "5 user licenses"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited API calls",
        "Custom AI models",
        "24/7 support",
        "Unlimited users"
      ]
    }
  ];

  return (
    <>
      <StarfieldBackground />
      <div className="relative min-h-screen">
        <Navbar />
        <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-up">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingTier
                key={tier.name}
                name={tier.name}
                price={tier.price}
                features={tier.features}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;