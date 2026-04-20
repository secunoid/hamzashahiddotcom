import React from 'react';
import Hero from '../components/Hero';
import { HiOutlineLightBulb, HiOutlineCube, HiOutlineShieldCheck } from 'react-icons/hi2';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Integration',
      desc: 'Seamlessly bridging LLMs and neural models into existing production architectures with high reliability.',
      icon: <HiOutlineLightBulb size={32} className="text-primary" />,
    },
    {
      title: 'Scalable Architectures',
      desc: 'Designing and building distributed systems that can handle millions of requests with low latency.',
      icon: <HiOutlineCube size={32} className="text-primary" />,
    },
    {
      title: 'Secure Full Stack',
      desc: 'End-to-end development focusing on security, performance, and best-in-class user experiences.',
      icon: <HiOutlineShieldCheck size={32} className="text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Strategic Engineering</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Providing battle-tested solutions for complex digital challenges.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default Home;
