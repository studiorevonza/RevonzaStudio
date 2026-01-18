import React from 'react';
import { Link } from 'react-router-dom';
import { BadgeCheck, Palette, Target, Award, Heart, Sparkles } from 'lucide-react';
import SEO from '../../../components/SEO';

const DesignBrandingProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Corporate Rebranding',
      description: 'Complete rebranding for established corporation including logo, brand guidelines, and visual identity.',
      tech: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
      timeline: '2 months',
      outcome: 'Increased brand awareness by 120%'
    },
    {
      id: 2,
      title: 'Startup Brand Identity',
      description: 'Brand identity development for tech startup from concept to implementation across all touchpoints.',
      tech: ['Brand Strategy', 'Logo Design', 'Brand Applications'],
      timeline: '6 weeks',
      outcome: 'Secured $2M funding round'
    },
    {
      id: 3,
      title: 'Retail Branding',
      description: 'Comprehensive branding for retail chain with packaging design and in-store experiences.',
      tech: ['Package Design', 'Environmental Design', 'Brand Guidelines'],
      timeline: '3 months',
      outcome: 'Opened 20 new locations in 1 year'
    },
    {
      id: 4,
      title: 'Digital Branding',
      description: 'Digital-first branding for SaaS company with focus on web and app interfaces.',
      tech: ['Digital Branding', 'UI Design', 'Brand Storytelling'],
      timeline: '8 weeks',
      outcome: 'Increased trial-to-paid conversion by 50%'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Design & Branding Projects | Revonza Studio',
          description: 'Browse our portfolio of successful design and branding projects. See how weve developed cohesive brand identities that resonate with audiences.',
          keywords: [
            'design and branding projects',
            'brand identity portfolio',
            'branding design examples',
            'brand identity case studies',
            'cohesive branding projects',
            'brand strategy portfolio'
          ],
          canonical: 'https://revonzastudio.com/services/design-branding/projects',
          ogImage: 'https://revonzastudio.com/og-branding-projects.jpg',
          ogType: 'website'
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-revonza-accent/30 bg-revonza-accent/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-bold text-revonza-accent uppercase tracking-widest">Project Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6 tracking-tight">
            Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Branding</span> Projects
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Explore our portfolio of successful design and branding projects. Each project demonstrates our expertise in creating cohesive brand identities that resonate deeply with audiences and establish lasting emotional connections.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-panel p-8 rounded-[2rem] border border-revonza-border hover:border-revonza-accent/50 transition-all duration-300 h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-revonza-surface rounded-xl flex items-center justify-center text-revonza-accent">
                  <BadgeCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-revonza-text">{project.title}</h3>
              </div>
              
              <p className="text-revonza-textMuted mb-6 text-lg">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-revonza-accent/20 text-revonza-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Timeline</h4>
                  <p className="text-revonza-textMuted">{project.timeline}</p>
                </div>
                
                <div className="bg-revonza-surface/30 rounded-xl p-4">
                  <h4 className="font-bold text-revonza-text mb-2">Outcome</h4>
                  <p className="text-revonza-textMuted">{project.outcome}</p>
                </div>
              </div>
              
              <button className="w-full py-3 bg-revonza-surface hover:bg-revonza-accent/10 rounded-xl text-revonza-text hover:text-revonza-accent font-bold transition-all border border-revonza-border hover:border-revonza-accent">
                View Case Study
              </button>
            </div>
          ))}
        </div>

        {/* Service Link */}
        <div className="text-center">
          <p className="text-xl text-revonza-textMuted mb-8">
            Interested in our design and branding services?
          </p>
          <Link to="/services/design-branding" className="inline-block px-8 py-4 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Learn About Design & Branding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignBrandingProjects;