import React from 'react';
import { BRAND_NAME } from '../../constants';
import { Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-revonza-base border-t border-revonza-border pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-revonza-accent/60 to-transparent opacity-70"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-revonza-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={theme === 'light' ? '/favicon-light.png' : '/favicon-dark.png'} 
                alt={BRAND_NAME} 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-2xl font-bold text-revonza-text tracking-wider font-sans">
                REVONZA S<span className="text-revonza-accent">TU</span>DIO
              </span>
            </div>
            <p className="text-revonza-textMuted max-w-md text-base font-light leading-relaxed">
              Engineering digital excellence. We transform complex ideas into intelligent, beautiful experiences for the modern web.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/revonza.studio/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white hover:border-revonza-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/revonzastudio/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white hover:border-revonza-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Linkedin size={20} />
              </a>
              <a href="mailto:studiorevonza@gmail.com" className="w-11 h-11 rounded-full bg-revonza-surface border border-revonza-border flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white hover:border-revonza-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-revonza-text font-bold mb-6 tracking-wide text-lg">Services</h3>
            <ul className="space-y-3 text-revonza-textMuted">
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/services#web">Website Development</a>
              </li>
              
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/services#ai">AI Integration</a>
              </li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/services#design">Design & Branding</a>
              </li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/services#maintenance">Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-revonza-text font-bold mb-6 tracking-wide text-lg">Company</h3>
            <ul className="space-y-3 text-revonza-textMuted">
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/about">About Us</a>
              </li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/projects">Projects</a>
              </li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer hover:translate-x-1 transition-transform">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-4">
            <h3 className="text-revonza-text font-bold mb-6 tracking-wide text-lg">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-revonza-accent mt-1" size={18} />
                <div>
                  <p className="text-revonza-text font-medium">Email</p>
                  <a href="mailto:studiorevonza@gmail.com" className="text-revonza-textMuted hover:text-revonza-accent transition-colors">
                    studiorevonza@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-revonza-accent mt-1" size={18} />
                <div>
                  <p className="text-revonza-text font-medium">Phone</p>
                  <p className="text-revonza-textMuted">+91 9714407181</p>
                  <p className="text-revonza-textMuted">+91 8851619647</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="border-t border-revonza-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-revonza-textMuted">
              <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-revonza-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-revonza-accent transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-revonza-textMuted">
              <span>Built with</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>by Revonza Studio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;