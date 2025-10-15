import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, Calendar, Mail } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { getGradientStyle } from '../utils/colorUtils';

const Header = ({ currentLanguage, onLanguageChange, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: translations.nav.home, href: '#home' },
    { name: translations.nav.about, href: '#about' },
    { name: translations.nav.classes, href: '#classes' },
    { name: translations.nav.instructors, href: '#instructors' },
    { name: translations.nav.testimonials, href: '#testimonials' },
    { name: translations.nav.contact, href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block" style={getGradientStyle('accentDark')}>
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{translations?.header?.contact?.phone || '+971 58 528 7670'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{translations?.header?.contact?.email || 'agenda@healthcenter.ae'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{translations?.header?.contact?.location || 'Abu Dhabi, UAE'}</span>
              </div>
            </div>
            <div className="text-xs">
              {translations?.header?.contact?.hours || 'Seg - Sex: 6h às 22h | Sáb: 7h às 18h | Dom: 8h às 16h'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full top-0 md:top-10 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-accent-100' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 md:w-14 md:h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl md:text-2xl">P</span>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-accent-900 leading-none">
                    Health Center UAE
                  </h1>
                  <p className="text-xs md:text-sm text-accent-600 font-medium">
                    {translations.header.slogan}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-accent-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-primary-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSelector 
                currentLang={currentLanguage} 
                onLanguageChange={onLanguageChange} 
              />
              
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hidden md:flex btn-primary text-sm px-6 py-3"
              >
                {translations.cta.bookClass}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-accent-100 hover:bg-accent-200 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-accent-700" />
                ) : (
                  <Menu className="w-6 h-6 text-accent-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-accent-100 shadow-2xl">
            <div className="container-custom py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-accent-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-300"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-accent-200">
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="w-full btn-primary text-center"
                  >
                    {translations.cta.bookClass}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;