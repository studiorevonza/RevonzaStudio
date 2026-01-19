import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowLeft, Image, Tag, FolderOpen } from 'lucide-react';
import SEO from '../components/SEO';

const ProjectDetailsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [showZoomModal, setShowZoomModal] = useState<boolean>(false);

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleZoomImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    setShowZoomModal(true);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-auto rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => handleZoomImage(selectedProject.image)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-revonza-accent text-white p-3 rounded-full">
                            <ExternalLink size={20} />
                          </div>
                        </div>
                      </div>
                      
                      {selectedProject.images && selectedProject.images.length > 0 && (
                        <div className="grid grid-cols-1 gap-4">
                          {selectedProject.images.slice(0, 2).map((img, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={img}
                                alt={`${selectedProject.title} - Additional image ${index + 1}`}
                                className="w-full h-auto rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => handleZoomImage(img)}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-revonza-accent text-white p-3 rounded-full">
                                  <ExternalLink size={20} />
                                </div>
                              </div>
                            </div>
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

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Project"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-revonza-accent rounded-full p-3 hover:bg-revonza-text transition-colors"
              onClick={closeImageViewer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Zoomed Image Modal */}
      {showZoomModal && zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => {
            setZoomedImage(null);
            setShowZoomModal(false);
          }}
        >
          <div className="relative max-w-7xl max-h-[95vh]">
            <img
              src={zoomedImage}
              alt="Zoomed Project"
              className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-revonza-accent rounded-full p-3 hover:bg-revonza-text transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage(null);
                setShowZoomModal(false);
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