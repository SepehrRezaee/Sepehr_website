
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
              I'm an AI Engineer and System Architect with over 3 years of industry experience, 
              specializing in delivering scalable, high-performance software and machine learning solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across Machine Learning, AI, System Architecture, and DevOps, with a 
              proven track record of boosting user engagement by 25%, reducing deployment time by 40%, 
              and cutting operational costs by 20%.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing my B.Sc. in Computer Science at Shahid Beheshti University (GPA 3.4/4.0), 
              I combine academic rigor with real-world application to solve complex problems in AI and 
              system design.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-dark-800/50 p-6 rounded-lg border border-dark-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Experience Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  3+ years in AI/ML and system architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  25% boost in user engagement through AI solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  40% reduction in deployment time via DevOps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  20% operational cost reduction
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-800/50 p-6 rounded-lg border border-dark-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Research Focus</h3>
              <p className="text-gray-300">
                Deep Learning, Computer Vision, Generative AI, AI Safety, and AI Agents 
                with active contributions to top-tier conferences including NeurIPS and ICCV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
