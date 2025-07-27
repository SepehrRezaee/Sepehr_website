
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer, Agentic Systems",
      company: "PropTy Global",
      period: "Aug 2024 – Present",
      location: "Remote",
      achievements: [
        "Architected and deployed production-ready multi-agent LLM systems (LangChain, customRAG) driving autonomous recommendation and business-decision workflows with 85%+ completion rates.",
        "Developed robust agent-to-agent protocols and memory modules for context-aware, goal-driven reasoning and designed scalable back-end services using FastAPI, PostgreSQL and MongoDB.",
        "Integrated fine-tuned LLMs into customer-facing platforms, reducing user onboarding time by 15% and improving the contextual relevance of chatbot interactions.",
        "Deployed containerized solutions via Docker and Kubernetes, accelerating deployment cycles by 40% and efficiently managing high-concurrency user traffic.",
        "Established advanced monitoring and feedback loops using Prometheus, Grafana and the ELK stack, connecting agent actions to live business KPIs and enabling continuous agent evaluation.",
        "Implemented AWS SageMaker pipelines for efficient model training and inference, reducing operational costs by 20% through spot instances and automated scaling.",
        "Compliance and multilingual support, Ensured secure, multilingual support and compliance with data-privacy frameworks (e.g. HIPAA/GDPR) across pipelines and dashboards, coordinating with product and compliance teams."
      ]
    },
    {
      title: "Chief AI Officer & Multi-Agent Architect",
      company: "Novel Mind Scientist",
      period: "Oct 2022 – Present",
      location: "Tehran, Iran",
      achievements: [
        "Led the full-stack delivery of LLM-powered agents for SaaS, healthcare, and education, integrating vision, text, and knowledge graph data",
        "Implemented multi-agent orchestration (LangChain, Celery) and business process automation pipelines",
        "Provided technical leadership: code reviews, design standards, agent evaluation, documentation, and knowledge transfer"
      ]
    },
    {
      title: "Project Manager, Agentic ML SaaS",
      company: "NovaVira",
      period: "Mar 2023 – Feb 2024",
      location: "Tehran, Iran",
      achievements: [
        "Delivered a Django-based agentic recommender platform (LangChain, GCP, Docker) with hybrid search and automated workflow.",
        "Oversaw Agile/CI-CD, ensuring reliability and fast iteration on agent architectures.",
        "Multilingual and compliant design, Implemented multilingual UI/UX (Arabic/English) and compliance-driven architecture to meet diverse market and regulatory requirements."
      ]
    },
    {
      title: "System Engineer & Process Developer",
      company: "Mohaymen ICT",
      period: "Jan 2022 – Sep 2022",
      location: "Tehran, Iran",
      achievements: [
        "Automated core processes with C# and BizAgi (execution time reduced by 30%)",
        "Improved system uptime by 15%, support tickets down by 40%",
        "Implemented Azure dashboards for real-time monitoring",
        "Developed Azure analytics dashboards (manual reporting reduced by 50%)"
      ]
    },
    {
      title: "Software Developer & QA Tester",
      company: "Valmart",
      period: "Oct 2021 – Mar 2022",
      location: "Tehran, Iran",
      achievements: [
        "Built Python/Selenium test suites (automation coverage 60%→95%)",
        "Identified 200+ defects, reducing regression rates by 70%",
        "Optimized Oracle queries (performance improved by 50%)"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-dark-950"></div>
                
                <div className="bg-dark-800/50 p-6 rounded-lg border border-dark-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-cyan-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-gray-300">
                        <TrendingUp className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
