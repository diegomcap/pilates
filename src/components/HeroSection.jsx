import React from 'react';
import { ArrowRight, Play, MessageCircle, Mail, Phone, Star, Users, Award, Clock } from 'lucide-react';
import AccessibleVideoPlayer from './AccessibleVideoPlayer';

const HeroSection = ({ translations }) => {
  const handleWhatsAppClick = () => {
    const message = translations.booking.whatsappMessages.booking;
    const phoneNumber = '+971501234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:agenda@healthcenter.ae?subject=Agendamento de Aula de Pilates', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5511999999999', '_blank');
  };

  const stats = [
    { icon: Users, value: '500+', label: translations.hero.stats.activeStudents },
    { icon: Award, value: '15+', label: translations.hero.stats.experience },
    { icon: Star, value: '5.0', label: translations.hero.stats.rating },
    { icon: Clock, value: '24/7', label: translations.hero.stats.support }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background with sophisticated gradient */}
      <div className="absolute inset-0 gradient-accent"></div>
      
      {/* Geometric decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-3xl opacity-10 animate-float transform rotate-12"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 gradient-secondary rounded-2xl opacity-15 animate-float transform -rotate-12" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-secondary-400 rounded-2xl opacity-15 animate-float transform rotate-45" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold animate-fade-in">
                ✨ {translations.hero.badge}
              </div>
              
              <h1 className="heading-primary animate-slide-up">
                {translations.hero.title}
              </h1>
              
              <p className="text-2xl md:text-3xl text-accent-700 font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {translations.hero.subtitle}
              </p>
              
              <p className="text-body animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {translations.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp justify-center group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {translations.booking.whatsapp}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.querySelector('#classes').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary justify-center group"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {translations.hero.ctaSecondary}
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 px-4 py-2 text-accent-600 hover:text-primary-600 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+971 58 528 7670</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-4 py-2 text-accent-600 hover:text-primary-600 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{translations.booking.email}</span>
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
            {/* Main Video */}
            <div className="relative">
              <div className="aspect-[4/5] bg-emerald-100 rounded-3xl shadow-2xl overflow-hidden">
                <AccessibleVideoPlayer
                  src="https://storage.googleapis.com/pilates-studio-videos/pilates-studio-intro.mp4"
                  poster="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1000&fit=crop&q=80"
                  title={translations.hero.video.title}
                  description={translations.hero.video.subtitle}
                  className="w-full h-full"
                  autoPlay={false}
                  muted={true}
                  controls={true}
                  ariaLabel={`${translations.hero.video.title} - ${translations.hero.video.subtitle}`}
                  transcript="Bem-vindos ao nosso estúdio de Pilates! Aqui você encontrará um ambiente moderno e acolhedor, com equipamentos de última geração e instrutores altamente qualificados. Nosso estúdio oferece aulas personalizadas para todos os níveis, desde iniciantes até avançados. Venha descobrir como o Pilates pode transformar seu corpo e mente, melhorando sua postura, flexibilidade e bem-estar geral."
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 card-glass p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent-900">5.0</div>
                    <div className="text-xs text-accent-600">{translations.hero.cards.rating}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 card-glass p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-secondary rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-accent-900">500+</div>
                    <div className="text-xs text-accent-600">{translations.hero.cards.students}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent-900 mb-1">{stat.value}</div>
                <div className="text-sm text-accent-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;