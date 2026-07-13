import React, { useState } from 'react';
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
  FaStar,
  FaTimes,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaAward,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCheckCircle
} from 'react-icons/fa';

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const companies = [
    {
      id: 6,
      name: "WamaSolutions",
      role: "Full Stack Developer",
      type: "Hybrid",
      location: "Remote",
      period: "Jan 2023 - Dec 2023",
      status: "Completed",
      logo: "🏢",
      email: "info@wamasolutions.com",
      website: "wamasolutions.com",
      description: "Developed full-stack web applications using React and Node.js. Contributed to multiple client projects and improved application performance by 40%.",
      achievements: [
        "Optimized database queries reducing load time by 40%",
        "Led migration from legacy system to modern stack",
        "Implemented CI/CD pipeline using GitHub Actions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Docker"],
      founded: "2020",
      teamSize: "15-25"
    },
    {
      id: 7,
      name: "Qasid",
      role: "Senior Developer",
      type: "Full-Time",
      location: "Hybrid",
      period: "Mar 2025 - Present",
      status: "Completed",
      logo: "📱",
      email: "hello@qasid.com",
      website: "qasid.com",
      description: "Senior developer working on educational technology platforms. Built scalable solutions for online learning and student management systems.",
      achievements: [
        "Built real-time student dashboard with analytics",
        "Developed RESTful API serving 10k+ users",
        "Implemented automated testing with 95% coverage"
      ],
      technologies: ["TypeScript", "Next.js", "PostgreSQL", "Redis", "AWS"],
      founded: "2018",
      teamSize: "30-50"
    },
    {
      id: 8,
      name: "AyazMuhammadi",
      role: "Lead Developer",
      type: "Full-Time",
      location: "On-Site",
      period: "Feb 2025 - Present",
      status: "Current",
      logo: "👨‍💻",
      email: "careers@ayazmuhammadi.com",
      website: "ayazmuhammadi.com",
      description: "Currently leading development at AyazMuhammadi. Building innovative solutions and leading a team of 5 developers. Focused on creating scalable enterprise applications.",
      achievements: [
        "Leading team of 5 developers on major projects",
        "Architected microservices infrastructure",
        "Reduced deployment time by 60% with automation"
      ],
      technologies: ["React", "Java", "Spring Boot", "MySQL", "Kubernetes", "AWS"],
      founded: "2015",
      teamSize: "50-100"
    },
    {
      id: 9,
      name: "Tootisabz",
      role: "Full Stack Mobile Developer",
      type: "Part-Time",
      location: "Remote",
      period: "Apr 2024 - Dec 2024",
      status: "Completed",
      logo: "📊",
      email: "info@tootisabz.com",
      website: "tootisabz.com",
      description: "Developed mobile applications with React Native. Created cross-platform solutions for various clients across different industries.",
      achievements: [
        "Developed 3 cross-platform mobile apps",
        "Integrated payment gateways and APIs",
        "Achieved 4.8+ rating on app stores"
      ],
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
      founded: "2021",
      teamSize: "10-20"
    }
  ];

  // Duplicate array for seamless scrolling
  const scrollingCompanies = [...companies, ...companies, ...companies];

  const openModal = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedCompany(null), 300);
  };

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
                  className="min-w-[280px] sm:min-w-[320px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-6 flex-shrink-0 cursor-pointer"
                  onClick={() => openModal(company)}
                >
                  {/* Logo & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{company.logo}</div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      company.status === 'Current' ? 'bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse' :
                      company.status === 'Completed' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-white rounded-xl transition-all duration-300 text-sm group w-full justify-center border border-purple-500/30 hover:border-purple-500/50"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(company);
                    }}
                  >
                    View Details
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
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

      {/* Modal */}
      {showModal && selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-slideUp">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{selectedCompany.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedCompany.name}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      selectedCompany.status === 'Current' ? 'bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {selectedCompany.status}
                    </span>
                  </div>
                  <p className="text-purple-400 text-lg mt-1">{selectedCompany.role}</p>
                </div>
              </div>

              {/* Company Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <FaGlobe className="text-purple-400" />
                    <span>Website</span>
                  </div>
                  <a href={`https://${selectedCompany.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    {selectedCompany.website}
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <FaEnvelope className="text-purple-400" />
                    <span>Email</span>
                  </div>
                  <a href={`mailto:${selectedCompany.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {selectedCompany.email}
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <FaBriefcase className="text-purple-400" />
                    <span>Founded</span>
                  </div>
                  <p className="text-gray-300">{selectedCompany.founded}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <FaUsers className="text-purple-400" />
                    <span>Team Size</span>
                  </div>
                  <p className="text-gray-300">{selectedCompany.teamSize} employees</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">About</h4>
                <p className="text-gray-300 leading-relaxed">{selectedCompany.description}</p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaAward className="text-yellow-400" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedCompany.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaCode className="text-purple-400" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 text-center">
                  {selectedCompany.status === 'Current' 
                    ? '✅ Currently working here' 
                    : '📅 Previously worked here'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}