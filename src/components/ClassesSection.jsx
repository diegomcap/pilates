import React, { useState } from 'react';
import { Play, Users, Clock, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import AccessibleVideoPlayer from './AccessibleVideoPlayer';

const ClassesSection = ({ translations }) => {
  const [activeClass, setActiveClass] = useState(0);

  const classes = [
    {
      id: 'mat',
      title: translations.classes.mat.title,
      description: translations.classes.mat.description,
      duration: '50 min',
      level: translations.classes.levels.all,
      maxStudents: `8 ${translations.classes.maxStudents}`,
      benefits: [
        translations.classes.benefits.coreStrengthening,
        translations.classes.benefits.postureImprovement,
        translations.classes.benefits.flexibility,
        translations.classes.benefits.bodyAwareness
      ],
      image: 'mat-pilates',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80',
      transcript: 'Neste vídeo demonstrativo de Pilates Mat, você aprenderá os exercícios fundamentais realizados no solo. Começamos com exercícios de respiração e aquecimento, seguidos por movimentos que fortalecem o core, melhoram a postura e aumentam a flexibilidade. Cada exercício é explicado passo a passo, com modificações para diferentes níveis de habilidade.'
    },
    {
      id: 'reformer',
      title: translations.classes.reformer.title,
      description: translations.classes.reformer.description,
      duration: '55 min',
      level: translations.classes.levels.beginnerToAdvanced,
      maxStudents: `4 ${translations.classes.maxStudents}`,
      benefits: [
        translations.classes.benefits.completeStrengthening,
        translations.classes.benefits.variableResistance,
        translations.classes.benefits.movementPrecision,
        translations.classes.benefits.rehabilitation
      ],
      image: 'reformer-pilates',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      poster: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80',
      transcript: 'Descubra o poder do Pilates Reformer neste vídeo completo. O equipamento oferece resistência variável através de molas, permitindo exercícios mais precisos e controlados. Demonstramos exercícios para fortalecimento completo do corpo, com foco especial no core, postura e alinhamento corporal. Ideal para todos os níveis, com progressões e modificações.'
    },
    {
      id: 'cadillac',
      title: translations.classes.cadillac.title,
      description: translations.classes.cadillac.description,
      duration: '60 min',
      level: translations.classes.levels.intermediateToAdvanced,
      maxStudents: `2 ${translations.classes.maxStudents}`,
      benefits: [
        translations.classes.benefits.suspendedExercises,
        translations.classes.benefits.strengthAndFlexibility,
        translations.classes.benefits.advancedChallenge,
        translations.classes.benefits.versatility
      ],
      image: 'cadillac-pilates',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      transcript: 'O Pilates Cadillac é o equipamento mais versátil do método Pilates. Neste vídeo avançado, exploramos exercícios suspensos que desafiam força, flexibilidade e coordenação. Aprenda movimentos únicos que trabalham o corpo em diferentes planos de movimento, proporcionando um treino completo e desafiador para praticantes experientes.'
    },
    {
      id: 'chair',
      title: translations.classes.chair.title,
      description: translations.classes.chair.description,
      duration: '45 min',
      level: translations.classes.levels.intermediateToAdvanced,
      maxStudents: `3 ${translations.classes.maxStudents}`,
      benefits: [
        translations.classes.benefits.stability,
        translations.classes.benefits.balance,
        translations.classes.benefits.functionalStrength,
        translations.classes.benefits.coordination
      ],
      image: 'chair-pilates',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      poster: 'https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=800&h=600&fit=crop&q=80',
      transcript: 'O Pilates Chair oferece um treino intensivo focado em estabilidade e equilíbrio. Este vídeo demonstra exercícios que desafiam a força funcional e coordenação, utilizando o equipamento compacto mas poderoso. Perfeito para desenvolver controle corporal, força do core e melhorar o equilíbrio em movimentos dinâmicos.'
    }
  ];

  const nextClass = () => {
    setActiveClass((prev) => (prev + 1) % classes.length);
  };

  const prevClass = () => {
    setActiveClass((prev) => (prev - 1 + classes.length) % classes.length);
  };

  return (
    <section id="classes" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.classes.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.classes.subtitle}
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Class Selector */}
          <div className="space-y-4">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeClass === index
                    ? 'bg-primary-500 text-white shadow-xl transform scale-105'
                    : 'bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveClass(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeClass === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {classItem.title}
                    </h3>
                    <p className={`text-sm mb-3 ${
                      activeClass === index ? 'text-primary-100' : 'text-gray-600'
                    }`}>
                      {classItem.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{classItem.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{classItem.maxStudents}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target size={16} />
                        <span>{classItem.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  {activeClass === index && (
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Class Details */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative">
                <AccessibleVideoPlayer
                  src={classes[activeClass].videoUrl}
                  poster={classes[activeClass].poster}
                  title={`${classes[activeClass].title} - Vídeo Demonstrativo`}
                  description={classes[activeClass].description}
                  transcript={classes[activeClass].transcript}
                  className="aspect-[4/3]"
                  ariaLabel={`Vídeo demonstrativo da modalidade ${classes[activeClass].title}`}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevClass}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
                  aria-label="Modalidade anterior"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <button
                  onClick={nextClass}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
                  aria-label="Próxima modalidade"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              </div>

              {/* Class Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {classes[activeClass].title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {classes[activeClass].description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {classes[activeClass].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Class Info */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Clock size={20} className="text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{classes[activeClass].duration}</div>
                    <div className="text-xs text-gray-600">Duração</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users size={20} className="text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{classes[activeClass].maxStudents}</div>
                    <div className="text-xs text-gray-600">Máximo</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Target size={20} className="text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{classes[activeClass].level}</div>
                    <div className="text-xs text-gray-600">Nível</div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full btn-primary"
                >
                  {translations.classes.schedule.bookClass} {classes[activeClass].title}
                </button>
              </div>
            </div>

            {/* Class Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {classes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveClass(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    activeClass === index ? 'bg-primary-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.classes.schedule.title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.classes.schedule.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">6h</div>
              <div className="text-sm text-primary-700 font-medium">{translations.classes.schedule.firstClass}</div>
              <div className="text-xs text-primary-600 mt-1">{translations.classes.schedule.weekdays}</div>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">22h</div>
              <div className="text-sm text-primary-700 font-medium">{translations.classes.schedule.lastClass}</div>
              <div className="text-xs text-primary-600 mt-1">{translations.classes.schedule.weekdays}</div>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">7h</div>
              <div className="text-sm text-primary-700 font-medium">{translations.classes.schedule.saturdays}</div>
              <div className="text-xs text-primary-600 mt-1">7h às 18h</div>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">8h</div>
              <div className="text-sm text-primary-700 font-medium">{translations.classes.schedule.sundays}</div>
              <div className="text-xs text-primary-600 mt-1">8h às 16h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;