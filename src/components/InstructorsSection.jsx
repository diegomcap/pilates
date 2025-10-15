import React, { useState } from 'react';
import { Star, Award, Calendar, MessageCircle } from 'lucide-react';
import AccessibleVideoPlayer from './AccessibleVideoPlayer';

const InstructorsSection = ({ translations }) => {
  const [selectedInstructor, setSelectedInstructor] = useState(0);

  const instructors = [
    {
      name: translations.instructors.instructorData.ana.name,
      title: translations.instructors.instructorData.ana.title,
      experience: '12',
      specialties: translations.instructors.instructorData.ana.specialties,
      bio: translations.instructors.instructorData.ana.bio,
      certifications: translations.instructors.instructorData.ana.certifications,
      languages: translations.instructors.instructorData.ana.languages,
      schedule: translations.instructors.instructorData.ana.schedule,
      rating: 5.0,
      students: 150,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=600&fit=crop&q=80',
      videoTranscript: 'Olá, sou Ana Silva, instrutora principal do nosso estúdio. Com mais de 12 anos de experiência em Pilates, sou especializada em Pilates Clássico, reabilitação e Pilates para gestantes. Formada pela Romana\'s Pilates, combino técnica clássica com abordagem moderna para oferecer o melhor cuidado aos meus alunos.'
    },
    {
      name: translations.instructors.instructorData.carlos.name,
      title: translations.instructors.instructorData.carlos.title,
      experience: '8',
      specialties: translations.instructors.instructorData.carlos.specialties,
      bio: translations.instructors.instructorData.carlos.bio,
      certifications: translations.instructors.instructorData.carlos.certifications,
      languages: translations.instructors.instructorData.carlos.languages,
      schedule: translations.instructors.instructorData.carlos.schedule,
      rating: 4.8,
      students: 120,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      poster: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
      videoTranscript: 'Sou Carlos Mendes, instrutor sênior especializado em Pilates Reformer e treinamento para atletas. Como ex-atleta profissional, trago uma perspectiva única ao Pilates, focando em performance e condicionamento físico. Trabalho especialmente com atletas e pessoas ativas que buscam melhorar seu desempenho.'
    },
    {
      name: translations.instructors.instructorData.mariana.name,
      title: translations.instructors.instructorData.mariana.title,
      experience: '6',
      specialties: translations.instructors.instructorData.mariana.specialties,
      bio: translations.instructors.instructorData.mariana.bio,
      certifications: translations.instructors.instructorData.mariana.certifications,
      languages: translations.instructors.instructorData.mariana.languages,
      schedule: translations.instructors.instructorData.mariana.schedule,
      rating: 5.0,
      students: 95,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=800&h=600&fit=crop&q=80',
      videoTranscript: 'Olá, sou Mariana Costa, fisioterapeuta e instrutora especialista em Pilates Mat e Pilates Terapêutico. Uno conhecimento anatômico com a prática do Pilates para oferecer aulas seguras e eficazes, especialmente para iniciantes. Meu foco é ajudar cada aluno a desenvolver consciência corporal e movimento saudável.'
    },
    {
      name: translations.instructors.instructorData.roberto.name,
      title: translations.instructors.instructorData.roberto.title,
      experience: '10',
      specialties: translations.instructors.instructorData.roberto.specialties,
      bio: translations.instructors.instructorData.roberto.bio,
      certifications: translations.instructors.instructorData.roberto.certifications,
      languages: translations.instructors.instructorData.roberto.languages,
      schedule: translations.instructors.instructorData.roberto.schedule,
      rating: 4.8,
      students: 80,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      poster: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80',
      videoTranscript: 'Sou Roberto Ahmed, instrutor internacional com experiência em diversos países. Especializo-me em Pilates Avançado, equipamento Cadillac e técnicas inovadoras. Ofereço desafios únicos aos alunos, sempre respeitando os limites individuais e promovendo evolução constante na prática do Pilates.'
    }
  ];

  const handleBookWithInstructor = (instructorName) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma aula com ${instructorName}. Poderia me ajudar com os horários disponíveis?`);
    window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
  };

  return (
    <section id="instructors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.instructors.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.instructors.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Instructors List */}
          <div className="lg:col-span-1 space-y-4">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedInstructor === index
                    ? 'bg-primary-500 text-white shadow-xl transform scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setSelectedInstructor(index)}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                    selectedInstructor === index
                      ? 'bg-white/20 text-white'
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${
                      selectedInstructor === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {instructor.name}
                    </h3>
                    <p className={`text-sm ${
                      selectedInstructor === index ? 'text-primary-100' : 'text-gray-600'
                    }`}>
                      {instructor.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className={selectedInstructor === index ? 'text-yellow-300' : 'text-yellow-500'} fill="currentColor" />
                        <span className="text-sm font-medium">{instructor.rating}</span>
                      </div>
                      <span className={`text-xs ${
                        selectedInstructor === index ? 'text-primary-200' : 'text-gray-500'
                      }`}>
                        {instructor.experience} {translations.instructors.experience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Instructor Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-emerald-500 p-8 text-white">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    {instructors[selectedInstructor].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">
                      {instructors[selectedInstructor].name}
                    </h3>
                    <p className="text-primary-100 text-lg mb-3">
                      {instructors[selectedInstructor].title}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Award size={16} />
                        <span>{instructors[selectedInstructor].experience} {translations.instructors.yearsExperience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} fill="currentColor" />
                        <span>{instructors[selectedInstructor].rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{instructors[selectedInstructor].students} {translations.instructors.students}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Video Presentation */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Apresentação do Instrutor</h4>
                  <AccessibleVideoPlayer
                    src={instructors[selectedInstructor].videoUrl}
                    poster={instructors[selectedInstructor].poster}
                    title={`Apresentação - ${instructors[selectedInstructor].name}`}
                    description={`Conheça ${instructors[selectedInstructor].name}, ${instructors[selectedInstructor].title}`}
                    transcript={instructors[selectedInstructor].videoTranscript}
                    className="aspect-video max-w-2xl"
                    ariaLabel={`Vídeo de apresentação do instrutor ${instructors[selectedInstructor].name}`}
                  />
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{translations.instructors.about}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {instructors[selectedInstructor].bio}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {translations.instructors.specialties}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructors[selectedInstructor].specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{translations.instructors.certifications}</h4>
                    <ul className="space-y-2">
                      {instructors[selectedInstructor].certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{translations.instructors.languages}</h4>
                    <ul className="space-y-2">
                      {instructors[selectedInstructor].languages.map((language, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{translations.instructors.availableSchedule}</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {instructors[selectedInstructor].schedule.map((time, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Calendar size={16} className="text-primary-600" />
                        <span className="text-sm text-gray-700">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleBookWithInstructor(instructors[selectedInstructor].name)}
                    className="btn-whatsapp justify-center flex-1"
                  >
                    <MessageCircle size={20} />
                    {translations.instructors.bookWith} {instructors[selectedInstructor].name.split(' ')[0]}
                  </button>
                  <button
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary justify-center flex-1"
                  >
                    {translations.instructors.moreInfo}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {translations.instructors.teamStats}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-sm text-gray-600">{translations.instructors.certifiedInstructors}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">36+</div>
              <div className="text-sm text-gray-600">{translations.instructors.totalExperience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">445+</div>
              <div className="text-sm text-gray-600">{translations.instructors.studentsServed}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5.0</div>
              <div className="text-sm text-gray-600">{translations.instructors.averageRating}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;