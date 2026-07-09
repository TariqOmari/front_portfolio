import React, { useState } from 'react';
import { 
  Home,
  User,
  FolderGit2,
  LayoutGrid,
  Newspaper,
  Menu,
  X,
  Code2,
  Mail,
  ChevronDown,
  Rocket,
  Trophy,
  BarChart3,
  Settings,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 shadow-2xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => scrollToSection('landing')}
            className="flex items-center space-x-3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-gray-900 rounded-full p-2.5 border border-purple-400/50">
                <Code2 className="w-6 h-6 text-purple-400 group-hover:text-white transition duration-300" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300">
            Your Vision, My Code
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink onClick={() => scrollToSection('landing')} icon={<Home size={18} />} text="Home" />
            <NavLink onClick={() => scrollToSection('about')} icon={<User size={18} />} text="About" />
            <NavLink onClick={() => scrollToSection('projects')} icon={<FolderGit2 size={18} />} text="Projects" />
            <NavLink onClick={() => scrollToSection('services')} icon={<LayoutGrid size={18} />} text="Services" />
            <NavLink onClick={() => scrollToSection('blog')} icon={<Newspaper size={18} />} text="Blogs" />
            
            {/* Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white rounded-xl hover:bg-purple-500/20 transition-all duration-300 group"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 py-2 animate-fadeInDown">
                  <DropdownItem onClick={() => scrollToSection('projects')} icon={<Rocket size={18} />} text="Portfolio" />
                  <DropdownItem onClick={() => scrollToSection('about')} icon={<Trophy size={18} />} text="Achievements" />
                  <DropdownItem onClick={() => scrollToSection('companies')} icon={<BarChart3 size={18} />} text="Companies" />
                  <div className="border-t border-purple-500/20 my-2"></div>
                  <DropdownItem onClick={() => scrollToSection('techs')} icon={<Settings size={18} />} text="Tech Stack" />
                </div>
              )}
            </div>

            {/* Contact Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-white transition-all duration-300 border border-purple-500/30"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/20 space-y-2">
          <MobileNavLink onClick={() => scrollToSection('landing')} icon={<Home size={20} />} text="Home" />
          <MobileNavLink onClick={() => scrollToSection('about')} icon={<User size={20} />} text="About" />
          <MobileNavLink onClick={() => scrollToSection('projects')} icon={<FolderGit2 size={20} />} text="Projects" />
          <MobileNavLink onClick={() => scrollToSection('services')} icon={<LayoutGrid size={20} />} text="Services" />
          <MobileNavLink onClick={() => scrollToSection('blog')} icon={<Newspaper size={20} />} text="Blogs" />
          <MobileNavLink onClick={() => scrollToSection('projects')} icon={<Rocket size={20} />} text="Portfolio" />
          <MobileNavLink onClick={() => scrollToSection('about')} icon={<Trophy size={20} />} text="Achievements" />
          <MobileNavLink onClick={() => scrollToSection('companies')} icon={<Briefcase size={20} />} text="Companies" />
          <MobileNavLink onClick={() => scrollToSection('techs')} icon={<Settings size={20} />} text="Tech Stack" />
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="flex items-center justify-center gap-3 w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.2s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

// Desktop Nav Link Component
function NavLink({ onClick, icon, text }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white rounded-xl hover:bg-purple-500/20 transition-all duration-300 group"
    >
      <span className="text-purple-400 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}

// Dropdown Item Component
function DropdownItem({ onClick, icon, text }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200 rounded-xl mx-1 w-full text-left"
    >
      <span className="text-purple-400">{icon}</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ onClick, icon, text }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-4 px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-xl transition-all duration-200 w-full text-left"
    >
      <span className="text-purple-400">{icon}</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}