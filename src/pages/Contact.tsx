import React from 'react';
import { HiEnvelope, HiOutlineChatBubbleLeftRight, HiOutlineShieldCheck } from 'react-icons/hi2';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Start a Conversation</h1>
          <p className="text-gray-400">Have a project in mind? Let's build something extraordinary together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <HiEnvelope className="text-primary" />
                Contact Details
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400">
                  <span className="text-white block font-medium">Direct Email</span>
                  hello@hamzashahid.com
                </p>
                <p className="text-gray-400">
                  <span className="text-white block font-medium">Location</span>
                  Faisalabad, Pakistan / Remote
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                <HiOutlineShieldCheck className="text-secondary" />
                Secure & Encrypted
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                All communications are handled through secure end-to-end encrypted channels to ensure your project details remain confidential.
              </p>
            </div>

            <div className="flex items-center gap-4 text-gray-500 text-sm italic">
              <HiOutlineChatBubbleLeftRight size={24} />
              <span>Typical response time: &lt; 24 hours</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl shadow-xl">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* Replace with your Access Key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/20"
              >
                Dispatch Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
