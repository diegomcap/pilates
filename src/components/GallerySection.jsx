import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Image, Video, Eye, Heart } from 'lucide-react';
import AccessibleVideoPlayer from './AccessibleVideoPlayer';

const GallerySection = ({ translations }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: translations.gallery?.categories?.all || 'Todos', icon: Eye },
    { id: 'studio', name: translations.gallery?.categories?.studio || 'Estúdio', icon: Image },
    { id: 'classes', name: translations.gallery?.categories?.classes || 'Aulas', icon: Video },
    { id: 'equipment', name: translations.gallery?.categories?.equipment || 'Equipamentos', icon: Image },
    { id: 'events', name: translations.gallery?.categories?.events || 'Eventos', icon: Video }
  ];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'studio',
      title: translations.gallery?.mediaItems?.studioMain?.title || 'Ambiente Principal do Estúdio',
      description: translations.gallery?.mediaItems?.studioMain?.description || 'Nosso espaço amplo e iluminado com equipamentos de última geração',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80',
      likes: 45
    },
    {
      id: 2,
      type: 'video',
      category: 'classes',
      title: translations.gallery?.mediaItems?.pilatesMat?.title || 'Aula de Pilates Mat',
      description: translations.gallery?.mediaItems?.pilatesMat?.description || 'Demonstração de uma aula completa de Pilates no solo',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      duration: '2:30',
      likes: 78,
      transcript: 'Neste vídeo, demonstramos uma aula completa de Pilates Mat. Começamos com exercícios de respiração e aquecimento, seguidos por uma sequência de movimentos que trabalham o fortalecimento do core, melhora da postura e aumento da flexibilidade. Cada exercício é explicado detalhadamente.'
    },
    {
      id: 3,
      type: 'image',
      category: 'equipment',
      title: translations.gallery?.mediaItems?.reformer?.title || 'Reformer Profissional',
      description: translations.gallery?.mediaItems?.reformer?.description || 'Equipamento Reformer de alta qualidade para exercícios avançados',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop&q=80',
      likes: 32
    },
    {
      id: 4,
      type: 'video',
      category: 'classes',
      title: translations.gallery?.mediaItems?.cadillac?.title || 'Exercícios no Cadillac',
      description: translations.gallery?.mediaItems?.cadillac?.description || 'Sequência de exercícios utilizando o equipamento Cadillac',
      thumbnail: 'https://images.unsplash.com/photo-1506629905607-d9b1b2e3d3b1?w=400&h=300&fit=crop&q=80',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      duration: '1:45',
      likes: 56,
      transcript: 'Explore os exercícios avançados do Pilates Cadillac neste vídeo demonstrativo. O equipamento oferece versatilidade única, permitindo exercícios suspensos que desafiam força, flexibilidade e coordenação. Cada movimento é executado com precisão e controle.'
    },
    {
      id: 5,
      type: 'image',
      category: 'studio',
      title: translations.gallery?.mediaItems?.relaxation?.title || 'Área de Relaxamento',
      description: translations.gallery?.mediaItems?.relaxation?.description || 'Espaço dedicado ao relaxamento e meditação pós-treino',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=80',
      likes: 28
    },
    {
      id: 6,
      type: 'image',
      category: 'equipment',
      title: translations.gallery?.mediaItems?.chair?.title || 'Chair Pilates',
      description: translations.gallery?.mediaItems?.chair?.description || 'Equipamento Chair para exercícios de fortalecimento e equilíbrio',
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&q=80',
      likes: 41
    },
    {
      id: 7,
      type: 'video',
      category: 'events',
      title: translations.gallery?.mediaItems?.workshop?.title || 'Workshop de Pilates',
      description: translations.gallery?.mediaItems?.workshop?.description || 'Highlights do nosso último workshop com instrutores internacionais',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&q=80',
      videoUrl: '#',
      duration: '3:15',
      likes: 92
    },
    {
      id: 8,
      type: 'image',
      category: 'studio',
      title: translations.gallery?.mediaItems?.reception?.title || 'Recepção e Lounge',
      description: translations.gallery?.mediaItems?.reception?.description || 'Área de recepção acolhedora para nossos alunos',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80',
      likes: 35
    },
    {
      id: 9,
      type: 'video',
      category: 'classes',
      title: translations.gallery?.mediaItems?.beginners?.title || 'Pilates para Iniciantes',
      description: translations.gallery?.mediaItems?.beginners?.description || 'Aula especial para quem está começando no Pilates',
      thumbnail: 'https://images.unsplash.com/photo-1506629905607-d9b1b2e3d3b1?w=400&h=300&fit=crop&q=80',
      videoUrl: '#',
      duration: '2:00',
      likes: 67
    },
    {
      id: 10,
      type: 'image',
      category: 'classes',
      title: translations.gallery?.mediaItems?.groupClass?.title || 'Aula em Grupo',
      description: translations.gallery?.mediaItems?.groupClass?.description || 'Sessão de Pilates em grupo com foco em fortalecimento',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80',
      likes: 53
    },
    {
      id: 11,
      type: 'image',
      category: 'equipment',
      title: translations.gallery?.mediaItems?.barrel?.title || 'Barrel Pilates',
      description: translations.gallery?.mediaItems?.barrel?.description || 'Equipamento Barrel para exercícios de flexibilidade e força',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop&q=80',
      fullSize: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop&q=80',
      likes: 29
    },
    {
      id: 12,
      type: 'video',
      category: 'classes',
      title: translations.gallery?.mediaItems?.therapeutic?.title || 'Pilates Terapêutico',
      description: translations.gallery?.mediaItems?.therapeutic?.description || 'Exercícios focados em reabilitação e bem-estar',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&q=80',
      videoUrl: '#',
      duration: '2:45',
      likes: 84
    }
  ];

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openModal = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const currentIndex = filteredMedia.findIndex(item => item.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredMedia.length;
    } else {
      newIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    }
    
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.gallery?.title || 'Galeria'}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.gallery?.subtitle || 'Conheça nosso estúdio, equipamentos e veja nossas aulas em ação'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openModal(media)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {media.type === 'video' ? (
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Play size={24} fill="currentColor" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm text-white">
                        <Eye size={24} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    media.type === 'video' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {media.type === 'video' ? <Video size={12} /> : <Image size={12} />}
                    {media.type === 'video' ? media.duration : translations.gallery?.labels?.photo || 'Foto'}
                  </div>
                </div>

                {/* Likes */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Heart size={12} />
                    {media.likes}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {media.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {media.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-emerald-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-100 text-sm">{translations.gallery?.stats?.studioPhotos || 'Fotos do Estúdio'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-100 text-sm">{translations.gallery?.stats?.classVideos || 'Vídeos de Aulas'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-100 text-sm">{translations.gallery?.stats?.equipment || 'Equipamentos'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-primary-100 text-sm">{translations.gallery?.stats?.moments || 'Momentos Capturados'}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {translations.gallery?.cta?.question || 'Quer conhecer nosso estúdio pessoalmente?'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent(translations.gallery?.cta?.whatsappMessage || 'Olá! Gostaria de agendar uma visita ao estúdio para conhecer as instalações. Quando seria possível?');
                window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
              }}
              className="btn-whatsapp justify-center"
            >
              {translations.gallery?.cta?.scheduleVisit || 'Agendar Visita'}
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary justify-center"
            >
              {translations.gallery?.cta?.contact || 'Entre em Contato'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Media Content */}
            <div className="aspect-[16/10] bg-gray-100">
              {selectedMedia.type === 'video' ? (
                <AccessibleVideoPlayer
                  src={selectedMedia.videoUrl}
                  poster={selectedMedia.thumbnail}
                  title={selectedMedia.title}
                  description={selectedMedia.description}
                  transcript={selectedMedia.transcript}
                  className="w-full h-full"
                  ariaLabel={`Vídeo da galeria: ${selectedMedia.title}`}
                />
              ) : (
                <img
                  src={selectedMedia.fullSize}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Media Info */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedMedia.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Heart size={16} />
                  <span className="text-sm">{selectedMedia.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;