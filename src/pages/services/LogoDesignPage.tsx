import React from 'react';
import { Link } from 'react-router-dom';
import { Fingerprint, Palette, Heart, Star, Brush, Eye } from 'lucide-react';
import SEO from '../../components/SEO';

const LogoDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Professional Logo Design Services | Brand Identity Design | Revonza Studio',
          description: 'Professional logo design services by Revonza Studio. We craft memorable visual identities that resonate deeply with your audience and stand out in the marketplace.',
          keywords: [
            'logo design',
            'brand identity design',
            'professional logo design',
            'custom logo design',
            'visual identity',
            'logo design services'
          ],
          canonical: 'https://revonzastudio.com/services/logo-design',
          ogImage: 'https://revonzastudio.com/og-logo-design.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Visual Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Design</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Distill your brand's essence into a timeless mark. We craft memorable visual identities that resonate deeply with your audience, ensuring your brand stands out in a crowded marketplace.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Memorable Mark</h3>
            <p className="text-revonza-textMuted">
              Designs that stick in your customers' minds for years to come.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Strategic Vision</h3>
            <p className="text-revonza-textMuted">
              Aligns with your brand strategy and target audience psychology.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Timeless Appeal</h3>
            <p className="text-revonza-textMuted">
              Designed to remain relevant and effective for decades to come.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Your Brand's Visual Foundation</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                A great logo is more than just a pretty picture—it's the cornerstone of your entire brand identity. Our logo design process goes beyond aesthetics to create marks that embody your brand's personality and connect with your audience on a deeper level.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Research-based design approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Multiple concept iterations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Scalable vector files</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Style guide and brand guidelines</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Fingerprint size={32} className="text-white" />
                      </div>
                      <h3 className="font-bold text-revonza-text text-lg">YOUR BRAND</h3>
                      <p className="text-sm text-revonza-textMuted">Logo Concept</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Define Your Brand?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's create a logo that perfectly captures your brand's essence and resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/logo-design/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
              View Projects
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              Get Started Today
            </Link>
            <Link to="/pricing" className="px-8 py-4 rounded-full text-revonza-text border border-revonza-border hover:bg-revonza-surface transition-all font-bold">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesignPage;