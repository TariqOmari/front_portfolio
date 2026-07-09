import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaClock,
  FaEye,
  FaHeart,
  FaComment,
  FaShareAlt,
  FaLink,
  FaRocket,
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaLaptop,
  FaMobile,
  FaWhatsapp
} from 'react-icons/fa';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt: "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and Kubernetes for enterprise-grade applications.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      date: "June 15, 2026",
      author: "Tariq Omari",
      category: "Backend Development",
      readTime: "8 min read",
      views: 1245,
      likes: 89,
      comments: 23,
      tags: ["Microservices", "Node.js", "Docker", "Kubernetes"],
      featured: true
    },
    {
      id: 2,
      title: "Modern Frontend Development with React and Tailwind CSS",
      excerpt: "Discover the power of React combined with Tailwind CSS for building beautiful, responsive, and performant user interfaces.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      date: "June 10, 2026",
      author: "Tariq Omari",
      category: "Frontend Development",
      readTime: "6 min read",
      views: 987,
      likes: 67,
      comments: 15,
      tags: ["React", "Tailwind CSS", "Frontend", "UI/UX"],
      featured: false
    },
    {
      id: 3,
      title: "Mastering Database Design: SQL vs NoSQL",
      excerpt: "A comprehensive guide to choosing between SQL and NoSQL databases for your next project, with real-world use cases and best practices.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      date: "June 5, 2026",
      author: "Tariq Omari",
      category: "Database",
      readTime: "10 min read",
      views: 1567,
      likes: 112,
      comments: 34,
      tags: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "Database Design"],
      featured: false
    },
    {
      id: 4,
      title: "Deploying Applications on AWS: A Complete Guide",
      excerpt: "Step-by-step guide to deploying your applications on AWS, covering EC2, S3, RDS, Lambda, and other essential services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      date: "May 28, 2026",
      author: "Tariq Omari",
      category: "Cloud & DevOps",
      readTime: "12 min read",
      views: 2341,
      likes: 156,
      comments: 42,
      tags: ["AWS", "Cloud", "DevOps", "Deployment", "CI/CD"],
      featured: false
    },
    {
      id: 5,
      title: "Building RESTful APIs with Express.js and MongoDB",
      excerpt: "Learn how to build robust RESTful APIs using Express.js and MongoDB, with authentication, validation, and error handling.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      date: "May 20, 2026",
      author: "Tariq Omari",
      category: "API Development",
      readTime: "7 min read",
      views: 876,
      likes: 54,
      comments: 18,
      tags: ["Express.js", "MongoDB", "REST API", "Backend"],
      featured: false
    },
    {
      id: 6,
      title: "Container Orchestration with Kubernetes: Best Practices",
      excerpt: "Deep dive into Kubernetes container orchestration, covering pods, services, deployments, and scaling strategies.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      date: "May 15, 2026",
      author: "Tariq Omari",
      category: "DevOps",
      readTime: "9 min read",
      views: 1234,
      likes: 78,
      comments: 29,
      tags: ["Kubernetes", "Docker", "Container", "Orchestration"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mb-4">
            <FaRocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge, experiences, and insights about software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

     
       

        {/* Load More */}
   

        {/* Footer */}
        <footer className="mt-20 border-t border-purple-500/20 pt-12">
          {/* Quick Links & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-black rounded-full p-2 border border-purple-400/50">
                    <FaCode className="w-6 h-6 text-purple-400 group-hover:text-white transition duration-300" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  Tariq Omari
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating amazing digital experiences through innovative software solutions. Let's build something extraordinary together.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/TariqOmari" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <FaGithub className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/tariq-omari-%F0%9F%87%B5%F0%9F%87%B8-b66942280/" target="_blank" rel="noopener noreferrer" className="p-2 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                  <FaLinkedin className="w-4 h-4 text-gray-400 hover:text-white" />
                </a>
              
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Me</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Projects</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEnvelope className="w-4 h-4 text-purple-400" />
                  <a href="mailto:tariqomarii163@gmail.com" className="hover:text-purple-400 transition-colors">
                    tariqomarii163@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaPhone className="w-4 h-4 text-purple-400" />
                  <a href="tel:+93778056257" className="hover:text-purple-400 transition-colors">
                    +93 778056257
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-purple-400" />
                  Kabul, Afghanistan
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="mailto:tariqomarii163@gmail.com" className="px-4 py-2 bg-purple-500/10 rounded-xl text-purple-400 text-sm border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300">
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

          {/* Footer Bottom */}
          <div className="border-t border-purple-500/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Tariq Omari. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}