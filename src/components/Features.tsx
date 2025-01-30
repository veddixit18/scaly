import { Bot, Target, BarChart3, Users } from "lucide-react";

const features = [
  {
    title: "AI-Powered Insights",
    description: "Get real-time insights and predictions to make data-driven decisions",
    icon: Bot,
  },
  {
    title: "Lead Scoring",
    description: "Automatically score and prioritize leads based on behavior patterns",
    icon: Target,
  },
  {
    title: "Performance Analytics",
    description: "Track and analyze your sales performance with detailed metrics",
    icon: BarChart3,
  },
  {
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time",
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="bg-background py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Features to Boost Your Sales
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            Everything you need to streamline your sales process and increase revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/80 transition-colors duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;