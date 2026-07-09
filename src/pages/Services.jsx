import React, { useState } from 'react';
import { 
  FaCode, 
  FaServer, 
  FaCloud, 
  FaDatabase, 
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaDesktop,
  FaCogs,
  FaMicrochip,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLock,
  FaChartLine,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaBolt,
  FaBrain,
  FaGlobe,
  FaNetworkWired
} from 'react-icons/fa';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaCode className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Next.js, Node.js, and more.",
      features: [
        "React.js / Next.js Development",
        "Node.js / Express.js Backend",
        "RESTful APIs & GraphQL",
        "Database Design & Management",
        "Authentication & Authorization",
        "Performance Optimization"
      ],
      color: "from-purple-600 to-purple-800",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/60"
    },
    {
      id: 2,
      icon: <FaServer className="w-8 h-8" />,
      title: "API Development & Integration",
      description: "Design, develop, and integrate robust APIs for seamless communication between different systems and services.",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "API Gateway & Management",
        "Third-party Integration",
        "API Security & Authentication",
        "API Documentation (Swagger/OpenAPI)"
      ],
      color: "from-blue-600 to-blue-800",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      hoverBorder: "hover:border-blue-500/60"
    },
    {
      id: 3,
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Comprehensive cloud solutions and DevOps practices to ensure scalable, reliable, and efficient infrastructure.",
      features: [
        "AWS, Azure, GCP Services",
        "CI/CD Pipeline Setup",
        "Container Orchestration (Kubernetes)",
        "Infrastructure as Code (Terraform)",
        "Monitoring & Alerting",
        "Cost Optimization"
      ],
      color: "from-cyan-600 to-cyan-800",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500/60"
    },
    {
      id: 4,
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Database Design & Management",
      description: "Expert database design, optimization, and management for both SQL and NoSQL databases.",
      features: [
        "SQL (PostgreSQL, MySQL)",
        "NoSQL (MongoDB, Redis)",
        "Database Architecture Design",
        "Query Optimization",
        "Data Migration & Backup",
        "High Availability Setup"
      ],
      color: "from-green-600 to-green-800",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      hoverBorder: "hover:border-green-500/60"
    },
    {
      id: 5,
      icon: <FaRocket className="w-8 h-8" />,
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices architectures for complex enterprise applications.",
      features: [
        "Microservices Design Pattern",
        "Service Discovery & Registry",
        "API Gateway Implementation",
        "Event-Driven Architecture",
        "Message Queues (Kafka, RabbitMQ)",
        "Distributed Tracing"
      ],
      color: "from-pink-600 to-pink-800",
      bg: "bg-pink-500/10",
      border: "border-pink-500/30",
      hoverBorder: "hover:border-pink-500/60"
    },
    {
      id: 6,
      icon: <FaDocker className="w-8 h-8" />,
      title: "Containerization & Orchestration",
      description: "Expert containerization and orchestration solutions using Docker and Kubernetes for modern applications.",
      features: [
        "Docker Containerization",
        "Kubernetes Orchestration",
        "Helm Chart Management",
        "Service Mesh (Istio)",
        "Container Security",
        "Auto-scaling & Load Balancing"
      ],
      color: "from-indigo-600 to-indigo-800",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/30",
      hoverBorder: "hover:border-indigo-500/60"
    },
    {
      id: 7,
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security & Authentication",
      description: "Implement robust security measures and authentication systems to protect your applications and data.",
      features: [
        "JWT Authentication",
        "OAuth2 & OIDC",
        "RBAC (Role-Based Access)",
        "API Security",
        "Data Encryption",
        "Security Auditing"
      ],
      color: "from-red-600 to-red-800",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      hoverBorder: "hover:border-red-500/60"
    },
    {
      id: 8,
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile application development using React Native and Flutter.",
      features: [
        "React Native Development",
        "Flutter Development",
        "iOS & Android Apps",
        "Mobile API Integration",
        "Push Notifications",
        "App Store Deployment"
      ],
      color: "from-orange-600 to-orange-800",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      hoverBorder: "hover:border-orange-500/60"
    },
    {
      id: 9,
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize your applications for maximum performance, speed, and user experience.",
      features: [
        "Code Optimization",
        "Caching Strategies",
        "CDN Integration",
        "Load Testing",
        "Performance Monitoring",
        "SEO Optimization"
      ],
      color: "from-yellow-600 to-yellow-800",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-500/60"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mb-4">
            <FaCogs className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">What I Offer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative ${service.bg} backdrop-blur-sm rounded-3xl border ${service.border} ${service.hoverBorder} transition-all duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-${service.color.split(' ')[1]}/20`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative p-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <FaCheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-3 h-3"></span>
                      <span className="text-purple-400">+{service.features.length - 4} more features</span>
                    </div>
                  )}
                </div>

                {/* Learn More Button */}
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 text-sm group-hover:bg-purple-500/20 group-hover:text-purple-400 border border-white/10 group-hover:border-purple-500/30">
                  Learn More
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-600/10 to-purple-800/10 rounded-3xl border border-purple-500/30 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Build Something Amazing?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's work together to bring your vision to life. I'm here to help you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 border border-purple-400/30"
            >
              Get Started
              <FaArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              Contact Me
              <FaBolt className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}