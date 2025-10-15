import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const ContactSection = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email',
    bestTime: 'morning'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const whatsappMessage = `
${translations.contact.form.whatsappTemplate.title}

${translations.contact.form.whatsappTemplate.name}: ${formData.name}
${translations.contact.form.whatsappTemplate.email}: ${formData.email}
${translations.contact.form.whatsappTemplate.phone}: ${formData.phone}
${translations.contact.form.whatsappTemplate.subject}: ${getSubjectLabel(formData.subject)}
${translations.contact.form.whatsappTemplate.contactPreference}: ${formData.contactPreference}
${translations.contact.form.whatsappTemplate.bestTime}: ${getTimeLabel(formData.bestTime)}

${translations.contact.form.whatsappTemplate.message}:
${formData.message}
      `.trim();

      // Open WhatsApp with the message
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/971585287670?text=${encodedMessage}`, '_blank');

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        contactPreference: 'whatsapp',
        bestTime: '',
        message: ''
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubjectLabel = (value) => {
    const options = {
      'general': translations.contact.form.subjectOptions.general,
      'booking': translations.contact.form.subjectOptions.booking,
      'pricing': translations.contact.form.subjectOptions.pricing,
      'instructors': translations.contact.form.subjectOptions.instructors,
      'equipment': translations.contact.form.subjectOptions.equipment,
      'other': translations.contact.form.subjectOptions.other
    };
    return options[value] || value;
  };

  const getTimeLabel = (value) => {
    const options = {
      'morning': translations.contact.form.timeOptions.morning,
      'afternoon': translations.contact.form.timeOptions.afternoon,
      'evening': translations.contact.form.timeOptions.evening,
      'flexible': translations.contact.form.timeOptions.flexible
    };
    return options[value] || value;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: translations.contact.info.phone,
      value: '+971 58 528 7670',
      action: () => window.open('tel:+971585287670')
    },
    {
      icon: MessageCircle,
      title: translations.contact.info.whatsapp,
      value: 'WhatsApp',
      action: () => window.open('https://wa.me/971585287670')
    },
    {
      icon: Mail,
      title: translations.contact.info.email,
      value: 'agenda@healthcenter.ae',
      action: () => window.open('mailto:agenda@healthcenter.ae')
    },
    {
      icon: MapPin,
      title: translations.contact.info.location,
      value: 'Abu Dhabi, UAE',
      action: () => window.open('https://maps.google.com/?q=Abu+Dhabi+UAE')
    }
  ];

  const schedule = [
    { day: translations.contact.schedule.weekdays, hours: '6:00 - 22:00' },
    { day: translations.contact.schedule.saturday, hours: '7:00 - 20:00' },
    { day: translations.contact.schedule.sunday, hours: '8:00 - 18:00' }
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', color: 'text-pink-600' },
    { icon: Facebook, url: '#', color: 'text-blue-600' },
    { icon: Youtube, url: '#', color: 'text-red-600' }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            {translations.contact.title}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {translations.contact.form.title}
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  {translations.contact.form.successMessage}
                </p>
              </div>
            )}

            {showError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  {translations.contact.form.errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.name}
                   </label>
                   <input
                     type="text"
                     required
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                     placeholder={translations.contact.form.namePlaceholder}
                   />
                 </div>
               
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.email}
                   </label>
                   <input
                     type="email"
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                     placeholder={translations.contact.form.emailPlaceholder}
                   />
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.phone}
                   </label>
                   <input
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                     placeholder={translations.contact.form.phonePlaceholder}
                   />
                 </div>
               
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.subject}
                   </label>
                   <select
                     required
                     value={formData.subject}
                     onChange={(e) => setFormData({...formData, subject: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                   >
                     <option value="">{translations.contact.form.subject}</option>
                     <option value="general">{translations.contact.form.subjectOptions.general}</option>
                     <option value="booking">{translations.contact.form.subjectOptions.booking}</option>
                     <option value="pricing">{translations.contact.form.subjectOptions.pricing}</option>
                     <option value="instructors">{translations.contact.form.subjectOptions.instructors}</option>
                     <option value="equipment">{translations.contact.form.subjectOptions.equipment}</option>
                     <option value="other">{translations.contact.form.subjectOptions.other}</option>
                   </select>
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.contactPreference}
                   </label>
                   <select
                     value={formData.contactPreference}
                     onChange={(e) => setFormData({...formData, contactPreference: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                   >
                     <option value="email">{translations.contact.form.contactOptions.email}</option>
                     <option value="phone">{translations.contact.form.contactOptions.phone}</option>
                     <option value="whatsapp">{translations.contact.form.contactOptions.whatsapp}</option>
                   </select>
                 </div>
               
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     {translations.contact.form.bestTime}
                   </label>
                   <select
                     value={formData.bestTime}
                     onChange={(e) => setFormData({...formData, bestTime: e.target.value})}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                   >
                     <option value="">{translations.contact.form.bestTime}</option>
                     <option value="morning">{translations.contact.form.timeOptions.morning}</option>
                     <option value="afternoon">{translations.contact.form.timeOptions.afternoon}</option>
                     <option value="evening">{translations.contact.form.timeOptions.evening}</option>
                     <option value="flexible">{translations.contact.form.timeOptions.flexible}</option>
                   </select>
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   {translations.contact.form.message}
                 </label>
                 <textarea
                   required
                   rows={5}
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                   placeholder={translations.contact.form.messagePlaceholder}
                 />
               </div>
               
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
               >
                 {isSubmitting ? (
                   <>
                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                     {translations.contact.form.sending}
                   </>
                   ) : (
                   <>
                     <Send size={20} />
                     {translations.contact.form.send}
                   </>
                   )}
                 </button>
               </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    onClick={contact.action}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors ${contact.color}`}>
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{contact.title}</div>
                      <div className="text-gray-600 text-sm">{contact.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock size={24} className="text-primary-600" />
                {translations.contact.schedule.title}
              </h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className="text-primary-600 font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{translations.contact.social.title}</h3>
              <p className="text-primary-100 mb-6">
                {translations.contact.social.description}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  const message = encodeURIComponent(translations.contact.quickActions.whatsappMessage);
                  window.open(`https://wa.me/971585287670?text=${message}`, '_blank');
                }}
                className="btn-whatsapp justify-center"
              >
                <MessageCircle size={20} />
                {translations.contact.quickActions.whatsapp}
              </button>
              <button
                onClick={() => window.open('mailto:agenda@healthcenter.ae')}
                className="btn-secondary justify-center"
              >
                <Mail size={20} />
                {translations.contact.quickActions.email}
              </button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg font-medium">{translations.contact.map.title}</p>
              <p className="text-sm">{translations.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;