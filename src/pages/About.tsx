import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Architect</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Philosophy</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe in building software that is not just functional, but resilient and inherently scalable. 
              My approach focuses on clean code, decoupled architectures, and the strategic integration of 
              artificial intelligence to solve real-world problems.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-400 text-sm">LLM Integration, RAG Systems, Prompt Engineering, NLP.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Frontend Engineering</h3>
                <p className="text-gray-400 text-sm">React, Next.js, Tailwind CSS, TypeScript.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Backend & Cloud</h3>
                <p className="text-gray-400 text-sm">Node.js, PostgreSQL, MongoDB, AWS, Vercel.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">System Design</h3>
                <p className="text-gray-400 text-sm">Microservices, RESTful APIs, Real-time Systems.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Based in Faisalabad, Pakistan, I operate globally to help startups and established companies 
              navigate the rapidly evolving technological landscape. My goal is to deliver production-ready 
              solutions that stand the test of time and scale effortlessly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
