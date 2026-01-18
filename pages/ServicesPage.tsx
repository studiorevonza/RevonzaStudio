import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        pageSEO={{
          title: 'Web Development & SEO Services | Affordable Branding Agency | Revonza Studio',
          description: 'Professional web development studio offering SEO services for startups, AI website development, and affordable branding agency solutions. Custom website development for small business growth.',
          keywords: [
            'web development services',
            'SEO optimization services',
            'AI integration services',
            'branding agency services',
            'custom website development',
            'digital marketing services',
            'startup web solutions',
            'small business website development'
          ],
          canonical: 'https://revonzastudio.com/services',
          ogImage: 'https://revonzastudio.com/og-services.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'name': 'Web Development & SEO Services',
            'itemListElement': SERVICES.map((service, index) => ({
              '@type': 'Service',
              'position': index + 1,
              'name': service.title,
              'description': service.description
            }))
          }
        }}
      />
      <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="mb-32 text-center max-w-4xl mx-auto animate-fade-in-up">
            <span className="text-revonza-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Capabilities</span>
            <h1 className="text-4xl md:text-6xl font-bold text-revonza-text mb-6 leading-tight">Professional Web Development & Design Services</h1>
            <p className="text-xl text-revonza-textMuted font-light max-w-3xl mx-auto leading-relaxed">
              Affordable branding agency services specializing in web development for small business and SEO optimization for startups. From custom website development to AI-powered digital solutions, we deliver results that drive growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              // @ts-ignore
              const IconComponent = LucideIcons[service.icon] || LucideIcons.HelpCircle;

              return (
                <div 
                  key={service.id} 
                  className="group glass-panel glass-panel-hover p-10 rounded-[2.5rem] flex flex-col justify-between h-full border border-revonza-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-24 h-24 bg-revonza-surface rounded-3xl flex items-center justify-center text-revonza-text group-hover:text-revonza-accent group-hover:scale-110 group-hover:bg-revonza-surface/80 transition-all duration-500 border border-revonza-border shadow-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                        <IconComponent size={44} strokeWidth={1.25} />
                      </div>
                      <Link to={`/services/${service.id}`} className="w-12 h-12 rounded-full border border-revonza-border flex items-center justify-center text-gray-500 group-hover:bg-revonza-accent group-hover:border-revonza-accent group-hover:text-white transition-all transform group-hover:rotate-45 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                        <ArrowUpRight size={22} />
                      </Link>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-revonza-text mb-5 group-hover:text-revonza-accent transition-colors drop-shadow-sm">{service.title}</h3>
                    <p className="text-revonza-textMuted text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Solution Box */}
          <div className="mt-32 glass-panel rounded-[3rem] p-16 text-center relative overflow-hidden animate-scale-in delay-500 border border-revonza-border group hover:border-revonza-accent/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-revonza-accent/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 group-hover:bg-revonza-accent/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-revonza-text mb-6">Have a unique challenge?</h2>
              <p className="text-xl text-revonza-textMuted mb-12 font-light">We thrive on complexity. Let's discuss your specific requirements and build a custom roadmap tailored to your business goals.</p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-revonza-text text-revonza-base rounded-full font-bold text-lg hover:bg-revonza-accent hover:text-white hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;