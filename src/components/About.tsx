
export const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Agentic AI Engineer with 5+ years of hands-on experience in designing, orchestrating, and deploying multi-agent AI/LLM systems for production.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Expert in Python, Kubernetes, Docker, and LLM-based agent platforms such as LangChain, RAG, OpenAI GPT, and Anthropic Claude.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proven track record of building scalable, autonomous, business-driven AI agents and pipelines for SaaS and enterprise, with a focus on agent communication, memory, orchestration, and outcome optimization.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-dark-800/50 p-6 rounded-lg border border-dark-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  5+ years engineering production-ready multi-agent AI/LLM systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Expertise in Python, Kubernetes, Docker, and agent orchestration frameworks (LangChain, RAG)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Deployed scalable, autonomous AI agents for SaaS and enterprise workflows
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Specialized in agent communication, memory management, and workflow optimization
                </li>
              </ul>
            </div>
            <div className="bg-dark-800/50 p-6 rounded-lg border border-dark-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Research Focus</h3>
              <p className="text-gray-300">
                Autonomous AI agents, LLM integration, multi-agent orchestration, and retrieval-augmented generation (RAG). 
                Contributions to top-tier venues such as NeurIPS and ICCV, with a focus on agent security, optimization, and business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
