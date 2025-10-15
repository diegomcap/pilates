import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award } from 'lucide-react';

const TestimonialsSection = ({ translations }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 34,
      profession: translations.testimonials.professions.executive,
      rating: 5,
      text: 'Transformou completamente minha postura e qualidade de vida. As aulas são desafiadoras mas sempre respeitam meus limites. A Ana é uma instrutora excepcional!',
      results: 'Melhorou 90% das dores nas costas',
      duration: '8 meses',
      favorite: 'Pilates Reformer',
      image: 'SJ'
    },
    {
      name: 'Ahmed Al-Rashid',
      age: 42,
      profession: translations.testimonials.professions.entrepreneur,
      rating: 5,
      text: 'بعد سنوات من آلام الظهر، وجدت في البيلاتس الحل المثالي. الفريق محترف جداً ويتحدث العربية بطلاقة. أنصح به بشدة!',
      results: 'Aumentou flexibilidade em 70%',
      duration: '1 ano',
      favorite: 'Pilates Mat',
      image: 'AR'
    },
    {
      name: 'Maria Santos',
      age: 28,
      profession: translations.testimonials.professions.physiotherapist,
      rating: 5,
      text: 'Como profissional da área, posso afirmar que a qualidade técnica aqui é excepcional. O ambiente é acolhedor e os equipamentos são de primeira linha.',
      results: 'Fortaleceu core em 85%',
      duration: '6 meses',
      favorite: 'Cadillac',
      image: 'MS'
    },
    {
      name: 'Jennifer Smith',
      age: 39,
      profession: translations.testimonials.professions.teacher,
      rating: 5,
      text: 'After trying many fitness programs, Pilates here gave me the best results. The instructors are knowledgeable and the classes are perfectly structured.',
      results: 'Perdeu 12kg e ganhou força',
      duration: '10 meses',
      favorite: 'Chair Pilates',
      image: 'JS'
    },
    {
      name: 'Carlos Oliveira',
      age: 45,
      profession: translations.testimonials.professions.athlete,
      rating: 5,
      text: 'Como ex-atleta, precisava de algo que me ajudasse na recuperação e prevenção de lesões. O Pilates aqui superou todas as expectativas!',
      results: 'Recuperação 100% de lesão',
      duration: '4 meses',
      favorite: 'Pilates Terapêutico',
      image: 'CO'
    },
    {
      name: 'Fatima Al-Zahra',
      age: 31,
      profession: translations.testimonials.professions.doctor,
      rating: 5,
      text: 'الاستوديو نظيف جداً والمدربين مؤهلين. ساعدني البيلاتس كثيراً في التعافي بعد الولادة. أشعر بقوة وثقة أكبر الآن.',
      results: 'Recuperação pós-parto completa',
      duration: '7 meses',
      favorite: 'Pilates para Gestantes',
      image: 'FZ'
    }
  ];

  const stats = [
    { number: '98%', label: translations.testimonials.stats.satisfaction },
    { number: '5.0/5', label: translations.testimonials.stats.rating },
    { number: '500+', label: translations.testimonials.stats.testimonials },
    { number: '95%', label: translations.testimonials.stats.recommend }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.testimonials.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.testimonials.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary-200">
                <Quote size={48} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {testimonials[currentTestimonial].image}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].profession}, {testimonials[currentTestimonial].age} {translations.testimonials.labels.age}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Award size={16} className="text-primary-600" />
                      <span className="text-sm text-gray-600">
                        <strong>{translations.testimonials.labels.result}:</strong> {testimonials[currentTestimonial].results}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Heart size={16} className="text-primary-600" />
                      <span className="text-sm text-gray-600">
                        <strong>{translations.testimonials.labels.time}:</strong> {testimonials[currentTestimonial].duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Star size={16} className="text-primary-600" />
                      <span className="text-sm text-gray-600">
                        <strong>{translations.testimonials.labels.favorite}:</strong> {testimonials[currentTestimonial].favorite}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-500 text-white shadow-xl transform scale-105'
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === currentTestimonial
                    ? 'bg-white/20 text-white'
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {testimonial.image}
                </div>
                <div className={`text-xs font-medium ${
                  index === currentTestimonial ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonial.name.split(' ')[0]}
                </div>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={10} className={index === currentTestimonial ? 'text-yellow-300' : 'text-yellow-400'} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {translations.testimonials.cta.title}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {translations.testimonials.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent(translations.testimonials.cta.whatsappMessage);
                  window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
                }}
                className="btn-whatsapp bg-white text-primary-600 hover:bg-gray-100"
              >
                {translations.testimonials.cta.bookFirstClass}
              </button>
              <button
                onClick={() => document.querySelector('#classes').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
              >
                {translations.testimonials.cta.viewModalities}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;