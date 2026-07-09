import React from 'react';
import { 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaStar,
  FaDownload
} from 'react-icons/fa';
import myphoto from '../assets/portlanding.jfif';
import myCV from '../assets/tariqr.pdf';
import { Link } from 'react-router-dom';

function Landing() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements - Purple Only */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
          
          {/* Purple Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(128,90,213,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,90,213,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Purple Glow Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mobile: Photo First, Desktop: Grid with Photo Right */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content - First on Desktop, Second on Mobile */}
            <div className="order-last lg:order-first space-y-6 sm:space-y-8 w-full text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mx-auto lg:mx-0">
                <FaStar className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">4+ Years of Excellence</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Hello! I'm Tariq Omari</span>
                  <br />
                  <span className="text-white">Full Stack</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Crafting digital experiences with <span className="text-purple-400 font-semibold">4+ years</span> of professional expertise. 
                  I build scalable, high-performance applications that drive results.
                </p>
              </div>

              {/* Stats - 2 columns on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 py-3 sm:py-4">
                <div className="text-center p-3 sm:p-4 bg-purple-500/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">4+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-500/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:bg-purple-500/10">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">15+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-500/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:bg-purple-500/10 col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">30+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>

              {/* CTA Buttons - Stack on mobile, Row on larger */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToProjects}
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 border border-purple-400/30"
                >
                  View My Work
                  <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={myCV} 
                  download="Tariq_Resum.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 text-white font-semibold rounded-xl hover:bg-purple-500/20 hover:border-purple-500/60 transition-all duration-300"
                >
                  <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download My CV
                </a>
              </div>

              {/* Social Links - Hidden on mobile, visible on tablet+ */}
           
            </div>

            {/* Photo - Second on Desktop, First on Mobile */}
            <div className="order-first lg:order-last w-full flex justify-center lg:justify-end">
              <div className="relative group max-w-[320px] sm:max-w-[400px] w-full">
                {/* Animated Border - Purple Only */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-spin-slow"></div>
                
                {/* Image Container */}
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-2 border border-purple-500/40">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={myphoto}
                      alt="Developer"
                      className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover rounded-2xl"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/40 flex items-center gap-2 animate-float">
                      <FaCode className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-white font-medium">Full Stack</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-500/40 flex items-center gap-2 animate-float-delay">
                      <FaStar className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-white font-medium">4+ Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Purple Only */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}

export default Landing;