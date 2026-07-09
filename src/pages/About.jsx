import React from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaMicrochip,
  FaRocket,
  FaCheckCircle,
  FaSmile,
  FaProjectDiagram,
  FaHeadset,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaUser
} from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
            <FaUser className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">About Me</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Hello! I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mohammad Tariq Omari</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* About Text */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a <span className="text-purple-400 font-semibold">Full Stack Developer</span> with more than <span className="text-white font-semibold">4+ years</span> of experience in building websites and web applications. My main focus is to create digital solutions that are clean, modern, and easy for people to use. I love turning ideas into real products that not only look good but also work smoothly.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Over the years, I have worked on different kinds of projects, from small personal websites to larger applications, and each project has helped me grow as a developer. I enjoy finding simple answers to complex problems and always aim to deliver something valuable.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">4+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">18+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400">24/7</div>
            <div className="text-sm text-gray-400">Support Available</div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaCode className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">Frontend Development</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaServer className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">Backend Development</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaDatabase className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">Database Management</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaRocket className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">API Development</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaMicrochip className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">Microservices & Event-Driven</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FaMicrochip className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white font-medium">Cloud & DevOps Skills</span>
            </div>
          </div>
        </div>

        {/* Connect */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <FaArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://github.com/TariqOmari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
            >
              <FaGithub className="w-5 h-5 text-white hover:text-purple-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
            >
              <FaLinkedin className="w-5 h-5 text-white hover:text-purple-400" />
            </a>
            <a 
              href="https://wa.me/93778056257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
            >
              <FaWhatsapp className="w-5 h-5 text-white hover:text-purple-400" />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 text-gray-400 text-sm">
            <p>📱 WhatsApp: +93 778 056 257</p>
          </div>
        </div>

      </div>
    </div>
  );
}