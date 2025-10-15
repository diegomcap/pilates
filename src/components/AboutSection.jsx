import React from 'react';
import { CheckCircle, Award, Users, Heart, Star } from 'lucide-react';

const AboutSection = ({ translations }) => {
  const features = [
    {
      icon: Award,
      title: translations.about.features[0],
      description: translations.about.featureDescriptions[0]
    },
    {
      icon: Star,
      title: translations.about.features[1],
      description: translations.about.featureDescriptions[1]
    },
    {
      icon: Users,
      title: translations.about.features[2],
      description: translations.about.featureDescriptions[2]
    },
    {
      icon: Heart,
      title: translations.about.features[3],
      description: translations.about.featureDescriptions[3]
    }
  ];

  const stats = [
    { number: '500+', label: translations.about.stats.students },
    { number: '10+', label: translations.about.stats.experience },
    { number: '15+', label: translations.about.stats.modalities },
    { number: '98%', label: translations.about.stats.satisfaction }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-secondary mb-6">
              {translations.about.title}
            </h2>
            
            <p className="text-xl text-primary-600 font-medium mb-6">
              {translations.about.subtitle}
            </p>
            
            <p className="text-body mb-8">
              {translations.about.description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {translations.about.cta.trial}
              </button>
              <button
                onClick={() => document.querySelector('#classes').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                {translations.about.cta.classes}
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative bg-emerald-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart size={32} className="text-white" />
                  </div>
                  <p className="text-primary-700 font-medium text-lg">{translations.about.studio.title}</p>
                  <p className="text-primary-600 text-sm mt-2">{translations.about.studio.description}</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-300 rounded-full opacity-30 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {translations.about.whyChoose.title}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {translations.about.whyChoose.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations.about.whyChoose.methodology.title}</h4>
              <p className="text-gray-600">
                {translations.about.whyChoose.methodology.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations.about.whyChoose.community.title}</h4>
              <p className="text-gray-600">
                {translations.about.whyChoose.community.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations.about.whyChoose.care.title}</h4>
              <p className="text-gray-600">
                {translations.about.whyChoose.care.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;