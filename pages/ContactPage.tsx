import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully. We will be in touch.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-revonza-accent/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Available for new projects</span>
           </div>
           {/* Maintaining old dull purple for "Say Hello" as implied by request, using text-revonza-accentOld */}
           <h1 className="text-6xl md:text-8xl font-bold text-revonza-text mb-6 tracking-tight">
             Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accentOld to-purple-400">Hello.</span>
           </h1>
           <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto font-light">
             We are ready to engineer your digital future. Tell us about your vision.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Contact Methods Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 animate-scale-in delay-100">
             
             {/* Email Card */}
             <div className="glass-panel p-8 rounded-[2rem] hover:border-revonza-accent/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-revonza-surface rounded-xl flex items-center justify-center text-revonza-text mb-6 group-hover:bg-revonza-accent group-hover:text-white group-hover:scale-110 transition-all">
                  <Mail size={24} />
                </div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Email Us</h3>
                <a href="mailto:hello@revonzastudio.com" className="text-2xl font-semibold text-revonza-text hover:text-revonza-accent transition-colors block break-words">
                  hello@revonzastudio.com
                </a>
             </div>

             {/* Phone Card */}
             <div className="glass-panel p-8 rounded-[2rem] hover:border-revonza-accent/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-revonza-surface rounded-xl flex items-center justify-center text-revonza-text mb-6 group-hover:bg-revonza-accent group-hover:text-white group-hover:scale-110 transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Call Us</h3>
                <a href="tel:+15551234567" className="text-2xl font-semibold text-revonza-text hover:text-revonza-accent transition-colors">
                  +1 (555) 123-4567
                </a>
             </div>


          </div>

          {/* Large Form Card */}
          <div className="lg:col-span-8 animate-scale-in delay-200">
             <div className="h-full glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border border-revonza-border">
                
                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-revonza-accent/10 to-transparent opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Full Name</label>
                        <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full bg-revonza-base/50 border border-revonza-border rounded-2xl px-6 py-4 text-revonza-text placeholder-gray-400 focus:outline-none focus:border-revonza-accent focus:bg-revonza-base focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="Your Name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Email Address</label>
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full bg-revonza-base/50 border border-revonza-border rounded-2xl px-6 py-4 text-revonza-text placeholder-gray-400 focus:outline-none focus:border-revonza-accent focus:bg-revonza-base focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="Your Email Address"
                        />
                      </div>
                   </div>

                   <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Interest</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-revonza-base/50 border border-revonza-border rounded-2xl px-6 py-4 text-revonza-text appearance-none cursor-pointer focus:outline-none focus:border-revonza-accent focus:bg-revonza-base transition-all duration-300"
                        >
                          <option value="" className="text-revonza-text bg-revonza-base">Select a topic...</option>
                          <option value="web" className="text-revonza-text bg-revonza-base">Website Development</option>
                          <option value="seo" className="text-revonza-text bg-revonza-base">SEO Optimization</option>
                          <option value="ai" className="text-revonza-text bg-revonza-base">AI Integration</option>
                          <option value="logo" className="text-revonza-text bg-revonza-base">Logo Design</option>
                          <option value="thumbnail" className="text-revonza-text bg-revonza-base">Thumbnail Design</option>
                          <option value="graphic" className="text-revonza-text bg-revonza-base">Graphic Design</option>
                          <option value="branding" className="text-revonza-text bg-revonza-base">Design & Branding</option>
                          <option value="maintenance" className="text-revonza-text bg-revonza-base">Maintenance & Modification</option>
                          <option value="other" className="text-revonza-text bg-revonza-base">Other</option>
                        </select>
                        <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                      </div>
                   </div>

                   <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Message</label>
                      <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         required
                         rows={4}
                         className="w-full bg-revonza-base/50 border border-revonza-border rounded-2xl px-6 py-4 text-revonza-text placeholder-gray-400 focus:outline-none focus:border-revonza-accent focus:bg-revonza-base focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 resize-none"
                         placeholder="How can we help?"
                      />
                   </div>

                   <button 
                      type="submit" 
                      className="w-full py-5 bg-revonza-text text-revonza-base rounded-2xl font-bold text-lg uppercase tracking-wider hover:bg-revonza-accent hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                   >
                      Send Message <Send size={20} />
                   </button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;