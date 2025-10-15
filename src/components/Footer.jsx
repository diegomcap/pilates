import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = ({ translations }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: translations.footer.quickLinks.home, href: '#hero' },
    { name: translations.footer.quickLinks.about, href: '#about' },
    { name: translations.footer.quickLinks.classes, href: '#classes' },
    { name: translations.footer.quickLinks.instructors, href: '#instructors' },
    { name: translations.footer.quickLinks.gallery, href: '#gallery' },
    { name: translations.footer.quickLinks.testimonials, href: '#testimonials' },
    { name: translations.footer.quickLinks.contact, href: '#contact' }
  ];

  const services = [
    translations.footer.services.mat,
    translations.footer.services.reformer,
    translations.footer.services.cadillac,
    translations.footer.services.chair,
    translations.footer.services.therapeutic,
    translations.footer.services.pregnancy,
    translations.footer.services.private,
    translations.footer.services.group
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+971 58 528 7670',
      action: () => window.open('tel:+971585287670')
    },
    {
      icon: MessageCircle,
      text: 'WhatsApp',
      action: () => window.open('https://wa.me/971585287670')
    },
    {
          icon: Mail,
          text: 'agenda@healthcenter.ae',
          action: () => window.open('mailto:agenda@healthcenter.ae')
        },
        {
          icon: MapPin,
          text: 'Abu Dhabi, UAE',
          action: () => window.open('https://maps.google.com/?q=Abu+Dhabi+UAE')
        }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      url: '#', 
      color: 'hover:text-pink-400',
      name: 'Instagram'
    },
    { 
      icon: Facebook, 
      url: '#', 
      color: 'hover:text-blue-400',
      name: 'Facebook'
    },
    { 
      icon: Youtube, 
      url: '#', 
      color: 'hover:text-red-400',
      name: 'YouTube'
    }
  ];

  const schedule = [
    { day: translations.footer.schedule.weekdays, hours: '6:00 - 22:00' },
    { day: translations.footer.schedule.saturday, hours: '7:00 - 20:00' },
    { day: translations.footer.schedule.sunday, hours: '8:00 - 18:00' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">
                {translations.footer.company.name}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {translations.footer.company.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{translations.footer.sections.followUs}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-700 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{translations.footer.sections.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{translations.footer.sections.services}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Schedule */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{translations.footer.sections.contactSchedule}</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  onClick={contact.action}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer group"
                >
                  <contact.icon size={18} className="text-primary-500 group-hover:text-primary-400" />
                  <span className="text-sm">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Schedule */}
            <div>
              <h5 className="font-medium mb-3 flex items-center gap-2">
                <Clock size={18} className="text-primary-500" />
                {translations.footer.sections.schedule}
              </h5>
              <div className="space-y-2">
                {schedule.map((item, index) => (
                  <div key={index} className="text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>{item.day}</span>
                      <span className="text-primary-400 font-medium">{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-emerald-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {translations.footer.cta.title}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {translations.footer.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent(translations.footer.cta.whatsappMessage);
                  window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
                }}
                className="btn-whatsapp bg-white text-primary-600 hover:bg-gray-100"
              >
                <MessageCircle size={20} />
                {translations.footer.cta.scheduleNow}
              </button>
              <button
                onClick={() => window.open('mailto:agenda@healthcenter.ae')}
                className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Mail size={20} />
                {translations.footer.cta.sendEmail}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © 2024 {translations.footer.company.name}. {translations.footer.rights}
              </p>
              <p className="mt-1">
                {translations.footer.bottom.developedWith} <Heart size={14} className="inline text-red-500" /> {translations.footer.bottom.forTransforming}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {translations.footer.bottom.privacyPolicy}
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  {translations.footer.bottom.termsOfUse}
                </a>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1"
                title={translations.footer.bottom.backToTop}
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
    </footer>
  );
};

export default Footer;