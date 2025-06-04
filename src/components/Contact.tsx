
import { useState } from "react";
import { Mail, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:sepehrrezaee2002@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sepehrrezaee2002@gmail.com",
      href: "mailto:sepehrrezaee2002@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SepehrRezaee",
      href: "https://github.com/SepehrRezaee"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sepehr-rezaee",
      href: "https://linkedin.com/in/sepehr-rezaee"
    },
    {
      icon: ExternalLink,
      label: "Google Scholar",
      value: "Publications",
      href: "https://scholar.google.com/citations?user=kYl9IWkAAAAJ&hl=en"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-dark-800/50 border-dark-700">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form action="https://formspree.io/f/mrbkbqdp" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark-700 border-dark-600 text-white focus:border-cyan-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark-700 border-dark-600 text-white focus:border-cyan-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-dark-700 border-dark-600 text-white focus:border-cyan-500"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-dark-700 border-dark-600 text-white focus:border-cyan-500"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, collaborations, 
                or innovative projects in AI and machine learning. Whether you're looking 
                for technical expertise or want to explore research partnerships, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <Card 
                  key={index}
                  className="bg-dark-800/30 border-dark-700 hover:border-cyan-500/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="block p-6 group"
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-cyan-500/20 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors">
                        <link.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {link.label}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-dark-800/30 rounded-lg border border-dark-700">
              <h4 className="text-white font-semibold mb-3">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
