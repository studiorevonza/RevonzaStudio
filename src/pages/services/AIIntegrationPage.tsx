import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Cpu, Zap, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import SEO from '../../components/SEO';

const AIIntegrationPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'AI Integration Services | Intelligent Automation Solutions | Revonza Studio',
          description: 'Professional AI integration services by Revonza Studio. We seamlessly integrate custom AI solutions including chatbots, predictive analytics, and automated processes.',
          keywords: [
            'AI integration',
            'artificial intelligence services',
            'machine learning integration',
            'smart chatbots',
            'predictive analytics',
            'AI automation solutions'
          ],
          canonical: 'https://revonzastudio.com/services/ai-integration',
          ogImage: 'https://revonzastudio.com/og-ai-integration.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Intelligent Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Integration</span>
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Future-proof your business with intelligent automation. We seamlessly integrate custom AI solutions—from smart chatbots to predictive analytics—that streamline operations and create personalized customer experiences.
          </p>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Smart Automation</h3>
            <p className="text-revonza-textMuted">
              Automate repetitive tasks and workflows with intelligent systems.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Predictive Analytics</h3>
            <p className="text-revonza-textMuted">
              Leverage data insights to predict trends and customer behaviors.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-revonza-surface rounded-2xl flex items-center justify-center text-revonza-accent mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-revonza-text mb-3">Real-time Processing</h3>
            <p className="text-revonza-textMuted">
              Instant decision-making with AI-powered real-time processing.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-revonza-surface/30 rounded-[2.5rem] p-12 mb-20 border border-revonza-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-revonza-text mb-6">Transform Your Business with AI</h2>
              <p className="text-revonza-textMuted mb-6 text-lg leading-relaxed">
                Our AI integration services help you harness the power of machine learning and artificial intelligence to automate processes, gain valuable insights, and create more engaging customer experiences.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Custom AI model development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Chatbot and virtual assistant integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Predictive analytics and forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-revonza-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-revonza-textMuted">Natural language processing</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-64 bg-gradient-to-br from-revonza-accent/20 to-blue-500/20 rounded-2xl rounded-br-[3rem] p-8">
                  <div className="bg-revonza-surface rounded-lg p-4 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-revonza-text">AI Processing</span>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-revonza-accent/10 to-purple-500/10 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-revonza-base/50 rounded p-2 text-xs text-center">Data</div>
                          <div className="bg-revonza-base/50 rounded p-2 text-xs text-center">Model</div>
                          <div className="bg-revonza-base/50 rounded p-2 text-xs text-center">AI</div>
                          <div className="bg-revonza-base/50 rounded p-2 text-xs text-center">Output</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-revonza-textMuted">
                        <span>Processing...</span>
                        <span>98%</span>
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
          <h2 className="text-4xl font-bold text-revonza-text mb-6">Ready to Integrate AI?</h2>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto mb-8">
            Let's explore how AI can transform your business operations and customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services/ai-integration/projects" className="px-8 py-4 bg-revonza-surface text-revonza-text rounded-full font-bold hover:scale-105 transition-all border border-revonza-border hover:bg-revonza-accent hover:text-white">
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

export default AIIntegrationPage;