import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Zap, Users, TrendingUp, Megaphone, Target } from 'lucide-react';
import SEO from '../../components/SEO';

const ProductLaunchingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Product Launching Services | Go-to-Market Strategy | Revonza Studio',
          description: 'Professional product launching services by Revonza Studio. We orchestrate comprehensive launch strategies from market research to post-launch optimization.',
          keywords: [
            'product launching',
            'go-to-market strategy',
            'product launch services',
            'launch marketing',
            'product marketing',
            'market entry strategy'
          ],
          canonical: 'https://revonzastudio.com/services/product-launching',
          ogImage: 'https://revonzastudio.com/og-product-launching.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Launch Success</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Launching</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Transform your innovation into market dominance. We orchestrate comprehensive launch strategies—from market research to post-launch optimization—ensuring your product enters the market with maximum impact and sustainable momentum.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Market Entry</h3>
            <p className="text-revonza-textMuted">
              Strategic market entry with maximum impact and visibility.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Audience Targeting</h3>
            <p className="text-revonza-textMuted">
              Precise targeting to reach your ideal customer base.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Growth Trajectory</h3>
            <p className="text-revonza-textMuted">
              Sustainable growth patterns post-launch for long-term success.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Complete Launch Strategy</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                A successful product launch requires meticulous planning and flawless execution. Our comprehensive product launching service covers every aspect of bringing your innovation to market, from pre-launch buzz to post-launch optimization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Market research and competitive analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Pre-launch marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Launch day coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Post-launch performance monitoring</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-orange-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-revonza-border">
                        <span className="font-bold text-revonza-text">Launch Progress</span>
                        <span className="text-sm text-revonza-accent font-bold">85%</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-revonza-text">Research</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-revonza-text">Planning</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-revonza-text">Marketing</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-revonza-accent flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-sm text-revonza-text">Launch</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-revonza-base border border-revonza-border flex items-center justify-center">
                            <span className="text-revonza-text text-xs">→</span>
                          </div>
                          <span className="text-sm text-revonza-textMuted">Optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Launch?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's create a launch strategy that turns your product into a market leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/product-launching/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default ProductLaunchingPage;