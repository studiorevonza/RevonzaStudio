import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Palette, Target, Award, Heart, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';

const DesignBrandingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Design & Branding Services | Brand Identity Development | Revonza Studio',
          description: 'Comprehensive design and branding services by Revonza Studio. We develop cohesive brand identities that resonate with your audience and establish lasting connections.',
          keywords: [
            'design and branding',
            'brand identity development',
            'brand strategy',
            'brand positioning',
            'brand guidelines',
            'cohesive branding'
          ],
          canonical: 'https://revonzastudio.com/services/design-branding',
          ogImage: 'https://revonzastudio.com/og-design-branding.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Brand Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Branding</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Forge unbreakable connections with your audience. We develop cohesive brand identities that resonate deeply, establishing trust and loyalty that transcends transactional relationships and creates lasting emotional bonds.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Emotional Connection</h3>
            <p className="text-revonza-textMuted">
              Brands that connect emotionally drive deeper loyalty and advocacy.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Strategic Positioning</h3>
            <p className="text-revonza-textMuted">
              Clear positioning that differentiates you from competitors.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Premium Perception</h3>
            <p className="text-revonza-textMuted">
              Elevate your brand perception with sophisticated design.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Complete Brand Identity</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                Effective branding goes far beyond a logo—it's about crafting a comprehensive identity that permeates every touchpoint of your business. Our design and branding service creates cohesive experiences that build recognition, trust, and loyalty among your target audience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Brand strategy and positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Visual identity system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Brand guidelines and standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Brand application across all touchpoints</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-indigo-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BadgeCheck size={32} className="text-white" />
                      </div>
                      <h3 className="font-bold text-revonza-text text-lg mb-2">BRAND IDENTITY</h3>
                      <div className="flex justify-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-revonza-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <p className="text-sm text-revonza-textMuted">Cohesive brand experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's create a brand identity that connects with your audience on a deeper level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/design-branding/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default DesignBrandingPage;