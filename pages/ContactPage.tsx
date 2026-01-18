import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    priority: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a comprehensive message with all form data
    const fullMessage = `*New Inquiry from:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company || 'N/A'}%0A*Service Interested:* ${formData.service}%0A*Budget Range:* ${formData.budget || 'Not specified'}%0A*Timeline:* ${formData.timeline || 'Flexible'}%0A*Priority:* ${formData.priority || 'Standard'}%0A*Message:*%0A${encodeURIComponent(formData.message)}%0A%0A_Sent via Revonza Studio Contact Form_`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/919714407181?text=${fullMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation message
    alert(`Thank you for your inquiry, ${formData.name}! Your message has been sent to our WhatsApp. We'll contact you soon.`);
    
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      service: '', 
      budget: '', 
      timeline: '', 
      priority: '',
      message: '' 
    });
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
                <a href="mailto:studiorevonza@gmail.com" className="text-2xl font-semibold text-revonza-text hover:text-revonza-accent transition-colors block break-words">
                  studiorevonza@gmail.com
                </a>
             </div>

             {/* Phone Card */}
             <div className="glass-panel p-8 rounded-[2rem] hover:border-revonza-accent/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-revonza-surface rounded-xl flex items-center justify-center text-revonza-text mb-6 group-hover:bg-revonza-accent group-hover:text-white group-hover:scale-110 transition-all">
                  <Phone size={24} />
                </div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Call Us</h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919714407181" className="text-2xl font-semibold text-revonza-text hover:text-revonza-accent transition-colors">
                    +91 9714407181
                  </a>
                  <a href="tel:+918851619647" className="text-2xl font-semibold text-revonza-text hover:text-revonza-accent transition-colors">
                    +91 8851619647
                  </a>
                </div>
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
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Full Name *</label>
                        <input 
                           type="text" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current placeholder-revonza-textMuted focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="Your Full Name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Email Address *</label>
                        <input 
                           type="email" 
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current placeholder-revonza-textMuted focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="your@email.com"
                        />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Phone Number *</label>
                        <input 
                           type="tel" 
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           required
                           className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current placeholder-revonza-textMuted focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Company/Organization</label>
                        <input 
                           type="text" 
                           name="company"
                           value={formData.company}
                           onChange={handleChange}
                           className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current placeholder-revonza-textMuted focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                           placeholder="Your Company Name"
                        />
                      </div>
                   </div>

                   <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Service Interest *</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current appearance-none cursor-pointer focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface transition-all duration-300"
                        >
                          <option value="" className="text-revonza-text bg-revonza-base">Select Service...</option>
                          <option value="web-development" className="text-revonza-text bg-revonza-base">Website Development</option>
                          <option value="web-design" className="text-revonza-text bg-revonza-base">Web Design & UI/UX</option>
                          <option value="seo" className="text-revonza-text bg-revonza-base">SEO Optimization</option>
                          <option value="ai-integration" className="text-revonza-text bg-revonza-base">AI Integration</option>
                          <option value="logo-design" className="text-revonza-text bg-revonza-base">Logo Design</option>
                          <option value="branding" className="text-revonza-text bg-revonza-base">Brand Identity & Design</option>
                          <option value="graphic-design" className="text-revonza-text bg-revonza-base">Graphic Design</option>
                          <option value="thumbnail-design" className="text-revonza-text bg-revonza-base">Thumbnail Design</option>
                          <option value="maintenance" className="text-revonza-text bg-revonza-base">Website Maintenance</option>
                          <option value="consultation" className="text-revonza-text bg-revonza-base">Consultation/Strategy</option>
                          <option value="other" className="text-revonza-text bg-revonza-base">Other Services</option>
                        </select>
                        <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Budget Range</label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current appearance-none cursor-pointer focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface transition-all duration-300"
                          >
                            <option value="" className="text-revonza-text bg-revonza-base">Select Budget Range</option>
                            <option value="5000-20000" className="text-revonza-text bg-revonza-base">₹5,000 - ₹20,000</option>
                            <option value="20000-50000" className="text-revonza-text bg-revonza-base">₹20,000 - ₹50,000</option>
                            <option value="50000-100000" className="text-revonza-text bg-revonza-base">₹50,000 - ₹1,00,000</option>
                            <option value="100000+" className="text-revonza-text bg-revonza-base">₹1,00,000+</option>
                            <option value="not-sure" className="text-revonza-text bg-revonza-base">Not Sure Yet</option>
                          </select>
                          <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Timeline</label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current appearance-none cursor-pointer focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface transition-all duration-300"
                          >
                            <option value="" className="text-revonza-text bg-revonza-base">Select Timeline</option>
                            <option value="urgent" className="text-revonza-text bg-revonza-base">Urgent (1-2 weeks)</option>
                            <option value="short" className="text-revonza-text bg-revonza-base">Short Term (1-3 months)</option>
                            <option value="medium" className="text-revonza-text bg-revonza-base">Medium Term (3-6 months)</option>
                            <option value="long" className="text-revonza-text bg-revonza-base">Long Term (6+ months)</option>
                            <option value="flexible" className="text-revonza-text bg-revonza-base">Flexible Timeline</option>
                          </select>
                          <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Priority</label>
                        <div className="relative">
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current appearance-none cursor-pointer focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface transition-all duration-300"
                          >
                            <option value="" className="text-revonza-text bg-revonza-base">Select Priority</option>
                            <option value="low" className="text-revonza-text bg-revonza-base">Low Priority</option>
                            <option value="standard" className="text-revonza-text bg-revonza-base">Standard Priority</option>
                            <option value="high" className="text-revonza-text bg-revonza-base">High Priority</option>
                            <option value="urgent" className="text-revonza-text bg-revonza-base">Urgent Priority</option>
                          </select>
                          <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 rotate-90 pointer-events-none" size={18} />
                        </div>
                      </div>
                   </div>
                   
                   <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-4">Project Details *</label>
                      <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         required
                         rows={5}
                         className="w-full bg-revonza-surface/50 border border-revonza-border rounded-2xl px-6 py-4 text-current placeholder-revonza-textMuted focus:outline-none focus:border-revonza-accent focus:bg-revonza-surface focus:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 resize-none"
                         placeholder="Please share details about your project, requirements, goals, and any specific features you're looking for..."
                      />
                   </div>
                   
                   <div className="text-xs text-revonza-textMuted italic">
                     * Required fields. We'll contact you within 24 hours to discuss your project.
                   </div>

                   <button 
                      type="submit" 
                      className="w-full py-5 bg-revonza-text text-revonza-base rounded-2xl font-bold text-lg uppercase tracking-wider hover:bg-revonza-accent hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
                   >
                      Submit Inquiry <Send size={20} />
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