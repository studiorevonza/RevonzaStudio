import React, { useState } from 'react';
import { PROJECTS, SERVICES } from '@/utils/constants';
import { ExternalLink, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const ProjectsPage: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [zoomedImage, setZoomedImage] = useState<{ src: string, alt: string } | null>(null);

  const toggleFilter = (serviceId: string) => {
    setSelectedFilters(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const clearFilters = () => setSelectedFilters([]);

  // Map service IDs to project tags for filtering
  const getServiceTags = (serviceId: string): string[] => {
    const tagMapping: Record<string, string[]> = {
      'website-development': ['web'],
      'ai-integration': ['ai'],
      'logo-design': ['logo'],
      'thumbnail-design': ['thumbnail'],
      'product-launching': ['launch'],
      'hosting-solutions': ['hosting'],
      'graphic-design': ['graphic'],
      'design-branding': ['branding', 'logo', 'graphic'],
      'maintenance-modification': ['maintenance']
    };
    return tagMapping[serviceId] || [];
  };

  const filteredProjects = selectedFilters.length === 0
    ? PROJECTS
    : PROJECTS.filter(project => 
        selectedFilters.some(filterId => 
          getServiceTags(filterId).some(tag => project.tags.includes(tag))
        )
      );


  
  return (
    <>
      <SEO
        pageSEO={{
          title: 'Web Development Portfolio | Digital Projects & Case Studies India',
          description: 'Explore our portfolio of successful web development and digital marketing projects in India. See case studies of our custom website development, SEO optimization, and branding solutions.',
          keywords: [
            'web development portfolio',
            'digital marketing projects',
            'website development case studies',
            'web design portfolio India',
            'SEO project examples',
            'custom website development projects',
            'digital agency portfolio',
            'web development showcase',
            'Indian web development projects',
            'successful website projects'
          ],
          canonical: 'https://revonzastudio.com/projects',
          ogImage: 'https://revonzastudio.com/og-projects.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Web Development Portfolio',
            'description': 'Explore our portfolio of successful web development and digital marketing projects in India.',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [{
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://revonzastudio.com/'
              }, {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Projects',
                'item': 'https://revonzastudio.com/projects'
              }]
            },
            'mainEntity': PROJECTS.map((project, index) => ({
              '@type': 'CreativeWork',
              'name': project.title,
              'description': project.description,
              'genre': project.category,
              'about': project.tags
            }))
          }
        }}
      />
      <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
          <div>
            <span className="text-revonza-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio</span>
            <h3 className="text-6xl md:text-8xl font-bold text-revonza-text mb-6">Project Showcase</h3>
            <p className="text-xl text-revonza-textMuted max-w-lg font-light">
              Explore our diverse portfolio of digital solutions and creative projects.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
          {selectedFilters.length > 0 && (
             <button 
               onClick={clearFilters}
               className="text-revonza-accent hover:text-revonza-text transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-revonza-surface px-4 py-2 rounded-full border border-revonza-accent/20 hover:border-revonza-accent"
             >
               <X size={14} /> Clear Filters ({selectedFilters.length})
             </button>
          )}
          <Link to="/project-details" className="text-revonza-accent hover:text-revonza-text transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-revonza-surface px-4 py-2 rounded-full border border-revonza-accent/20 hover:border-revonza-accent">
            View Project Details
          </Link>
        </div>
        </div>

        {/* Filter Tags - Refined Buttons */}
        <div className="flex flex-wrap gap-3 mb-20 animate-fade-in delay-100">
          <button
            onClick={clearFilters}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
              selectedFilters.length === 0
                ? 'bg-revonza-text text-revonza-base border-revonza-text shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                : 'bg-revonza-surface text-gray-400 border-revonza-border hover:border-revonza-text hover:text-revonza-text'
            }`}
          >
            All
          </button>
          {SERVICES.map((service) => {
             const isActive = selectedFilters.includes(service.id);
             return (
              <button
                key={service.id}
                onClick={() => toggleFilter(service.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? 'bg-revonza-accent border-revonza-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'bg-revonza-surface text-gray-400 border-revonza-border hover:border-revonza-text hover:text-revonza-text'
                }`}
              >
                {isActive && <Check size={14} />}
                {service.title}
              </button>
             );
          })}
        </div>

        {/* Projects Grid - Improved Borders and Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative rounded-[2rem] overflow-hidden bg-revonza-surface animate-fade-in-up border border-revonza-border hover:border-revonza-accent/30 transition-colors duration-500"
              style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div className="relative w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 cursor-pointer"
                    onClick={() => setZoomedImage({ src: project.image, alt: project.title })}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-white font-bold text-sm rotate-[-45deg]">Revonza Studio</span>
                  </div>
                </div>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-revonza-base via-revonza-base/80 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-revonza-accent text-xs font-extrabold uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-revonza-text group-hover:text-revonza-accent transition-colors">{project.title}</h3>
                    <Link 
                      to={`/project-details/${project.id}`} 
                      className="w-10 h-10 rounded-full bg-revonza-text text-revonza-base flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hover:bg-revonza-accent hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                  <p className="text-revonza-textMuted text-sm line-clamp-2 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40 text-revonza-text">
            <p className="text-2xl font-light">No projects found matching criteria.</p>
          </div>
        )}
      </div>
    </div>
      {/* Zoom Overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <div className="relative inline-block">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <span className="text-white font-bold text-3xl rotate-[-45deg]">Revonza Studio</span>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-revonza-accent rounded-full p-3 hover:bg-revonza-text transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
              }}
              aria-label="Close zoom"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      </>
    );
};

export default ProjectsPage;