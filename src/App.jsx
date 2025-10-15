import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookingSection from './components/BookingSection';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import GallerySection from './components/GallerySection';
import InstructorsSection from './components/InstructorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  console.log('=== APP COMPONENT STARTING ===');
  
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [isLoading, setIsLoading] = useState(false); // Desabilitando loading temporariamente

  console.log('App component is rendering!');
  console.log('Loading state:', isLoading);

  useEffect(() => {
    console.log('useEffect triggered');
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      console.log('Setting loading to false');
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const currentTranslations = translations[currentLanguage];

  // Debug: Log to check if translations are loaded
  console.log('Current translations:', currentTranslations);
  console.log('Current language:', currentLanguage);

  if (isLoading) {
    console.log('Rendering loading screen');
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Health Center UAE</h2>
          <p className="text-gray-600">Carregando sua experiência...</p>
        </div>
      </div>
    );
  }

  if (!currentTranslations) {
    console.log('No translations found, rendering error screen');
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-900 mb-2">Erro de Carregamento</h2>
          <p className="text-red-600">Não foi possível carregar as traduções.</p>
        </div>
      </div>
    );
  }

  console.log('Rendering main app content');
  return (
    <div className="min-h-screen bg-white">
      <Header 
        translations={currentTranslations} 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      <main>
        <HeroSection translations={currentTranslations} />
        <BookingSection translations={currentTranslations} />
        <AboutSection translations={currentTranslations} />
        <ClassesSection translations={currentTranslations} />
        <GallerySection translations={currentTranslations} />
        <InstructorsSection translations={currentTranslations} />
        <TestimonialsSection translations={currentTranslations} />
        <ContactSection translations={currentTranslations} />
      </main>
      
      <Footer translations={currentTranslations} />
    </div>
  );
}

export default App;
