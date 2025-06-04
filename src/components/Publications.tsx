
import { useState } from "react";
import { BookOpen, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Publications = () => {
  const [expandedPub, setExpandedPub] = useState<number | null>(null);

  const publications = [
    {
      title: "DISTIL: Towards Streamlined Distillation for Student-Teacher Models",
      venue: "ICCV 2025",
      year: "2025",
      status: "Submitted",
      authors: "Hossein Mirzaei, Zeinab Sadat Taghavi, Sepehr Rezaee, Masoud Hadi, Moein Madadi, Mackenzie W Mathis.",
      summary: "Novel approach to knowledge distillation for efficient neural network compression while maintaining performance."
    },
    {
      title: "LyAm: Comprehensive Framework for Lyapunov-based Adversarial Machine Learning",
      venue: "ICCV 2025", 
      year: "2025",
      status: "Submitted",
      authors: "Elmira Mirzabeigi, Sepehr Rezaee, Kourosh Parand.",
      summary: "Theoretical framework combining Lyapunov stability theory with adversarial robustness in machine learning."
    },
    {
      title: "Contrastive Learning Framework for Enhanced Model Interpretability",
      venue: "ICCV 2025",
      year: "2025", 
      status: "Submitted",
      authors: "Hossein Mirzaei, Mojtaba Nafez, Moein Madadi, Arad Maleki, Mahdi Hajialilue, Zeinab Sadat Taghavi, Sepehr Rezaee, et al.",
      summary: "Novel contrastive learning approach to improve model interpretability and feature representation learning.",
      link: "https://arxiv.org/pdf/2501.17289"
    },
    {
      title: "Physics-Informed Lane-Emden Solvers Using Lynx-Net: Implementing Radial Basis Functions in Kolmogorov Representation",
      venue: "Under Review",
      year: "2024",
      status: "Under Review",
      authors: "Elmira Mirzabeigi, Maryam Babaei*, Amir Hossein Karami*, Sepehr Rezaee*, Rezvan Salehi, Kourosh Parand",
      summary: "Application of physics-informed neural networks to model complex disease progression patterns with enhanced accuracy."
    },
    {
      title: "Detection and Mitigation of Trojaned Models in Distributed Learning",
      venue: "NeurIPS 2024",
      year: "2024",
      status: "Accepted",
      authors: "Hossein Mirzaei, Ali Ansari*, Bahar Dibaei Nia*, Mojtaba Nafez^ , Moein Madadi^ , Sepehr Rezaee^. et. al.",
      summary: "Comprehensive approach to detect and mitigate trojaned models in federated and distributed learning environments.",
      link: "https://proceedings.neurips.cc/paper_files/paper/2024/file/ef52fd1e24634cb8f7003ebbfb3644d9-Paper-Conference.pdf"
    },
    {
      title: "Comparison of Pre-Training and Classification Models for Early Detection of Alzheimer’s Disease Using Magnetic Resonance Imaging",
      venue: "I4C 2023",
      year: "2023",
      status: "Published",
      authors: "AH Karami, S Rezaee, E Mirzabeigi, K Parand",
      summary: "Multimodal AI approach combining neuroimaging and cognitive assessments for early Alzheimer's detection.",
      link: "https://i4c.iust.ac.ir/UPL/Paper2023/accpapers/i4c2023-1056.pdf"
    },
    {
      title: "Advanced Clustering Algorithms for Large-Scale Data Analysis",
      venue: "Book Chapter",
      year: "2022",
      status: "Published",
      authors: "Sepehr Rezaee, et al.",
      summary: "Comprehensive review and novel approaches to clustering algorithms for handling large-scale datasets."
    }
  ];

  const statusColors = {
    "Accepted": "text-green-400 bg-green-400/10",
    "Published": "text-blue-400 bg-blue-400/10", 
    "Under Review": "text-yellow-400 bg-yellow-400/10",
    "Submitted": "text-orange-400 bg-orange-400/10"
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Research & Publications
        </h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="bg-dark-800/50 border-dark-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {pub.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-cyan-400 font-medium">{pub.venue}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{pub.year}</span>
                      <span className="text-gray-400">•</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[pub.status as keyof typeof statusColors]}`}>
                        {pub.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{pub.authors}</p>
                  </div>
                  
                  <button
                    onClick={() => setExpandedPub(expandedPub === index ? null : index)}
                    className="ml-4 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {expandedPub === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                </div>
                
                {expandedPub === index && (
                  <div className="mt-4 pt-4 border-t border-dark-700 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">{pub.summary}</p>
                    <div className="mt-3 flex justify-end">
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                        <ExternalLink size={16} className="mr-1" />
                        View Publication
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://scholar.google.com/citations?user=kYl9IWkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
          >
            <ExternalLink size={20} className="mr-2" />
            View Full Publication List
          </a>
        </div>
      </div>
    </div>
  );
};
