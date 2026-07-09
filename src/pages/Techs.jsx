import React, { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaDatabase,
  FaServer,
  FaCode,
  FaCloud,
  FaTools,
  FaStar,
  FaCheckCircle,
  FaBolt,
  FaFire,
  FaRocket,
  FaVuejs,
  FaAngular
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
  SiGraphql,
  SiRedis,
  SiSpringboot,
  SiFlutter,
  SiReactquery,
  SiApachekafka,
  SiRabbitmq
} from 'react-icons/si';

export default function Techs() {
  const [filter, setFilter] = useState('all');

  const technologies = {
    frontend: {
      title: "Frontend",
      icon: <FaCode className="w-6 h-6" />,
      color: "from-blue-600 to-blue-800",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      techs: [
        { name: "React JS", icon: <FaReact className="w-8 h-8 text-blue-400" />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, level: 95 },
        { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-orange-500" />, level: 98 },
        { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8 text-blue-500" />, level: 95 },
        { name: "JavaScript", icon: <FaJs className="w-8 h-8 text-yellow-400" />, level: 92 },
        { name: "jQuery", icon: <FaJs className="w-8 h-8 text-blue-400" />, level: 85 },
        { name: "React Native", icon: <FaReact className="w-8 h-8 text-blue-400" />, level: 80 },
        { name: "Bootstrap", icon: <FaCode className="w-8 h-8 text-purple-400" />, level: 88 },
      ]
    },
    backend: {
      title: "Backend",
      icon: <FaServer className="w-6 h-6" />,
      color: "from-green-600 to-green-800",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      techs: [
        { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-500" />, level: 92 },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-white" />, level: 90 },
        { name: "PHP", icon: <FaPhp className="w-8 h-8 text-purple-400" />, level: 88 },
        { name: "Laravel", icon: <SiLaravel className="w-8 h-8 text-red-500" />, level: 85 },
        { name: "Java", icon: <FaJava className="w-8 h-8 text-red-400" />, level: 82 },
        { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-green-400" />, level: 80 },
        { name: "Python", icon: <FaPython className="w-8 h-8 text-blue-400" />, level: 78 },
        { name: "Filament PHP", icon: <FaPhp className="w-8 h-8 text-purple-400" />, level: 75 },
        { name: "Livewire", icon: <FaPhp className="w-8 h-8 text-purple-400" />, level: 70 },
      ]
    },
    database: {
      title: "Database",
      icon: <FaDatabase className="w-6 h-6" />,
      color: "from-yellow-600 to-yellow-800",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      techs: [
        { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-400" />, level: 90 },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" />, level: 88 },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-400" />, level: 85 },
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8 text-yellow-400" />, level: 80 },
        { name: "Redis", icon: <SiRedis className="w-8 h-8 text-red-400" />, level: 75 },
      ]
    },
    devops: {
      title: "DevOps & Tools",
      icon: <FaCloud className="w-6 h-6" />,
      color: "from-purple-600 to-purple-800",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      techs: [
        { name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-400" />, level: 85 },
        { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8 text-blue-400" />, level: 78 },
        { name: "AWS", icon: <FaAws className="w-8 h-8 text-orange-400" />, level: 80 },
        { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-orange-500" />, level: 92 },
        { name: "GitHub", icon: <FaGithub className="w-8 h-8 text-white" />, level: 90 },
        { name: "Postman", icon: <FaTools className="w-8 h-8 text-orange-400" />, level: 88 },
      ]
    },
    design: {
      title: "Design Tools",
      icon: <FaTools className="w-6 h-6" />,
      color: "from-pink-600 to-pink-800",
      bg: "bg-pink-500/10",
      border: "border-pink-500/30",
      techs: [
        { name: "Figma", icon: <FaCode className="w-8 h-8 text-purple-400" />, level: 80 },
        { name: "Adobe XD", icon: <FaCode className="w-8 h-8 text-purple-400" />, level: 75 },
        { name: "Canvas", icon: <FaCode className="w-8 h-8 text-purple-400" />, level: 70 },
      ]
    },
    others: {
      title: "Other Technologies",
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-red-600 to-red-800",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      techs: [
        { name: "GraphQL", icon: <SiGraphql className="w-8 h-8 text-pink-400" />, level: 75 },
        { name: "Apache Kafka", icon: <SiApachekafka className="w-8 h-8 text-white" />, level: 70 },
        { name: "RabbitMQ", icon: <SiRabbitmq className="w-8 h-8 text-orange-400" />, level: 68 },
        { name: "Flutter", icon: <SiFlutter className="w-8 h-8 text-blue-400" />, level: 65 },
        { name: "React Query", icon: <SiReactquery className="w-8 h-8 text-red-400" />, level: 72 },
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'design', label: 'Design' },
    { id: 'others', label: 'Others' }
  ];

  const getFilteredTechs = () => {
    if (filter === 'all') {
      return Object.values(technologies).flatMap(cat => cat.techs);
    }
    return technologies[filter]?.techs || [];
  };

  const filteredTechs = getFilteredTechs();

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/40 rounded-full backdrop-blur-sm mb-4">
            <FaCode className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Tech Stack</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            My <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Technologies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                filter === cat.id
                  ? 'bg-purple-600 text-white border border-purple-400/30 shadow-lg shadow-purple-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredTechs.map((tech, index) => (
            <div
              key={index}
              className="group bg-purple-500/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 p-4 text-center hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-white text-sm font-medium mb-2">{tech.name}</h3>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-purple-600 h-1.5 rounded-full transition-all duration-500 group-hover:opacity-100"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">{tech.level}%</span>
            </div>
          ))}
        </div>

        {/* Category Cards - Show All Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <div
              key={key}
              className={`${category.bg} backdrop-blur-sm rounded-3xl border ${category.border} hover:${category.border.replace('border-', 'hover:border-').replace('/30', '/60')} transition-all duration-300 p-6 hover:scale-105 hover:shadow-2xl hover:shadow-${category.color.split(' ')[1]}/20`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-purple-500/5 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">40+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-purple-500/5 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">5+</div>
            <div className="text-sm text-gray-400">Years Learning</div>
          </div>
          <div className="text-center p-6 bg-purple-500/5 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-gray-400">Core Skills</div>
          </div>
          <div className="text-center p-6 bg-purple-500/5 rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400">100+</div>
            <div className="text-sm text-gray-400">Projects Built</div>
          </div>
        </div>

      </div>
    </div>
  );
}