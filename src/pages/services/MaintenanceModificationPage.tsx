import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, RefreshCw, Shield, Calendar, Monitor, Settings } from 'lucide-react';
import SEO from '../../components/SEO';

const MaintenanceModificationPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Maintenance & Modification Services | Website Updates | Revonza Studio',
          description: 'Professional maintenance and modification services by Revonza Studio. We keep your digital presence updated, secure, and performing optimally with ongoing support.',
          keywords: [
            'website maintenance',
            'maintenance services',
            'website modification',
            'ongoing support',
            'website updates',
            'digital maintenance'
          ],
          canonical: 'https://revonzastudio.com/services/maintenance-modification',
          ogImage: 'https://revonzastudio.com/og-maintenance-modification.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Ongoing Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Maintenance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Modification</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Keep your digital presence fresh and secure. We provide ongoing maintenance and modification services to ensure your website remains updated, performs optimally, and adapts to your evolving business needs with seamless support.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Security Updates</h3>
            <p className="text-revonza-textMuted">
              Regular security patches and vulnerability assessments.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <RefreshCw size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Regular Updates</h3>
            <p className="text-revonza-textMuted">
              Content updates, plugin upgrades, and feature enhancements.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Wrench size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Custom Modifications</h3>
            <p className="text-revonza-textMuted">
              Tailored changes to meet your evolving business requirements.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Continuous Digital Care</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                Your website is a living entity that requires ongoing care to stay secure, performant, and relevant. Our maintenance and modification services ensure your digital presence continues to serve your business objectives while adapting to technological changes and evolving requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Weekly security scans and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Monthly performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Quarterly feature enhancements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">24/7 monitoring and support</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-blue-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-6 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-revonza-border">
                        <span className="font-bold text-revonza-text">Maintenance Schedule</span>
                        <span className="text-sm text-revonza-accent font-bold">Active</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                            <Settings size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-revonza-text">Security Update</span>
                          <span className="text-xs text-revonza-textMuted ml-auto">Today</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <Monitor size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-revonza-text">Performance Check</span>
                          <span className="text-xs text-revonza-textMuted ml-auto">Mon</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <Wrench size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-revonza-text">Feature Update</span>
                          <span className="text-xs text-revonza-textMuted ml-auto">Wed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                            <Shield size={14} className="text-white" />
                          </div>
                          <span className="text-sm text-revonza-text">Backup Check</span>
                          <span className="text-xs text-revonza-textMuted ml-auto">Fri</span>
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
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready for Ongoing Support?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's keep your digital presence secure, updated, and performing at its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/maintenance-modification/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default MaintenanceModificationPage;