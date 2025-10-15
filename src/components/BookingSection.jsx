import React from 'react';
import { MessageCircle, Mail, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const BookingSection = ({ translations }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma aula de Pilates. Poderia me ajudar com os horários disponíveis?');
    window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Agendamento de Aula de Pilates');
    const body = encodeURIComponent('Olá,\n\nGostaria de agendar uma aula de Pilates. Por favor, me informem sobre os horários disponíveis.\n\nObrigado(a)!');
    window.open(`mailto:agenda@healthcenter.ae?subject=${subject}&body=${body}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+971585287670', '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.booking.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.booking.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Booking Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {translations.booking.bookingOptions.title}
              </h3>
              
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(translations.booking.whatsappMessages.booking)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{translations.booking.whatsapp}</div>
                    <div className="text-sm opacity-90">{translations.booking.bookingOptions.whatsappSubtitle}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:agenda@healthcenter.ae?subject=${encodeURIComponent(translations.booking.whatsappMessages.emailSubject)}&body=${encodeURIComponent(translations.booking.whatsappMessages.emailBody)}`}
                  className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{translations.booking.email}</div>
                    <div className="text-sm opacity-90">{translations.booking.bookingOptions.emailSubtitle}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+5511999999999"
                  className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{translations.booking.phone}</div>
                    <div className="text-sm opacity-90">{translations.booking.bookingOptions.phoneSubtitle}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">{translations.booking.importantInfo.title}</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-primary-600" />
                  <span>{translations.booking.importantInfo.advance}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary-600" />
                  <span>{translations.booking.importantInfo.confirmation}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary-600" />
                  <span>{translations.booking.importantInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-emerald-100 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {translations.booking.scheduleNow.title}
                </h3>
                <p className="text-primary-700">
                  {translations.booking.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">24h</div>
                  <div className="text-sm text-primary-700">{translations.booking.scheduleNow.features.advance}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">2h</div>
                  <div className="text-sm text-primary-700">{translations.booking.scheduleNow.features.confirmation}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-primary-700">{translations.booking.scheduleNow.features.secure}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-primary-700">{translations.booking.scheduleNow.features.support}</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;