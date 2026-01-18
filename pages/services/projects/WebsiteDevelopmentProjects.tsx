import React from 'react';
import { Link } from 'react-router-dom';
import { Code, MonitorSmartphone, Smartphone, Globe, Database, Server } from 'lucide-react';
import SEO from '../../../components/SEO';

const WebsiteDevelopmentProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration and inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      timeline: '3 months',
      outcome: 'Increased sales by 150%'
    },
    {
      id: 2,
      title: 'Corporate Dashboard',
      description: 'Interactive analytics dashboard for financial reporting and KPI tracking.',
      tech: ['TypeScript', 'D3.js', 'Express', 'PostgreSQL'],
      timeline: '2 months',
      outcome: 'Reduced reporting time by 70%'
    },
    {
      id: 3,
      title: 'Booking System',
      description: 'Reservation platform for hotels with real-time availability and calendar sync.',
      tech: ['Next.js', 'Firebase', 'Tailwind', 'Stripe'],
      timeline: '4 months',
      outcome: 'Improved booking efficiency by 200%'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Showcase website for creative professionals with gallery and contact integration.',
      tech: ['React', 'GSAP', 'Netlify', 'Formspree'],
      timeline: '3 weeks',
      outcome: 'Increased client inquiries by 300%'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-revonza-base transition-colors duration-300">
      <SEO 
        pageSEO={{
          title: 'Website Development Projects | Revonza Studio',
          description: 'Browse our portfolio of successful website development projects. See how weve helped businesses achieve their digital goals.',
          keywords: [
            'website development projects',
            'web development portfolio',
            'custom website examples',
            'web development case studies',
            'successful website projects',
            'web application development'
          ],
          canonical: 'https://revonzastudio.com/services/website-development/projects',
          ogImage: 'https://revonzastudio.com/og-website-projects.jpg',
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
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">Development</span> Projects
          </h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl mx-auto font-light">
            Explore our portfolio of successful website development projects. Each project demonstrates our commitment to excellence and our ability to deliver transformative digital solutions.
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
                  <Code size={24} />
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
            Interested in our website development services?
          </p>
          <Link to="/services/website-development" className="inline-block px-8 py-4 bg-revonza-accent text-white rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Learn About Website Development
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentProjects;