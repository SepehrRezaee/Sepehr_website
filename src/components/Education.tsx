
import { GraduationCap, Award, Trophy, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "Shahid Beheshti University",
      period: "2021 - 2025",
      gpa: "3.4/4.0",
      interests: ["Deep Learning", "Computer Vision", "Generative AI", "AI Safety", "AI Agents"],
      description: "Focusing on advanced topics in artificial intelligence and machine learning with hands-on research experience."
    },
    {
      degree: "Mathematics Diploma",
      institution: "Allameh Tabatabaei High School",
      period: "2019 - 2021", 
      gpa: "3.87/4.0",
      interests: ["Advanced Mathematics", "Physics", "Computer Science Fundamentals"],
      description: "Strong foundation in mathematical sciences with excellent academic performance."
    }
  ];

  const awards = [
    {
      title: "Best Ideator Award",
      year: "2023",
      description: "Recognized for innovative AI solution design and creative problem-solving approach."
    },
    {
      title: "National Entrance Exam - Top 0.3%",
      year: "2020",
      description: "Ranked 352nd among approximately 150,000 participants in the national university entrance examination."
    }
  ];

  const courses = [
    "Foundations of Data Science",
    "Data Mining",
    "Numerical Analysis", 
    "Non-Linear Optimization",
    "Partial Differential Equations",
    "Neural Networks",
    "Advanced Programming",
    "Computer Vision",
    "Machine Learning"
  ];

  const teachingAssistant = [
    "Advanced Programming (2023-Present)",
    "Data Mining (2022-Present)", 
    "Basic Programming (2022-Present)"
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Education & Awards
        </h2>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-dark-800/50 border-dark-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      <h5 className="text-lg text-cyan-400 mb-2">{edu.institution}</h5>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="text-gray-400 mb-1">{edu.period}</div>
                      <div className="text-cyan-400 font-semibold">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="text-sm font-semibold text-cyan-400 mb-2">Areas of Interest:</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.interests.map((interest) => (
                        <span 
                          key={interest}
                          className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium border border-dark-600"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Honors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Awards & Honors
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="bg-dark-800/50 border-dark-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                      <div className="text-cyan-400 text-sm font-medium">{award.year}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Activities */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Teaching Assistantships */}
          <Card className="bg-dark-800/50 border-dark-700">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Teaching Assistantships
              </h3>
              <ul className="space-y-2">
                {teachingAssistant.map((course, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Selected Courses */}
          <Card className="bg-dark-800/50 border-dark-700">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Selected Courses
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {courses.map((course, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block mr-2"></span>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
