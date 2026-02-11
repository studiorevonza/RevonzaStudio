import React, { useState } from 'react';
import { Quote, Users, Globe, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <SEO
        pageSEO={{
          title: 'About Revonza Studio - Leading Web Development Agency in India',
          description: 'Learn about Revonza Studio, the leading web development and SEO agency in India. Our mission is to engineer digital excellence by combining art and algorithms for superior results.',
          keywords: [
            'about Revonza Studio',
            'web development company India',
            'digital agency India',
            'web development team',
            'SEO company India',
            'digital marketing agency',
            'web design company',
            'software development company',
            'IT services India',
            'tech agency India'
          ],
          canonical: 'https://revonzastudio.com/about',
          ogImage: 'https://revonzastudio.com/og-about.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About Revonza Studio',
            'description': 'Learn about Revonza Studio, the leading web development and SEO agency in India. Our mission is to engineer digital excellence by combining art and algorithms for superior results.',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [{
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://revonzastudio.com/'
              }, {
                '@type': 'ListItem',
                'position': 2,
                'name': 'About',
                'item': 'https://revonzastudio.com/about'
              }]
            }
          }
        }}
      />
    <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="animate-slide-in-left">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-revonza-accent"></div>
                <span className="text-revonza-accent font-bold tracking-[0.25em] uppercase text-sm">Our DNA</span>
             </div>
             
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-revonza-text mb-8 leading-[0.9] tracking-tighter">
               We Are <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-text via-purple-300 to-revonza-accent">Builders.</span>
             </h1>
             
             <div className="h-1.5 w-24 bg-gradient-to-r from-revonza-accent to-transparent mb-12 rounded-full opacity-80"></div>
             
             <p className="text-xl text-revonza-textMuted font-light leading-relaxed max-w-lg border-l-2 border-revonza-border pl-8 ml-2">
               Revonza Studio was born from the convergence of art and algorithm. We exist to prove that technical robustness and aesthetic beauty are not mutually exclusive.
             </p>
          </div>
          
          <div className="relative animate-scale-in delay-200 flex justify-center lg:justify-end mt-12 lg:mt-0">
             <div className="rounded-[2.5rem] overflow-hidden relative z-10 w-full max-w-[800px] h-auto group">
                <div className="absolute inset-0 bg-revonza-accent/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-all duration-700"></div>
                
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-revonza-surface to-revonza-base animate-pulse rounded-[2.5rem] flex items-center justify-center z-10">
                    <div className="text-revonza-textMuted text-lg">Loading...</div>
                  </div>
                )}
                
                <picture>
                  <source 
                    srcSet="/Aboutimage.webp" 
                    type="image/webp" 
                  />
                  <img 
                    src="/Aboutimage.png" 
                    alt="Team collaboration" 
                    loading="lazy"
                    width="800"
                    height="600"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-auto object-contain transition-all duration-1000 ${imageLoaded ? 'grayscale group-hover:grayscale-0 transform group-hover:scale-105' : 'opacity-0'}`}
                  />
                </picture>
             </div>
             {/* Decorative Elements */}
             </div>
        </div>

        {/* Stats - Refined Glass Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
           {[
             { val: '2+', label: 'Years Experience', icon: Clock },
             { val: '10+', label: 'Projects Shipped', icon: Award },
             { val: '5', label: 'Global Partners', icon: Globe },
             { val: '24/7', label: 'Support', icon: Users }
           ].map((stat, i) => (
             <div 
                key={i} 
                className={`glass-panel p-8 rounded-[2rem] text-center animate-fade-in-up hover:bg-revonza-surface transition-all duration-300 hover:-translate-y-2 group`} 
                style={{ animationDelay: `${i * 100}ms` }}
             >
                <div className="mb-4 flex justify-center">
                    <stat.icon className="text-revonza-textMuted group-hover:text-revonza-accent transition-colors duration-300" size={28} strokeWidth={1.5} />
                </div>
                <span className="text-4xl md:text-5xl font-bold text-revonza-text block mb-2 tracking-tight">{stat.val}</span>
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold group-hover:text-revonza-text transition-colors">{stat.label}</span>
             </div>
           ))}
        </div>

        {/* Philosophy - Enclosed Layout */}
        <div className="relative animate-fade-in-up delay-300">
           <div className="absolute inset-0 bg-gradient-to-r from-revonza-accent/10 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
           <div className="glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
               {/* Background detail */}
               <Quote className="absolute top-12 left-12 text-revonza-text/5 w-32 h-32 -rotate-12 transform -translate-x-1/2 -translate-y-1/2" />
               <Quote className="absolute bottom-12 right-12 text-revonza-text/5 w-32 h-32 rotate-12 scale-x-[-1] transform translate-x-1/2 translate-y-1/2" />
               
               <h2 className="text-sm font-bold text-revonza-accent uppercase tracking-[0.3em] mb-12 relative z-10">Our Philosophy</h2>
               <p className="text-3xl md:text-5xl text-revonza-text font-medium leading-tight relative z-10 max-w-5xl mx-auto drop-shadow-2xl">
                 "We don't just build websites; we engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">digital ecosystems</span>. Every project is an opportunity to push the boundaries of what's possible on the web."
               </p>
           </div>
        </div>

        {/* Testimonials - Indian Reviews */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-revonza-text mb-20">What Our Indian Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            
            
            <div className="glass-panel p-8 rounded-[2rem] transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="text-revonza-accent" size={32} />
              </div>
              <p className="text-lg text-revonza-text mb-6 italic">
                "Outstanding work! The team delivered our e-commerce platform ahead of schedule with exceptional quality. The customer experience has improved dramatically."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-revonza-text">Rajesh Sharma</h4>
                  </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-[2rem] transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="text-revonza-accent" size={32} />
              </div>
              <p className="text-lg text-revonza-text mb-6 italic">
                "The mobile app they developed for our startup has received excellent user feedback. Their attention to detail and technical expertise is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  PK
                </div>
                <div>
                  <h4 className="font-bold text-revonza-text">Priya Khanna</h4>
                  </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-[2rem] transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="text-revonza-accent" size={32} />
              </div>
              <p className="text-lg text-revonza-text mb-6 italic">
                "Their SEO expertise helped our online business grow 3x in just 6 months. The ROI has been incredible. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  AV
                </div>
                <div>
                  <h4 className="font-bold text-revonza-text">Anil Verma</h4>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      </>
    );
};

export default AboutPage;