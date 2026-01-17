import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Quote, Cpu, ShieldCheck, TrendingUp, Lightbulb, Search, Code, Rocket, Star, ChevronRight, MonitorSmartphone, ScanSearch, BrainCircuit, Fingerprint, Layers, DatabaseZap, Paintbrush, Palette, Wrench } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'MonitorSmartphone': MonitorSmartphone,
      'ScanSearch': ScanSearch,
      'BrainCircuit': BrainCircuit,
      'Fingerprint': Fingerprint,
      'Layers': Layers,
      'DatabaseZap': DatabaseZap,
      'Paintbrush': Paintbrush,
      'Palette': Palette,
      'Wrench': Wrench,
    };
    return iconMap[iconName] || Zap;
  };

  const workflowSteps = [
    { id: 1, title: 'Discover', description: 'Strategy & Analysis', icon: Search, detail: 'We dive deep into your business goals, target audience, and market landscape to build a solid foundation.' },
    { id: 2, title: 'Design', description: 'UI/UX & Branding', icon: Lightbulb, detail: 'We craft intuitive, stunning designs that align with your brand identity and enhance user engagement.' },
    { id: 3, title: 'Develop', description: 'Code & Integration', icon: Code, detail: 'Our engineers build robust, scalable solutions using the latest technologies to bring the designs to life.' },
    { id: 4, title: 'Launch', description: 'Deploy & Scale', icon: Rocket, detail: 'We ensure a smooth launch and provide ongoing support to help your digital product grow and evolve.' },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
        {/* Improved Abstract Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-revonza-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <div className="inline-block mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-revonza-surface/50 border border-revonza-border backdrop-blur-md hover:border-revonza-accent/50 transition-colors cursor-default shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-revonza-textMuted uppercase tracking-widest">Accepting New Clients</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-revonza-text leading-[1.05] tracking-tight mb-8 animate-fade-in-up delay-100 drop-shadow-2xl">
            Design. Build. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accentOld via-purple-400 to-pink-500">Dominate.</span>
          </h1>

          <p className="text-xl md:text-2xl text-revonza-textMuted max-w-3xl mx-auto mb-14 font-light leading-relaxed animate-fade-in-up delay-200">
            Revonza Studio bridges the gap between creative imagination and technical engineering. We build digital ecosystems that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Link to="/contact" className="group relative px-10 py-5 bg-revonza-accent rounded-full text-white font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]">
               <span className="relative z-10 flex items-center gap-3">Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/projects" className="px-10 py-5 rounded-full text-revonza-text border border-revonza-border hover:bg-revonza-surface transition-all font-bold backdrop-blur-sm">
              View Work
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
          <div className="w-6 h-10 border-2 border-revonza-text/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-revonza-text rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Horizontal Accordion */}
      <section className="py-32 bg-revonza-base relative transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
            <div>
              <h2 className="text-5xl font-bold text-revonza-text mb-4">Our Expertise</h2>
              <p className="text-revonza-textMuted text-lg">Mastery across the digital spectrum.</p>
            </div>
            <Link to="/services" className="text-revonza-accent hover:text-revonza-text transition-colors flex items-center gap-2 mt-6 md:mt-0 font-semibold group">
              View all services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="group relative flex-1 hover:flex-[2.5] transition-all duration-500 ease-out glass-panel rounded-[2rem] overflow-hidden border border-revonza-border hover:border-revonza-accent cursor-pointer flex flex-col justify-end p-8"
              >
                 {/* Background Number */}
                 <span className="absolute top-4 right-6 text-8xl font-black text-revonza-text/5 group-hover:text-revonza-accent/10 transition-colors duration-500 select-none">
                   0{index + 1}
                 </span>

                 {/* Icon Background Glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-revonza-accent/5 rounded-full blur-3xl group-hover:bg-revonza-accent/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>

                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-revonza-surface/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-revonza-border group-hover:bg-revonza-accent group-hover:text-white transition-all duration-500">
                       {React.createElement(getServiceIcon(service.icon), { 
                         className: "text-revonza-accent group-hover:text-white transition-colors", 
                         size: 32 
                       })} 
                    </div>
                    <h3 className="text-3xl font-bold text-revonza-text mb-4 group-hover:text-revonza-accent transition-colors whitespace-nowrap">{service.title}</h3>
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                       <p className="text-revonza-textMuted leading-relaxed text-base">{service.description}</p>
                       <div className="mt-6 flex items-center gap-2 text-revonza-accent font-bold text-sm uppercase tracking-wider">
                          Learn More <ChevronRight size={16} />
                       </div>
                    </div>
                 </div>
                 
                 {/* Mobile Fallback */}
                 <div className="lg:hidden mt-4">
                    <p className="text-revonza-textMuted leading-relaxed text-base">{service.description}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPLACED SECTION: Core Advantages (formerly Bento Grid) */}
      <section className="py-32 bg-revonza-surface relative overflow-hidden transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
             <h2 className="text-4xl md:text-5xl font-bold text-revonza-text mb-6">The Revonza Advantage</h2>
             <p className="text-revonza-textMuted text-lg max-w-2xl mx-auto">Built on a foundation of data, security, and intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1: Data */}
             <div className="group relative h-96 bg-revonza-base rounded-[2rem] border border-revonza-border overflow-hidden hover:border-revonza-accent/50 transition-all duration-500 animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-revonza-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 h-full flex flex-col relative z-10">
                   <div className="mb-auto">
                      <div className="w-14 h-14 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center mb-6 text-revonza-accent">
                         <TrendingUp size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-revonza-text mb-3">Data-Driven</h3>
                      <p className="text-revonza-textMuted text-sm leading-relaxed">
                        Decisions backed by rigorous analytics. We optimize for conversion, retention, and scalable growth.
                      </p>
                   </div>
                   
                   {/* Visual: Animated Bars */}
                   <div className="h-32 flex items-end gap-2 mt-6">
                      {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                         <div 
                            key={i} 
                            className="flex-1 bg-revonza-accent/20 rounded-t-sm group-hover:bg-revonza-accent transition-colors duration-500 relative overflow-hidden"
                            style={{ height: `${h}%` }}
                         >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100"></div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Card 2: Security */}
             <div className="group relative h-96 bg-revonza-base rounded-[2rem] border border-revonza-border overflow-hidden hover:border-revonza-accent/50 transition-all duration-500 animate-scale-in delay-100">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 h-full flex flex-col relative z-10">
                   <div className="mb-auto">
                      <div className="w-14 h-14 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center mb-6 text-green-500">
                         <ShieldCheck size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-revonza-text mb-3">Fortified Security</h3>
                      <p className="text-revonza-textMuted text-sm leading-relaxed">
                        Bank-grade encryption protocols and compliance standards protecting your digital assets 24/7.
                      </p>
                   </div>
                   
                   {/* Visual: Scanning Grid */}
                   <div className="h-32 mt-6 relative border border-revonza-border/30 rounded-lg overflow-hidden bg-revonza-surface/50 group-hover:border-green-500/30 transition-colors">
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
                         {Array.from({length: 24}).map((_, i) => (
                            <div key={i} className="bg-green-500/30 rounded-[1px]"></div>
                         ))}
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)] animate-scan opacity-0 group-hover:opacity-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <ShieldCheck className="text-green-500/20 w-16 h-16 group-hover:text-green-500/40 transition-colors duration-500" />
                      </div>
                   </div>
                </div>
             </div>

             {/* Card 3: AI */}
             <div className="group relative h-96 bg-revonza-base rounded-[2rem] border border-revonza-border overflow-hidden hover:border-revonza-accent/50 transition-all duration-500 animate-scale-in delay-200">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 h-full flex flex-col relative z-10">
                   <div className="mb-auto">
                      <div className="w-14 h-14 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center mb-6 text-blue-500">
                         <Cpu size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-revonza-text mb-3">AI Native</h3>
                      <p className="text-revonza-textMuted text-sm leading-relaxed">
                        Deep integration of artificial intelligence for automation, predictive analytics, and personalized user experiences.
                      </p>
                   </div>
                   
                   {/* Visual: Neural Nodes */}
                   <div className="h-32 mt-6 relative flex items-center justify-center">
                      <div className="relative w-24 h-24">
                         <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                         <div className="absolute inset-2 border-2 border-blue-500/40 rounded-full group-hover:scale-90 transition-transform duration-700 border-dashed animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse"></div>
                         </div>
                         {/* Orbiting dots */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping delay-300"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Process Section - Vertical Zig Zag Timeline */}
      <section className="py-32 relative bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-revonza-text">The Process</h2>
            <p className="text-revonza-textMuted mt-4 text-lg">From concept to reality, orchestrated perfectly.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-revonza-accent to-transparent -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-24">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center mb-8 md:mb-0 group`}>
                     <div className="inline-block p-6 glass-panel rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                        <h3 className="text-2xl font-bold text-revonza-text mb-2 group-hover:text-revonza-accent transition-colors">{step.title}</h3>
                        <p className="text-sm font-bold text-revonza-accent uppercase tracking-widest mb-3">{step.description}</p>
                        <p className="text-revonza-textMuted">{step.detail}</p>
                     </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-revonza-base border-4 border-revonza-surface shadow-[0_0_20px_rgba(139,92,246,0.3)] z-10 hidden md:flex group">
                     <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-revonza-accent to-purple-600 text-white font-bold text-xl group-hover:scale-90 transition-transform duration-300">
                        {step.id}
                     </div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>

                  {/* Mobile Node (Visible only on mobile) */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-revonza-accent text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
                    {step.id}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced Cards */}
      <section className="py-32 bg-gradient-to-b from-transparent to-revonza-surface transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-revonza-text text-center mb-20">Client Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="glass-panel p-10 rounded-[2rem] relative animate-fade-in-up hover:-translate-y-3 transition-transform duration-500 border border-revonza-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-1.5 mb-8 text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-revonza-textMuted leading-relaxed mb-10 text-lg italic opacity-90">"{testimonial.content}"</p>
                <div className="flex items-center gap-5 border-t border-revonza-border pt-8">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full ring-2 ring-revonza-accent/50 object-cover"
                  />
                  <div>
                    <h4 className="text-revonza-text font-bold text-base">{testimonial.name}</h4>
                    <p className="text-xs text-revonza-accent uppercase tracking-wider font-bold">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient refinement */}
      <section className="py-40 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-radial from-revonza-accent/10 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-revonza-text mb-10 tracking-tighter drop-shadow-xl">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-pink-500">Scale?</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 px-14 py-6 bg-revonza-text text-revonza-base rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;