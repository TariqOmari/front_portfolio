import React, { useState } from 'react';
import { 
  FaCode, 
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUsers,
  FaEye,
  FaGithub,
  FaLink,
  FaStar,
  FaRocket,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaDesktop,
  FaCloud,
  FaShoppingCart,
  FaMoneyBillWave,
  FaBus,
  FaHospital,
  FaStore,
  FaMobile,
  FaTimes,
  FaCheckCircle,
  FaTools,
  FaClock,
  FaVideo,
  FaMicrophone,
  FaLock,
  FaComments,
  FaUserShield,
  FaChartLine,
  FaTasks,
  FaCalendarCheck,
  FaLinkedin,
  FaExclamationTriangle
} from 'react-icons/fa';
import wesal from '../assets/wesal.jpeg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [pendingProject, setPendingProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Qasid Website & Multi-tenant Architecture",
      description: "A comprehensive bus transportation and ticket management system with multi-tenant architecture for bus companies to manage routes, schedules, and bookings efficiently.",
      fullDescription: "This project revolutionized bus transportation management by implementing a multi-tenant architecture that allows multiple bus companies to use the same platform while keeping their data isolated. The system includes real-time route tracking, automated ticketing, passenger management, and comprehensive analytics dashboards.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      date: "Jan 2026",
      likes: 309,
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      category: "Full Stack",
      icon: <FaBus />,
      features: [
        "Multi-tenant Architecture",
        "Real-time Route Tracking",
        "Automated Ticketing System",
        "Passenger Management",
        "Analytics Dashboard",
        "Mobile Responsive"
      ],
      github: "https://github.com/TariqOmari/qasid",
      live: "https://qasid.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    {
      id: 2,
      title: "Tooti Social Media App (Backend)",
      description: "Robust backend system for Tooti social media platform with real-time messaging, content management, and scalable microservices architecture.",
      fullDescription: "Built a scalable microservices-based backend for Tooti social media platform serving millions of users. Implemented real-time messaging using WebSockets, content delivery networks, and advanced caching strategies. The system handles high concurrency with auto-scaling capabilities.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
      date: "Dec 2025",
      likes: 254,
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "Kafka", "Docker", "AWS", "GraphQL"],
      category: "Backend",
      icon: <FaMobile />,
      features: [
        "Microservices Architecture",
        "Real-time Messaging",
        "GraphQL API",
        "Auto-scaling",
        "Content Delivery Network",
        "Advanced Caching"
      ],
      github: "https://github.com/TariqOmari/tooti-backend",
      live: "https://tooti.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    {
      id: 3,
      title: "Crystal Pay Fintech MIS",
      description: "Complete financial management information system for Crystal Pay fintech company with transaction processing, analytics, and reporting.",
      fullDescription: "Developed a comprehensive financial management system that processes thousands of transactions daily. Features include real-time transaction monitoring, fraud detection algorithms, automated reporting, and compliance management. The system ensures 99.9% uptime with disaster recovery capabilities.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      date: "Dec 2025",
      likes: 410,
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "Kafka"],
      category: "Full Stack",
      icon: <FaMoneyBillWave />,
      features: [
        "Transaction Processing",
        "Fraud Detection",
        "Automated Reporting",
        "Compliance Management",
        "Real-time Monitoring",
        "Disaster Recovery"
      ],
      github: "https://github.com/TariqOmari/crystal-pay",
      live: "https://crystal-pay.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    {
      id: 4,
      title: "Godam Ramazan POS System",
      description: "Point of Sale system for Godam Ramazan stores with inventory management, sales tracking, and customer loyalty programs.",
      fullDescription: "Created a modern POS system that streamlined retail operations for Godam Ramazan stores. The system includes inventory management, sales analytics, customer loyalty programs, and multi-store support. Integration with payment gateways and real-time reporting.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "Nov 2025",
      likes: 198,
      technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Express.js", "Docker"],
      category: "Full Stack",
      icon: <FaShoppingCart />,
      features: [
        "Inventory Management",
        "Sales Analytics",
        "Customer Loyalty",
        "Multi-store Support",
        "Payment Integration",
        "Real-time Reporting"
      ],
      github: "https://github.com/TariqOmari/godam-ramazan",
      live: "https://godam-ramazan.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    {
      id: 5,
      title: "Baghban Mehraban POS System",
      description: "Advanced POS and inventory management system for Baghban Mehraban retail stores with analytics and reporting dashboards.",
      fullDescription: "Built an advanced POS system with powerful analytics and reporting capabilities. The system features real-time inventory tracking, employee management, customer relationship management, and detailed sales analytics with visual dashboards.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8561b0?w=600&h=400&fit=crop",
      date: "Oct 2025",
      likes: 176,
      technologies: ["React.js", "Python", "Django", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"],
      category: "Full Stack",
      icon: <FaStore />,
      features: [
        "Real-time Inventory",
        "Employee Management",
        "CRM",
        "Sales Analytics",
        "Visual Dashboards",
        "Export Reports"
      ],
      github: "https://github.com/TariqOmari/baghban-mehraban",
      live: "https://baghban-mehraban.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    {
      id: 6,
      title: "Drugstore Management System",
      description: "Complete pharmacy management system with inventory tracking, prescription management, and billing system.",
      fullDescription: "Developed a comprehensive pharmacy management system that handles prescription management, inventory tracking, billing, and regulatory compliance. Features include expiration date tracking, automated reordering, and integration with pharmacy databases.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop",
      date: "Sep 2025",
      likes: 142,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Docker", "Redis"],
      category: "Full Stack",
      icon: <FaHospital />,
      features: [
        "Prescription Management",
        "Inventory Tracking",
        "Expiration Alerts",
        "Automated Reordering",
        "Billing System",
        "Regulatory Compliance"
      ],
      github: "https://github.com/TariqOmari/drugstore",
      live: "https://drugstore.vercel.app",
      linkedinPost: "https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/"
    },
    // NEW PROJECT 1: Wesal - Real-time Chat Application
    {
      id: 7,
      title: "Wesal - Real-time Chat Application",
      description: "A secure real-time chat application with end-to-end encryption, voice and video calls, using MERN stack, Socket.io, and Zego Cloud.",
      fullDescription: "Wesal is a comprehensive communication platform built with the MERN stack. It features end-to-end encrypted messaging using my custom encryption algorithm, real-time voice and video calls powered by Zego Cloud, and instant messaging via Socket.io. The application provides a secure, seamless communication experience with a modern, responsive UI.",
      image: wesal,
      date: "July 2026",
      likes: 456,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zego Cloud", "WebRTC", "Tailwind CSS", "JWT", "Redis"],
      category: "Full Stack",
      icon: <FaComments />,
      features: [
        "End-to-End Encryption (Custom Algorithm)",
        "Real-time Voice & Video Calls",
        "Instant Messaging with Socket.io",
        "User Authentication & Authorization",
        "Message History & Storage",
        "Modern Responsive UI"
      ],
      github: "https://github.com/TariqOmari/wesal-chat",
      live: "https://wesal-chat.vercel.app",
      linkedinPost: "https://www.linkedin.com/posts/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280_just-launched-my-latest-mern-stack-project-activity-7307341498344177665-uPuW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER7g_4B-wRgvi5fMX1EPfIgTbTXkanmKxk"
    },
    // NEW PROJECT 2: T-Pay - Fintech Microservices
    {
      id: 8,
      title: "T-Pay Fintech Microservices",
      description: "Enterprise fintech backend system using Spring Boot microservices architecture with JWT authentication, Kafka messaging, and cloud deployment.",
      fullDescription: "T-Pay is a robust fintech backend system built with Spring Boot microservices architecture. It handles secure financial transactions, real-time processing, and scalable cloud deployment. The system uses JWT for secure authentication, Apache Kafka for event-driven communication, and is containerized with Docker for seamless deployment.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      date: "June 2026",
      likes: 512,
      technologies: ["Spring Boot", "Java", "Microservices", "Apache Kafka", "JWT", "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
      category: "Backend",
      icon: <FaServer />,
      features: [
        "Microservices Architecture",
        "JWT Authentication & Authorization",
        "Apache Kafka Event Streaming",
        "Real-time Transaction Processing",
        "Cloud Deployment Ready",
        "Containerized with Docker"
      ],
      github: "https://github.com/TariqOmari/t-pay-finance",
      live: "https://t-pay.vercel.app",
      linkedinPost: "https://www.linkedin.com/posts/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280_springboot-microservices-apachekafka-activity-7346596075689984001-dk1m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER7g_4B-wRgvi5fMX1EPfIgTbTXkanmKxk"
    },
    // NEW PROJECT 3: DashboardLovers - Employee Management System
    {
      id: 9,
      title: "DashboardLovers - Employee Management System",
      description: "Complete Employee Management System with role-based access control, task management, attendance tracking, and analytics using MERN stack.",
      fullDescription: "DashboardLovers is a comprehensive Employee Management System built with the MERN stack. Features include role-based authentication (Admin, HR, Employee), task management with assignment and tracking, monthly attendance sheets with Present/Absent/Leave marking, and insightful analytics dashboards. The system includes an admin approval workflow with email notifications via Nodemailer.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "May 2026",
      likes: 389,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React Query", "JWT", "Nodemailer", "Chart.js"],
      category: "Full Stack",
      icon: <FaUserShield />,
      features: [
        "Role-Based Access Control (RBAC)",
        "Admin Approval Workflow",
        "Task Management & Assignment",
        "Monthly Attendance Tracking",
        "Employee Analytics Charts",
        "Secure JWT Authentication"
      ],
      github: "https://github.com/TariqOmari/dashboardlovers",
      live: "https://dashboardlovers.vercel.app",
      linkedinPost: "https://www.linkedin.com/posts/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280_just-launched-my-latest-mern-stack-project-activity-7307341498344177665-uPuW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAER7g_4B-wRgvi5fMX1EPfIgTbTXkanmKxk"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowWarning(true);
    setPendingProject(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSelectedProject(null);
      setPendingProject(null);
    }, 300);
  };

  const handleLiveDemoClick = (project) => {
    setShowWarning(true);
    setPendingProject(project);
  };

  const handleConfirmLiveDemo = () => {
    if (pendingProject) {
      window.open(pendingProject.live, '_blank');
    }
    setShowWarning(false);
    setPendingProject(null);
  };

  const handleLinkedInClick = (project) => {
    if (project && project.linkedinPost) {
      window.open(project.linkedinPost, '_blank');
    }
    setShowWarning(false);
    setPendingProject(null);
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mb-4">
            <FaCode className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the amazing projects I've built with passion and dedication
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-purple-500/5 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 cursor-pointer" onClick={() => openModal(project)}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-purple-500/40 text-xs text-purple-400 font-medium flex items-center gap-1">
                  {project.icon}
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white leading-tight flex-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Date & Likes */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaCalendarAlt className="w-3 h-3 text-purple-400" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="w-3 h-3 text-yellow-400" />
                    {project.likes}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 border border-purple-500/20">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-white rounded-xl transition-all duration-300 text-sm w-full justify-center border border-purple-500/30 hover:border-purple-500/60"
                >
                  View Details
                  <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 border border-purple-400/30"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Warning Modal */}
      {showWarning && pendingProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowWarning(false)}
        >
          <div 
            className="bg-gradient-to-b from-gray-900 to-black rounded-3xl max-w-md w-full border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 animate-scaleIn p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              {/* Warning Icon */}
              <div className="inline-flex p-4 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-4">
                <FaExclamationTriangle className="w-12 h-12 text-yellow-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">⚠️ Important Notice</h2>
              <p className="text-gray-300 mb-6">
                If you experience any technical issues with the live demo, please check my LinkedIn post for the project demo video.
              </p>
              
              {/* LinkedIn Button */}
              <button
                onClick={() => handleLinkedInClick(pendingProject)}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 mb-3"
              >
                <FaLinkedin className="w-5 h-5" />
                View on LinkedIn
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={handleConfirmLiveDemo}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Continue to Demo
                </button>
                <button
                  onClick={() => setShowWarning(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <FaTimes className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-b from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/80 rounded-full hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/30 z-10"
            >
              <FaTimes className="w-6 h-6 text-white hover:text-purple-400" />
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent rounded-t-3xl"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-purple-500/40 text-sm text-purple-400 font-medium flex items-center gap-2">
                  {selectedProject.icon}
                  <span>{selectedProject.category}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Title & Meta */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-400">
                      <FaCalendarAlt className="w-4 h-4 text-purple-400" />
                      {selectedProject.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <FaStar className="w-4 h-4 text-yellow-400" />
                      {selectedProject.likes} Likes
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <FaCode className="text-purple-400" />
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-purple-400" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <FaCheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaTools className="text-purple-400" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-purple-500/10 rounded-full text-sm text-purple-300 border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-purple-500/20">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-xl transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Code
                  </a>
                  <button
                    onClick={() => handleLiveDemoClick(selectedProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}