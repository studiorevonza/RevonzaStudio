import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, LOGO_WHITE_URL, LOGO_BLACK_URL, BRAND_NAME } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className={`
          relative flex items-center justify-between 
          w-[95%] max-w-7xl px-6 py-3 
          rounded-full transition-all duration-300
          ${scrolled 
            ? 'bg-revonza-base/80 backdrop-blur-xl border border-revonza-border shadow-2xl' 
            : 'bg-transparent border border-transparent'}
        `}>
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <img 
               src={theme === 'light' ? '/favicon-light.png' : '/favicon-dark.png'} 
               alt={BRAND_NAME} 
               className="h-10 w-auto object-contain" 
             />
             {/* Logo text: Increased size, ensuring consistent font styling */}
             <span className="text-3xl font-bold tracking-widest text-revonza-text hidden sm:block font-sans whitespace-nowrap">
               REVONZA S<span className="text-revonza-accent font-bold">TU</span>DIO
             </span>
          </div>

          {/* Desktop Nav & CTA Group */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center space-x-1 bg-revonza-surface/50 px-2 py-1 rounded-full backdrop-blur-sm">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-revonza-accent text-white shadow-lg shadow-revonza-accent/20' 
                        : 'text-revonza-text hover:text-revonza-accent hover:bg-revonza-base/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-revonza-text hover:text-revonza-accent hover:bg-revonza-surface transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <NavLink 
              to="/contact" 
              className={`
                px-5 py-2 rounded-full text-sm font-bold bg-revonza-text text-revonza-base
                transition-all duration-500 ease-out flex items-center
                hover:bg-revonza-accent hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
              `}
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-revonza-text hover:text-revonza-accent transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-revonza-text hover:text-revonza-accent transition-colors p-2 bg-revonza-surface rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-revonza-base/95 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={({ isActive }) =>
                  `text-3xl font-bold transition-colors ${
                    isActive
                      ? 'text-revonza-accent'
                      : 'text-revonza-textMuted hover:text-revonza-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
        </div>
      </div>
    </>
  );
};

export default Header;