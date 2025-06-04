
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <img 
              src="/lovable-uploads/7959c024-5cb0-4ab6-9005-43d9805b4248.png"
              alt="Sepehr Rezaee"
              className="w-full h-full rounded-full object-cover border-4 border-cyan-400/30 animate-glow"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Sepehr Rezaee</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI Engineer & Researcher
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Delivering Scalable AI Solutions and Advanced System Architectures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a 
              href="mailto:sepehrrezaee2002@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/SepehrRezaee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/sepehr-rezaee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://scholar.google.com/citations?user=kYl9IWkAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
              title="Google Scholar"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
