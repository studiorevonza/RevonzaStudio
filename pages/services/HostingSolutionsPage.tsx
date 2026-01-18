import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Zap, Database, Cloud, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

const HostingSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Professional Hosting Solutions | Web Hosting Services | Revonza Studio',
          description: 'Professional hosting solutions by Revonza Studio. We provide secure, reliable, and scalable hosting services with premium performance and 24/7 support.',
          keywords: [
            'web hosting',
            'hosting solutions',
            'cloud hosting',
            'secure hosting',
            'reliable hosting',
            'scalable hosting'
          ],
          canonical: 'https://revonzastudio.com/services/hosting-solutions',
          ogImage: 'https://revonzastudio.com/og-hosting-solutions.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Reliable Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Hosting <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Secure, reliable, and lightning-fast hosting infrastructure. We provide enterprise-grade hosting solutions with 24/7 monitoring, automatic backups, and premium performance to keep your digital presence always online and blazing fast.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Lightning Fast</h3>
            <p className="text-revonza-textMuted">
              Premium SSD hosting with CDN for global speed optimization.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Enterprise Security</h3>
            <p className="text-revonza-textMuted">
              Multi-layer security with SSL, firewalls, and DDoS protection.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Automatic Backups</h3>
            <p className="text-revonza-textMuted">
              Daily backups with easy restore options for peace of mind.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Premium Hosting Infrastructure</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                Your website deserves the best foundation possible. Our hosting solutions provide enterprise-grade performance, security, and reliability with 24/7 expert support and continuous monitoring to ensure your site stays online and performs optimally.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">24/7 expert support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Free SSL certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Daily automatic backups</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-green-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-revonza-border">
                        <span className="font-bold text-revonza-text">Server Status</span>
                        <span className="text-sm text-green-500 font-bold">Online</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-revonza-text">CPU Usage</span>
                          <span className="text-sm text-revonza-textMuted">12%</span>
                        </div>
                        <div className="h-2 bg-revonza-base rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full w-3/12"></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-revonza-text">Memory</span>
                          <span className="text-sm text-revonza-textMuted">34%</span>
                        </div>
                        <div className="h-2 bg-revonza-base rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-4/12"></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-revonza-text">Storage</span>
                          <span className="text-sm text-revonza-textMuted">67%</span>
                        </div>
                        <div className="h-2 bg-revonza-base rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full w-7/12"></div>
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
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready for Premium Hosting?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's move your website to our enterprise-grade hosting infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/hosting-solutions/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default HostingSolutionsPage;