import React, { useState } from 'react';
import axios from 'axios';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaCheckCircle,
  FaTimes,
  FaSpinner,
  FaGlobe,
  FaHeadset,
  FaShieldAlt,
  FaReply
} from 'react-icons/fa';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp_number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    type: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.whatsapp_number.trim()) newErrors.whatsapp_number = 'WhatsApp number is required';
    else if (!/^[\d+\-\s()]+$/.test(formData.whatsapp_number)) newErrors.whatsapp_number = 'Invalid phone number format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/api/contacts`, {
          name: formData.name,
          email: formData.email,
          whatsapp_number: formData.whatsapp_number,
          message: formData.message
        });

        console.log('Success:', response.data);
        
        setModal({
          isOpen: true,
          type: 'success',
          message: '✓ Your message has been sent successfully! I\'ll get back to you within 24 hours.'
        });
        
        setFormData({ 
          name: '', 
          email: '', 
          whatsapp_number: '', 
          message: '' 
        });
        
      } catch (error) {
        console.error('Error:', error);
        let errorMessage = 'Failed to send message. Please try again.';
        
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          errorMessage = error.response.data.message || error.response.data.error || errorMessage;
        } else if (error.request) {
          errorMessage = 'No response from server. Please check your connection.';
        }
        
        setModal({
          isOpen: true,
          type: 'error',
          message: '✗ ' + errorMessage
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "tariqomarii163@gmail.com",
      link: "mailto:tariqomarii163@gmail.com",
      response: "Response time: 2 - 12 hours",
      color: "from-blue-600 to-blue-800",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+93 778056257",
      link: "https://wa.me/93778056257",
      response: "Response time: Within 24 hours",
      color: "from-green-600 to-green-800",
      bg: "bg-green-500/10",
      border: "border-green-500/30"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      value: "Kabul, Afghanistan",
      link: "#",
      response: "Available for local meetings",
      color: "from-red-600 to-red-800",
      bg: "bg-red-500/10",
      border: "border-red-500/30"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Response Time",
      value: "2 - 12 Hours",
      link: "#",
      response: "Within 24 hours on WhatsApp",
      color: "from-purple-600 to-purple-800",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mb-4">
            <FaEnvelope className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Contact <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you
            have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${info.bg} backdrop-blur-sm rounded-2xl border ${info.border} hover:${info.border.replace('border-', 'hover:border-').replace('/30', '/60')} transition-all duration-300 p-4 text-center hover:scale-105 hover:shadow-2xl hover:shadow-${info.color.split(' ')[1]}/20 group`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-20 text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-white font-semibold text-sm">{info.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{info.response}</p>
              <p className="text-purple-400 text-sm font-medium mt-2">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Main Form Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Form */}
          <div className="bg-purple-500/5 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <FaPaperPlane className="text-purple-400" />
              Send Message
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 bg-black/50 rounded-xl border ${errors.name ? 'border-red-500' : 'border-purple-500/30'} focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FaTimes className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full pl-10 pr-4 py-3 bg-black/50 rounded-xl border ${errors.email ? 'border-red-500' : 'border-purple-500/30'} focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FaTimes className="w-3 h-3" /> {errors.email}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <FaShieldAlt className="w-3 h-3" /> We'll never share your email
                </p>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FaWhatsapp className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    name="whatsapp_number"
                    value={formData.whatsapp_number}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                    className={`w-full pl-10 pr-4 py-3 bg-black/50 rounded-xl border ${errors.whatsapp_number ? 'border-red-500' : 'border-purple-500/30'} focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300`}
                  />
                </div>
                {errors.whatsapp_number && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FaTimes className="w-3 h-3" /> {errors.whatsapp_number}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <FaClock className="w-3 h-3" /> Response time: Within 24 hours
                </p>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or any questions you have..."
                    rows="4"
                    className={`w-full pl-10 pr-4 py-3 bg-black/50 rounded-xl border ${errors.message ? 'border-red-500' : 'border-purple-500/30'} focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 resize-none transition-all duration-300`}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FaTimes className="w-3 h-3" /> {errors.message}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                  <FaReply className="w-3 h-3" /> 10-2000 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 border border-purple-400/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Info & Quick Contact */}
          <div className="space-y-6">
            {/* Quick WhatsApp Contact */}
            <div className="bg-green-500/5 backdrop-blur-sm rounded-3xl border border-green-500/30 p-6 text-center hover:border-green-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="inline-flex p-4 bg-green-500/20 rounded-2xl text-green-400 mb-4">
                <FaWhatsapp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quick Contact</h3>
              <p className="text-gray-400 mb-4">Get a faster response via WhatsApp</p>
              <a
                href="https://wa.me/93778056257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Availability */}
            <div className="bg-purple-500/5 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaHeadset className="text-purple-400" />
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-white font-medium">2 - 12 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">WhatsApp Response</span>
                  <span className="text-white font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white font-medium">Kabul, Afghanistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-purple-500/5 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaGlobe className="text-purple-400" />
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:tariqomarii163@gmail.com" className="px-4 py-2 bg-blue-500/10 rounded-xl text-blue-400 text-sm border border-blue-500/30 hover:bg-blue-500/20 transition-all duration-300">
                  <FaEnvelope className="inline mr-2 w-3 h-3" />
                  Email Me
                </a>
                <a href="https://wa.me/93778056257" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500/10 rounded-xl text-green-400 text-sm border border-green-500/30 hover:bg-green-500/20 transition-all duration-300">
                  <FaWhatsapp className="inline mr-2 w-3 h-3" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Success/Error Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-purple-500/30 p-8 max-w-md w-full shadow-2xl shadow-purple-500/20 animate-[fadeIn_0.3s_ease-in-out]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              {modal.type === 'success' ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                    <FaCheckCircle className="w-14 h-14 text-white" />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                    <FaTimes className="w-14 h-14 text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              {modal.type === 'success' ? ' Success!' : '❌ Error!'}
            </h3>

            {/* Message */}
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              {modal.message}
            </p>

            {/* Button */}
            <button
              onClick={closeModal}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                modal.type === 'success'
                  ? 'bg-gradient-to-r from-green-600 to-green-800 hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105'
                  : 'bg-gradient-to-r from-red-600 to-red-800 hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105'
              }`}
            >
              {modal.type === 'success' ? 'Great! 😊' : 'Try Again 🔄'}
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-\\[fadeIn_0\\.3s_ease-in-out\\] {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}