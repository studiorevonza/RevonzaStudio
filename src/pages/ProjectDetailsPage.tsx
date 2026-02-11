import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '@/utils/constants';
import { ExternalLink, ArrowLeft, Image, Tag, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (projectId) {
      const project = PROJECTS.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [projectId]);

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
  };

  const handleZoomImage = (imageUrl: string, index: number) => {
    console.log('Zoom image clicked:', imageUrl);
    setCurrentImageIndex(index);
    setZoomedImage(imageUrl);
  };

  const nextImage = () => {
    if (selectedProject) {
      const allImages = [selectedProject.image, ...(selectedProject.images || [])];
      const nextIndex = (currentImageIndex + 1) % allImages.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const allImages = [selectedProject.image, ...(selectedProject.images || [])];
      const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <SEO
        pageSEO={{
          title: 'Project Details & Images - Revonza Studio Portfolio',
          description: 'View detailed project information and images from Revonza Studio portfolio. Explore our work samples and case studies.',
          keywords: [
            'project details',
            'portfolio images',
            'case studies',
            'web development projects',
            'design projects',
            'project gallery',
            'work samples',
            'project showcase',
            'portfolio details',
            'project images'
          ],
          canonical: 'https://revonzastudio.com/project-details',
          ogImage: 'https://revonzastudio.com/og-project-details.jpg',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            'name': 'Project Details Page',
            'description': 'View detailed project information and images from Revonza Studio portfolio.',
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
              }, {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Project Details',
                'item': 'https://revonzastudio.com/project-details'
              }]
            }
          }
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-fade-in-up">
          <Link to="/projects" className="flex items-center gap-2 text-revonza-accent hover:text-revonza-text transition-colors mb-6">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-6">Project Details</h1>
          <p className="text-xl text-revonza-textMuted max-w-3xl">
            Browse through our detailed project portfolio with images, descriptions, and tags
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-[2rem] p-6 border border-revonza-border">
              <div className="flex items-center gap-3 mb-6">
                <FolderOpen className="text-revonza-accent" size={24} />
                <h2 className="text-2xl font-bold text-revonza-text">Projects</h2>
              </div>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedProject?.id === project.id
                        ? 'bg-revonza-accent/20 border border-revonza-accent'
                        : 'bg-revonza-surface/50 border border-revonza-border hover:border-revonza-accent/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-revonza-text text-lg">{project.title}</h3>
                        <p className="text-sm text-revonza-textMuted">{project.category}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="text-xs px-2 py-1 bg-revonza-accent/20 text-revonza-accent rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            {selectedProject ? (
              <div className="glass-panel rounded-[2rem] p-8 border border-revonza-border h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-revonza-text mb-2">{selectedProject.title}</h2>
                    <span className="inline-block px-3 py-1 bg-revonza-accent/20 text-revonza-accent rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button 
                    onClick={closeProjectDetail}
                    className="text-revonza-textMuted hover:text-revonza-text transition-colors"
                  >
                    Close
                  </button>
                </div>

                <p className="text-lg text-revonza-textMuted mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="text-revonza-accent" size={20} />
                    <h3 className="text-xl font-bold text-revonza-text">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-revonza-surface border border-revonza-border rounded-full text-revonza-text hover:bg-revonza-accent/20 hover:text-revonza-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    {selectedProject.bannerText && (
                      <div className="mb-4 p-4 bg-gradient-to-r from-revonza-accent/20 to-purple-500/20 rounded-xl border border-revonza-accent/30">
                        <p className="text-center text-lg font-bold text-revonza-accent">{selectedProject.bannerText}</p>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Image className="text-revonza-accent" size={20} />
                      <h3 className="text-xl font-bold text-revonza-text">Project Images</h3>
                    </div>
                    
                    <div className="relative max-w-4xl mx-auto">
                      <div className="aspect-video bg-transparent flex items-center justify-center p-4">
                        {selectedProject && (
                          <>
                            <div className="relative inline-block max-h-[70vh] w-auto">
                              <img
                                src={[selectedProject.image, ...(selectedProject.images || [])][currentImageIndex]}
                                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                className="max-h-[70vh] w-auto object-contain cursor-zoom-in hover:brightness-75 transition-all duration-300"
                                onClick={() => handleZoomImage([selectedProject.image, ...(selectedProject.images || [])][currentImageIndex], currentImageIndex)}
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                <span className="text-white font-bold text-2xl rotate-[-45deg]">Revonza Studio</span>
                              </div>
                            </div>
                            
                            {/* Navigation Arrows */}
                            {([selectedProject.image, ...(selectedProject.images || [])].length > 1) && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                  }}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-revonza-surface/80 backdrop-blur-md rounded-full p-3 text-revonza-text hover:bg-revonza-accent hover:text-white transition-all shadow-lg"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft size={24} />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                  }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-revonza-surface/80 backdrop-blur-md rounded-full p-3 text-revonza-text hover:bg-revonza-accent hover:text-white transition-all shadow-lg"
                                  aria-label="Next image"
                                >
                                  <ChevronRight size={24} />
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </div>
                      
                      {/* Thumbnails */}
                      {selectedProject && [selectedProject.image, ...(selectedProject.images || [])].length > 1 && (
                        <div className="flex justify-center gap-2 mt-4 flex-wrap">
                          {[selectedProject.image, ...(selectedProject.images || [])].map((img, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setCurrentImageIndex(index);
                              }}
                              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                currentImageIndex === index 
                                  ? 'border-revonza-accent shadow-lg' 
                                  : 'border-revonza-border hover:border-revonza-accent/50'
                              }`}
                              aria-label={`View image ${index + 1}`}
                            >
                              <div className="relative w-full h-full">
                                <img
                                  src={img}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                  <span className="text-white font-bold text-lg rotate-[-45deg]">Revonza Studio</span>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-panel rounded-[2rem] p-12 border border-revonza-border h-full flex items-center justify-center text-center">
                <div>
                  <FolderOpen className="text-revonza-textMuted mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-revonza-text mb-2">Select a Project</h3>
                  <p className="text-revonza-textMuted">
                    Click on a project from the list to view its details and images
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[95vh]">
            <div className="relative inline-block">
              <img
                src={zoomedImage}
                alt="Zoomed Project"
                className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
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
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;