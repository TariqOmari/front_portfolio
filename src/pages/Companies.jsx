import React from 'react';
import { 
  FaBuilding, 
  FaLaptopCode, 
  FaBriefcase, 
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaClock,
  FaUsers,
  FaStar
} from 'react-icons/fa';

export default function Companies() {
  const companies = [
   
    {
      id: 6,
      name: "WamaSolutions",
      role: "Full Stack Developer",
      type: "Hybrid",
      location: "Remote",
      period: "Jan 2023 - Dec 2023",
      status: "Current",
      logo: "🏢"
    },
    {
      id: 7,
      name: "Qasid",
      role: "Senior Developer",
      type: "Full-Time",
      location: "Hybrid",
      period: "Mar 2025 - Present",
      status: "Current",
      logo: "📱"
    },
    {
      id: 8,
      name: "AyazMuhammadi",
      role: "Lead Developer",
      type: "Full-Time",
      location: "On-Site",
      period: "Feb 2025 - Present",
      status: "Current",
      logo: "👨‍💻"
    },
    {
      id: 9,
      name: "Tootisabz",
      role: "Full Stack Mobile Developer",
      type: "Part-Time",
      location: "Remote",
      period: "Apr 2024 - Dec 2024",
      status: "Part-Time",
      logo: "📊"
    }
  ];

  // Duplicate array for seamless scrolling
  const scrollingCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
            <FaBuilding className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Partnerships</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Companies I Work With
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the amazing companies I've had the privilege to work with and contribute to their success.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Scrolling Cards Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {scrollingCompanies.map((company, index) => (
                <div 
                  key={`${company.id}-${index}`}
                  className="min-w-[280px] sm:min-w-[320px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-6 flex-shrink-0"
                >
                  {/* Logo & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{company.logo}</div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      company.status === 'Current' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      company.status === 'Full-Time' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      company.status === 'Part-Time' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {company.status}
                    </span>
                  </div>

                  {/* Company Info */}
                  <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{company.role}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaBriefcase className="w-3 h-3 text-purple-400" />
                      <span>{company.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaMapMarkerAlt className="w-3 h-3 text-purple-400" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt className="w-3 h-3 text-purple-400" />
                      <span>{company.period}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-white rounded-xl transition-all duration-300 text-sm group w-full justify-center border border-purple-500/30 hover:border-purple-500/50"
                  >
                    View Details
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
          >
            View All Companies
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}