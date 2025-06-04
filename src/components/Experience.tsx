
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer (Contract)",
      company: "PropTy Global",
      period: "Aug 2024 – Present",
      location: "Remote",
      achievements: [
        "Developed AI-driven chatbot & recommendation engine, increasing user engagement by 25%",
        "Engineered FastAPI microservices with PostgreSQL (3TB+) and MongoDB, ensuring API response times <100ms",
        "Deployed AWS SageMaker pipelines on spot instances, reducing costs by 20%",
        "Containerized services with Docker & Kubernetes, cutting deployment time by 40%",
        "Implemented monitoring (Prometheus, Grafana, ELK) for 99.9% uptime"
      ]
    },
    {
      title: "Chief AI Officer",
      company: "Novel Mind Scientist",
      period: "Oct 2022 – Present",
      location: "Tehran, Iran",
      achievements: [
        "Spearheaded AI-agent development for Medical, Education, Oil & Petroleum sectors",
        "Leveraged state-of-the-art tools (LLMs, multimodal architectures) for bespoke AI applications",
        "Launched ADiagnosis, a multimodal AI agent for early diagnosis of mental disorders"
      ]
    },
    {
      title: "Project Manager",
      company: "NovaVira",
      period: "Mar 2023 – Feb 2024",
      location: "Tehran, Iran",
      achievements: [
        "Led a team delivering Django-based ML recommender (85% precision, 75% recall)",
        "Streamlined Agile workflows and CI/CD, reducing cycles by 30%",
        "Architected GCP data pipelines (50K+ records/day, 98% SLA compliance)"
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
