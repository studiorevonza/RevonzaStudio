import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Play, Eye, Heart, Share2, Camera } from 'lucide-react';
import SEO from '../../components/SEO';

const ThumbnailDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Professional Thumbnail Design Services | YouTube Thumbnails | Revonza Studio',
          description: 'Professional thumbnail design services by Revonza Studio. We create high-impact thumbnails optimized for click-through rates across YouTube and social media platforms.',
          keywords: [
            'thumbnail design',
            'YouTube thumbnails',
            'social media thumbnails',
            'clickbait thumbnails',
            'video thumbnail design',
            'thumbnail creation services'
          ],
          canonical: 'https://revonzastudio.com/services/thumbnail-design',
          ogImage: 'https://revonzastudio.com/og-thumbnail-design.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Visual Impact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Thumbnail <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Design</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Stop the scroll with high-impact visuals. Our scientifically designed thumbnails are optimized for click-through rates, turning casual browsers into engaged viewers across YouTube and social media platforms.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Scroll Stopping</h3>
            <p className="text-revonza-textMuted">
              Designs that make viewers stop scrolling and click instantly.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Engagement Focused</h3>
            <p className="text-revonza-textMuted">
              Crafted to maximize engagement and watch time.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Share2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Platform Optimized</h3>
            <p className="text-revonza-textMuted">
              Perfectly sized and optimized for each platform.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Capture Attention Instantly</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                In a sea of content, your thumbnail is the first and sometimes only impression you'll make. Our thumbnail design service creates compelling visuals that grab attention within milliseconds and convince viewers to click, watch, and engage.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Psychology-based design principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">A/B testing recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Multiple format variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Performance tracking integration</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-48 bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-2xl rounded-br-[3rem] overflow-hidden">
                  <div className="bg-revonza-surface h-full flex items-center justify-center relative">
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <Play size={12} className="text-white" />
                    </div>
                    <div className="text-center z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-revonza-accent to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Camera size={24} className="text-white" />
                      </div>
                      <h3 className="font-bold text-revonza-text">ENGAGING VIDEO</h3>
                      <p className="text-sm text-revonza-textMuted">Click-worthy thumbnail</p>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                      98% CTR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Stop the Scroll?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's create thumbnails that turn viewers into engaged audience members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/thumbnail-design/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default ThumbnailDesignPage;