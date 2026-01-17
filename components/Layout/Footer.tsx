import React from 'react';
import { BRAND_NAME } from '../../constants';
import { Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../../App';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-revonza-base border-t border-revonza-border pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-revonza-accent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src={theme === 'light' ? '/favicon-light.png' : '/favicon-dark.png'} 
                alt={BRAND_NAME} 
                className="h-8 w-auto object-contain" 
              />
              {/* Text Logo: Capitalized, T & U in bright purple */}
              <span className="text-2xl font-bold text-revonza-text tracking-widest font-sans">
                REVONZA S<span className="text-revonza-accent">TU</span>DIO
              </span>
            </div>
            <p className="text-revonza-textMuted max-w-sm text-lg font-light leading-relaxed">
              We engineer digital excellence. Turning complex ideas into intelligent, beautiful experiences for the modern web.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/revonza.studio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-revonza-surface flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/revonzastudio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-revonza-surface flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="mailto:studiorevonza@gmail.com" className="w-10 h-10 rounded-full bg-revonza-surface flex items-center justify-center text-revonza-text hover:bg-revonza-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-revonza-text font-bold mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4 text-revonza-textMuted">
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Website Development</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">SEO Optimization</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">AI Integration</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Logo Design</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Thumbnail Design</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Graphic Design</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Design & Branding</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Maintenance & Modification</li>
            </ul>
          </div>

          <div>
            <h3 className="text-revonza-text font-bold mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4 text-revonza-textMuted">
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-revonza-accent transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-revonza-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-revonza-textMuted gap-4">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. Built for the future.</p>
          <p>Designed by Revonza.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;