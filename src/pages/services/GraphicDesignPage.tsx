import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Brush, Layers, Type, Image, Scissors } from 'lucide-react';
import SEO from '../../components/SEO';

const GraphicDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Professional Graphic Design Services | Creative Design Solutions | Revonza Studio',
          description: 'Professional graphic design services by Revonza Studio. We create stunning visual content including brochures, flyers, social media graphics, and branding materials.',
          keywords: [
            'graphic design',
            'creative design services',
            'visual design',
            'branding design',
            'marketing materials',
            'social media graphics'
          ],
          canonical: 'https://revonzastudio.com/services/graphic-design',
          ogImage: 'https://revonzastudio.com/og-graphic-design.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Creative Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Graphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Design</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Bring your ideas to life with stunning visuals. We craft compelling graphic designs that communicate your message effectively, from marketing materials to social media graphics, ensuring your brand stands out in any medium.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Visual Impact</h3>
            <p className="text-revonza-textMuted">
              Designs that captivate and communicate your brand message.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Brush size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Creative Innovation</h3>
            <p className="text-revonza-textMuted">
              Fresh, innovative concepts that differentiate your brand.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Multi-Format</h3>
            <p className="text-revonza-textMuted">
              Versatile designs that work across all platforms and media.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Comprehensive Design Solutions</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                Our graphic design services encompass all aspects of visual communication, from print materials to digital assets. We create cohesive visual experiences that strengthen your brand identity and engage your target audience effectively.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Print design (brochures, flyers, business cards)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Digital graphics (social media, web banners)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Packaging design and product visuals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Brand asset creation and guidelines</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-pink-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-lg p-4 flex items-center justify-center">
                        <Image size={24} className="text-revonza-accent" />
                      </div>
                      <div className="bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-lg p-4 flex items-center justify-center">
                        <Type size={24} className="text-revonza-accent" />
                      </div>
                      <div className="bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-lg p-4 flex items-center justify-center">
                        <Palette size={24} className="text-revonza-accent" />
                      </div>
                      <div className="bg-gradient-to-br from-revonza-accent/20 to-purple-500/20 rounded-lg p-4 flex items-center justify-center">
                        <Brush size={24} className="text-revonza-accent" />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-revonza-text">Creative Portfolio</h3>
                      <p className="text-sm text-revonza-textMuted">Diverse design solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Visualize Your Ideas?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's create stunning graphics that bring your brand to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/graphic-design/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default GraphicDesignPage;