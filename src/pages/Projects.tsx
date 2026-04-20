import React from 'react';

interface Project {
  year: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      year: '2023 – Present',
      title: 'Senior Full Stack AI Engineer',
      company: 'Freelance / Consultant',
      desc: 'Architecting and implementing AI-driven web ecosystems for international clients, focusing on LLM integration and scalable cloud architectures.',
      tags: ['React', 'Node.js', 'LLMs', 'AWS', 'TypeScript'],
    },
    {
      year: '2021 – 2023',
      title: 'Founder & CEO',
      company: 'Hamzi Corp',
      desc: 'Led a team of developers to deliver high-performance web and mobile applications, establishing core engineering standards and growth strategies.',
      tags: ['Management', 'Architecture', 'Business Strategy'],
    },
    {
      year: '2019 – 2021',
      title: 'Lead Software Developer',
      company: 'Tech Solutions Inc.',
      desc: 'Directed the development of enterprise-level software solutions, specializing in distributed systems and real-time data processing.',
      tags: ['Next.js', 'Go', 'Kubernetes', 'PostgreSQL'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Execution Record</h1>
        <p className="text-gray-400 text-center mb-16">A chronological history of my professional journey and key projects.</p>

        <div className="space-y-12">
          {projects.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[159px] top-0 bottom-0 w-px bg-white/10" />
              
              <div className="flex flex-col md:flex-row md:items-start group">
                {/* Year */}
                <div className="md:w-40 md:text-right md:pr-12 mb-2 md:mb-0 pt-1">
                  <span className="text-sm font-mono text-primary font-bold">{item.year}</span>
                </div>

                {/* Content */}
                <div className="flex-grow md:pl-12 pb-12 border-l border-white/10 md:border-0 relative">
                  {/* Dot */}
                  <div className="absolute -left-[1px] md:left-[-5px] top-2 w-2 h-2 rounded-full bg-primary border-4 border-dark ring-1 ring-primary transition-all group-hover:scale-150" />
                  
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{item.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-white/10 px-2 py-1 rounded text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
