import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Quote, Cpu, ShieldCheck, TrendingUp, Lightbulb, Search, Code, Rocket, Star, ChevronRight, MonitorSmartphone, ScanSearch, BrainCircuit, Fingerprint, Layers, DatabaseZap, Paintbrush, Palette, Wrench, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string, alt: string } | null>(null);

  const carouselImages = [
    { src: '/feedback/cl1.png', alt: 'Client Feedback 1' },
    { src: '/feedback/cl2.png', alt: 'Client Feedback 2' },
    { src: '/feedback/cl3.png', alt: 'Client Feedback 3' },
    { src: '/feedback/cl4.png', alt: 'Client Feedback 4' },
    { src: '/feedback/cl5.png', alt: 'Client Feedback 5' },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <>
      <SEO
        pageSEO={{
          title: 'Web Development & SEO Agency India | Custom Website Design Services',
          description: 'Top web development & SEO agency in India. Expert custom website design, AI integration, digital marketing & branding services. Boost your online presence today!',
          keywords: [
            'web development agency India',
            'web design services',
            'SEO company India',
            'custom website development',
            'AI integration services',
            'digital marketing agency',
            'logo design services',
            'branding agency',
            'React development',
            'full stack development',
            'e-commerce development',
            'mobile app development',
            'SEO optimization services',
            'digital transformation',
            'web application development',
            'UI UX design',
            'website maintenance services',
            'online presence solutions',
            'business website development',
            'top web developers',
            'professional web designers',
            'affordable website design',
            'enterprise web solutions'
          ],
          canonical: 'https://revonzastudio.com/',
          ogImage: 'https://revonzastudio.com/og-home.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            'name': 'Revonza Studio',
            'description': 'Leading web development & SEO agency in India. Expert custom website design, AI integration, digital marketing & branding services.',
            'serviceType': [
              'Web Development',
              'SEO Services',
              'AI Integration',
              'Digital Marketing',
              'Branding Agency',
              'Custom Website Design',
              'E-commerce Development',
              'Mobile App Development'
            ],
            'areaServed': 'India',
            'availableLanguage': 'en',
            'award': [
              'Top Web Development Agency India',
              'Best SEO Services Provider',
              'Leading Digital Marketing Agency'
            ],
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'reviewCount': '50+'
            },
            'makesOffer': [
              'Custom Website Development',
              'SEO Optimization',
              'AI Integration',
              'Digital Marketing',
              'Brand Identity Design',
              'E-commerce Solutions'
            ]
          }
        }}
      />
      <div className="flex flex-col w-full overflow-hidden">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
          {/* Improved Abstract Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-revonza-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-4 z-10 text-center relative">
            <div className="inline-block mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-revonza-surface/50 border border-revonza-border backdrop-blur-md hover:border-revonza-accent/50 transition-colors shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-revonza-textMuted uppercase tracking-widest">Accepting New Clients</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-revonza-text leading-[1.05] tracking-tight mb-8 animate-fade-in-up delay-100 drop-shadow-2xl">
              Web Development<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accentOld via-purple-400 to-pink-500">& AI Solutions</span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal">for Modern Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-revonza-textMuted max-w-3xl mx-auto mb-14 font-light leading-relaxed animate-fade-in-up delay-200">
              Revonza Studio offers affordable web development, SEO services for startups, and AI-powered digital solutions. Build faster. Rank smarter. Perfect for small business website development and branding agency needs.
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


        </section>

        {/* Our Expertise Section - Horizontal Accordion */}
        <section className="py-32 bg-revonza-base relative transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
              <div>
                <h2 className="text-5xl font-bold text-revonza-text mb-4">Web Development & SEO Studio Services</h2>
                <p className="text-revonza-textMuted text-lg">Mastery across web development, SEO optimization, and AI integration for startups and small businesses.</p>
              </div>
              <Link to="/services" className="text-revonza-accent hover:text-revonza-text transition-colors flex items-center gap-2 mt-6 md:mt-0 font-semibold group">
                View all services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
              {featuredServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className="group relative flex-1 hover:flex-[2.5] transition-all duration-500 ease-out glass-panel rounded-[2rem] overflow-hidden border border-revonza-border hover:border-revonza-accent cursor-pointer flex flex-col justify-end p-8"
                >
                   {/* Service-Specific Animated Transparent Icons */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700">
                     {/* Large decorative icon in background */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-revonza-accent/20">
                       {service.id === 'website-development' && (
                         <MonitorSmartphone className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 rotate-12 group-hover:rotate-45" />
                       )}
                       {service.id === 'ai-integration' && (
                         <BrainCircuit className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 -rotate-12 group-hover:-rotate-45" />
                       )}
                       {service.id === 'logo-design' && (
                         <Fingerprint className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 rotate-6 group-hover:rotate-30" />
                       )}
                       {service.id === 'thumbnail-design' && (
                         <Layers className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 -rotate-6 group-hover:-rotate-30" />
                       )}
                       {service.id === 'product-launching' && (
                         <Rocket className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 rotate-3 group-hover:rotate-15" />
                       )}
                       {service.id === 'hosting-solutions' && (
                         <DatabaseZap className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 -rotate-3 group-hover:-rotate-15" />
                       )}
                       {service.id === 'graphic-design' && (
                         <Paintbrush className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 rotate-9 group-hover:rotate-36" />
                       )}
                       {service.id === 'design-branding' && (
                         <Palette className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 -rotate-9 group-hover:-rotate-36" />
                       )}
                       {service.id === 'maintenance-modification' && (
                         <Wrench className="w-32 h-32 scale-110 group-hover:scale-150 transition-transform duration-1000 rotate-4 group-hover:rotate-20" />
                       )}
                     </div>
                                 
                     {/* Secondary smaller icons for pattern effect */}
                     <div className="absolute top-1/4 left-1/4 text-revonza-accent/10">
                       {React.createElement(getServiceIcon(service.icon), { 
                         className: "w-16 h-16 scale-90 group-hover:scale-125 transition-transform duration-700 animate-pulse" 
                       })}
                     </div>
                     <div className="absolute bottom-1/4 right-1/4 text-revonza-accent/10">
                       {React.createElement(getServiceIcon(service.icon), { 
                         className: "w-16 h-16 scale-90 group-hover:scale-125 transition-transform duration-700 animate-pulse delay-300" 
                       })}
                     </div>
                     <div className="absolute top-3/4 left-3/4 text-revonza-accent/10">
                       {React.createElement(getServiceIcon(service.icon), { 
                         className: "w-12 h-12 scale-90 group-hover:scale-125 transition-transform duration-700 animate-pulse delay-700" 
                       })}
                     </div>
                   </div>
              
                  {/* Background Number */}
                  <span className="absolute top-4 right-6 text-8xl font-black text-revonza-text/5 group-hover:text-revonza-accent/10 transition-colors duration-500 select-none z-10">
                    0{index + 1}
                  </span>
              
                  {/* Icon Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-revonza-accent/5 rounded-full blur-3xl group-hover:bg-revonza-accent/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2 z-10"></div>

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
                      {Array.from({ length: 24 }).map((_, i) => (
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

        {/* Client Feedback Carousel */}
        <section className="py-32 bg-revonza-surface relative overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-revonza-text mb-4">Client Feedback</h2>
              <p className="text-revonza-textMuted text-lg max-w-2xl mx-auto">What our clients say about our services</p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {carouselImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                      <div className="aspect-video bg-transparent flex items-center justify-center p-4 md:p-8">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="max-h-[80vh] w-auto object-contain cursor-zoom-in hover:brightness-75 transition-all duration-300"
                          onClick={() => setZoomedImage(image)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-revonza-surface/80 backdrop-blur-md rounded-full p-3 text-revonza-text hover:bg-revonza-accent hover:text-white transition-all shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-revonza-surface/80 backdrop-blur-md rounded-full p-3 text-revonza-text hover:bg-revonza-accent hover:text-white transition-all shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRightIcon size={24} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-revonza-accent w-6' : 'bg-revonza-text/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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



        {/* Zoom Overlay */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white bg-revonza-accent rounded-full p-3 hover:bg-revonza-text transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedImage(null);
                }}
                aria-label="Close zoom"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;