import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DetailedPricingPage from './pages/DetailedPricingPage';

// Import individual service pages
import WebsiteDevelopmentPage from './pages/services/WebsiteDevelopmentPage';
import AIIntegrationPage from './pages/services/AIIntegrationPage';
import LogoDesignPage from './pages/services/LogoDesignPage';
import ThumbnailDesignPage from './pages/services/ThumbnailDesignPage';
import ProductLaunchingPage from './pages/services/ProductLaunchingPage';
import HostingSolutionsPage from './pages/services/HostingSolutionsPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import DesignBrandingPage from './pages/services/DesignBrandingPage';
import MaintenanceModificationPage from './pages/services/MaintenanceModificationPage';

// Import individual service project pages
import WebsiteDevelopmentProjects from './pages/services/projects/WebsiteDevelopmentProjects';
import AIIntegrationProjects from './pages/services/projects/AIIntegrationProjects';
import LogoDesignProjects from './pages/services/projects/LogoDesignProjects';
import ThumbnailDesignProjects from './pages/services/projects/ThumbnailDesignProjects';
import ProductLaunchingProjects from './pages/services/projects/ProductLaunchingProjects';
import HostingSolutionsProjects from './pages/services/projects/HostingSolutionsProjects';
import GraphicDesignProjects from './pages/services/projects/GraphicDesignProjects';
import DesignBrandingProjects from './pages/services/projects/DesignBrandingProjects';
import MaintenanceModificationProjects from './pages/services/projects/MaintenanceModificationProjects';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-revonza-base text-revonza-text transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/detailed-pricing" element={<DetailedPricingPage />} />
              
              {/* Individual Service Project Routes (More Specific First) */}
              <Route path="/services/website-development/projects" element={<WebsiteDevelopmentProjects />} />
              <Route path="/services/ai-integration/projects" element={<AIIntegrationProjects />} />
              <Route path="/services/logo-design/projects" element={<LogoDesignProjects />} />
              <Route path="/services/thumbnail-design/projects" element={<ThumbnailDesignProjects />} />
              <Route path="/services/product-launching/projects" element={<ProductLaunchingProjects />} />
              <Route path="/services/hosting-solutions/projects" element={<HostingSolutionsProjects />} />
              <Route path="/services/graphic-design/projects" element={<GraphicDesignProjects />} />
              <Route path="/services/design-branding/projects" element={<DesignBrandingProjects />} />
              <Route path="/services/maintenance-modification/projects" element={<MaintenanceModificationProjects />} />
              
              {/* Individual Service Routes */}
              <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
              <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
              <Route path="/services/logo-design" element={<LogoDesignPage />} />
              <Route path="/services/thumbnail-design" element={<ThumbnailDesignPage />} />
              <Route path="/services/product-launching" element={<ProductLaunchingPage />} />
              <Route path="/services/hosting-solutions" element={<HostingSolutionsPage />} />
              <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
              <Route path="/services/design-branding" element={<DesignBrandingPage />} />
              <Route path="/services/maintenance-modification" element={<MaintenanceModificationPage />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Global Floating WhatsApp Button */}
          <a 
            href="https://wa.me/918851619647" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all duration-300 z-50 hover:scale-110"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white" />
          </a>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;