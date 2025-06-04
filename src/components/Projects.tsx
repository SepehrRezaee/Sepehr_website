
import { Shield, Brain, Activity, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "AI Model Security Framework",
      year: "2024",
      icon: Shield,
      description: "Comprehensive security framework for detecting and mitigating vulnerabilities in AI models, focusing on adversarial attacks and model robustness.",
      technologies: ["Python", "PyTorch", "TensorFlow", "Security Analysis", "Adversarial ML"],
      highlights: [
        "Novel detection algorithms for trojaned models",
        "Real-time vulnerability assessment",
        "Automated security patching system"
      ]
    },
    {
      title: "AI-based Alzheimer's Disease Detection",
      year: "2023-2024",
      icon: Brain,
      description: "Multimodal AI system combining neuroimaging data and cognitive assessments for early detection of Alzheimer's disease with high accuracy.",
      technologies: ["Deep Learning", "Computer Vision", "Medical Imaging", "TensorFlow", "Keras"],
      highlights: [
        "95% accuracy in early detection",
        "Multimodal data fusion approach", 
        "Published research outcomes"
      ]
    },
    {
      title: "Physics-Informed Neural Networks for Disease Modeling",
      year: "2023",
      icon: Activity,
      description: "Advanced neural network architecture that incorporates physical laws and biological constraints for accurate disease progression modeling.",
      technologies: ["Physics-Informed NNs", "PyTorch", "Mathematical Modeling", "Scientific Computing"],
      highlights: [
        "Integration of biological constraints",
        "Improved prediction accuracy",
        "Novel PINN architecture design"
      ]
    },
    {
      title: "AI-driven M/EEG Neural Signal Analysis",
      year: "2022",
      icon: Zap,
      description: "Advanced signal processing and machine learning pipeline for analyzing magnetoencephalography and electroencephalography data for neuroscience research.",
      technologies: ["Signal Processing", "Machine Learning", "MATLAB", "Python", "Neuroscience"],
      highlights: [
        "Real-time signal processing",
        "Advanced feature extraction",
        "Clinical validation completed"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Selected Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-dark-800/50 border-dark-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <project.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <span className="text-cyan-400 text-sm font-medium">{project.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Interested in learning more about these projects?</p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-medium transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};
