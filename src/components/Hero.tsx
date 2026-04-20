import React from 'react';
import { HiCodeBracket, HiCommandLine, HiCpuChip } from 'react-icons/hi2';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-gray-500">hamza_shahid — bash — 80x24</div>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-8 font-mono space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-primary mt-1">~</span>
                <div className="space-y-2">
                  <p className="text-gray-400">guest$ <span className="text-white">npm install intelligent-systems</span></p>
                  <p className="text-secondary">✓ System core initialized.</p>
                  <p className="text-secondary">✓ Neural models synchronized.</p>
                  <p className="text-secondary">✓ Workspace ready.</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                  Crafting <span className="text-primary italic">Scalable</span> AI Ecosystems
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                  Senior Software Engineer specializing in bridging the gap between neural models and production-grade architectures.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-8">
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <HiCpuChip className="text-primary" />
                  <span className="text-sm text-gray-300">AI/ML Architecture</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <HiCodeBracket className="text-primary" />
                  <span className="text-sm text-gray-300">Full Stack Engineering</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                  <HiCommandLine className="text-primary" />
                  <span className="text-sm text-gray-300">Distributed Systems</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">96+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Done</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Global Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
