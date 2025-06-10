
import { Brain, Cloud, Code, Database, Cog, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI Agent Orchestration",
      skills: [
        "Multi-Agent Systems (LangChain, LangGraph, LlamaIndex)",
        "Retrieval-Augmented Generation (RAG)",
        "Agent Communication & Memory",
        "Prompt Engineering & SPAR (Sense, Plan, Act, Reflect)",
        "Agent Routing, Escalation & Handoff"
      ]
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        "Python (expert)",
        "C++",
        "Java",
        "C#"
      ]
    },
    {
      icon: Cloud,
      title: "Infrastructure & MLOps",
      skills: [
        "Kubernetes (expert)",
        "Docker (expert)",
        "AWS (SageMaker, EC2)",
        "GCP, Azure",
        "Airflow, Celery, MLflow",
        "CI/CD, Monitoring (Prometheus, Grafana, ELK)"
      ]
    },
    {
      icon: Database,
      title: "Databases & Vector Systems",
      skills: [
        "Pinecone, Weaviate, Chroma",
        "PostgreSQL (pgvector)",
        "MongoDB, Redis"
      ]
    },
    {
      icon: Cog,
      title: "LLMs & AI Frameworks",
      skills: [
        "OpenAI GPT (3/4), Anthropic Claude, Google Gemini",
        "Hugging Face Transformers",
        "Fine-tuning & Custom LLM Integration",
        "Knowledge Graphs (Neo4j)",
        "Multimodal AI (Vision, Text, Speech)"
      ]
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      skills: [
        "Technical Leadership",
        "Architectural Standards & Code Review",
        "Team Mentoring & Knowledge Transfer",
        "Agile/CI-CD",
        "Cross-functional Collaboration"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Core Competencies & Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-dark-800/50 p-6 rounded-lg border border-dark-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Technologies & Frameworks */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-cyan-400">
            Technologies & Frameworks
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "LangChain", "LangGraph", "LlamaIndex",
              "PyTorch", "TensorFlow", "FastAPI", "Flask",
              "Docker", "Kubernetes", "AWS", "GCP",
              "Pinecone", "Weaviate", "Chroma", "PostgreSQL (pgvector)",
              "MongoDB", "Redis", "Neo4j", "Airflow",
              "Celery", "MLflow", "Prometheus", "Grafana", "ELK"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="bg-dark-800/30 p-3 rounded-lg text-center border border-dark-700 hover:border-cyan-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-gray-300 font-mono text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

