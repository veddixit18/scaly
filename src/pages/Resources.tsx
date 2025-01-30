import Navbar from "../components/Navbar";
import StarfieldBackground from "../components/StarfieldBackground";
import { BookOpen, FileText, Video, MessageCircle } from "lucide-react";

const ResourceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/80 transition-colors duration-200 animate-fade-up">
    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral">{description}</p>
  </div>
);

const Resources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation to help you get started."
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video tutorials showing you how to use our platform."
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real-world examples of how companies are using Scaly.ai."
    },
    {
      icon: MessageCircle,
      title: "Community",
      description: "Join our community of developers and AI enthusiasts."
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
              Resources & Support
            </h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Everything you need to succeed with Scaly.ai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.title}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;