import React, { useState, useEffect, useRef } from 'react';
import { 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaStar,
  FaDownload,
  FaCoffee,
  FaSpinner
} from 'react-icons/fa';
import myphoto from '../assets/portlanding.jfif';
import myCV from '../assets/tariqr.pdf';

function Landing() {
  const [codeLines, setCodeLines] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  // Ref for auto-scrolling
  const terminalContentRef = useRef(null);

  const javaCode = [
    { line: 'public class WhoIsTariq {', color: 'text-purple-400' },
    { line: '    public static void main(String[] args) {', color: 'text-purple-400' },
    { line: '        System.out.println("Loading Tariq Omari...");', color: 'text-green-400' },
    { line: '        Developer tariq = new Developer("Tariq Omari");', color: 'text-yellow-300' },
    { line: '        tariq.printBio();', color: 'text-yellow-300' },
    { line: '        tariq.showPhoto(); // 📸 Revealing the developer!', color: 'text-yellow-300' },
    { line: '    }', color: 'text-purple-400' },
    { line: '}', color: 'text-purple-400' },
  ];

  const descriptionLines = [
    '⭐ 4+ Years of Excellence',
    '',
    'Hello! I\'m Tariq Omari',
    'Full Stack Developer',
    '',
    'Crafting digital experiences with 4+ years',
    'of professional expertise. I build scalable,',
    'high-performance applications that drive results.',
    '',
    '📊 Stats:',
    '• 4+ Years Experience',
    '• 15+ Projects Delivered',
    '• 30+ Happy Clients',
  ];

  // Auto-scroll to bottom whenever content changes
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [codeLines, typingText]);

  useEffect(() => {
    // Only run once on mount
    if (isComplete) return;

    let interval;
    let timeout;

    if (isRunning && currentLine < javaCode.length) {
      interval = setInterval(() => {
        setCurrentLine(prev => {
          const next = prev + 1;
          // Only add the line if we haven't added it before
          if (next <= javaCode.length) {
            setCodeLines(prevLines => {
              // Check if line already exists to prevent duplicates
              if (prevLines.length >= next) {
                return prevLines;
              }
              return [...prevLines, javaCode[next - 1]];
            });
          }
          
          if (next >= javaCode.length) {
            clearInterval(interval);
            setIsRunning(false);
            
            timeout = setTimeout(() => {
              setShowContent(true);
              let descIndex = 0;
              const descInterval = setInterval(() => {
                if (descIndex < descriptionLines.length) {
                  setTypingText(prev => prev + descriptionLines[descIndex] + '\n');
                  descIndex++;
                } else {
                  clearInterval(descInterval);
                  setIsComplete(true);
                  setTimeout(() => {
                    setShowPhoto(true);
                  }, 500);
                }
              }, 80);
            }, 500);
          }
          return next;
        });
      }, 300);
    }

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
      clearTimeout(timeout);
    };
  }, [isRunning, currentLine, isComplete]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(128,90,213,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,90,213,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center">
            
            {/* Left Side - Java Terminal */}
            <div className="w-full">
              {/* Terminal with fixed height and scroll */}
              <div className="relative">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 bg-gray-900/90 rounded-t-xl px-3 sm:px-4 py-2 border border-gray-800/50 border-b-0">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-mono flex items-center justify-center gap-1 sm:gap-2">
                      <FaCoffee className="text-orange-400 text-[10px] sm:text-xs" />
                      WhoIsTariq.java
                    </span>
                  </div>
                  <div className="w-12 sm:w-16"></div>
                </div>
                
                {/* Terminal Content - FIXED HEIGHT WITH AUTO-SCROLL */}
                <div 
                  ref={terminalContentRef}
                  className="bg-gray-900/95 backdrop-blur-sm rounded-b-xl border border-gray-800/50 border-t-0 overflow-y-auto custom-scrollbar" 
                  style={{ height: '380px', maxHeight: '380px' }}
                >
                  <div className="p-3 sm:p-5 font-mono">
                    <div className="text-[10px] sm:text-xs leading-relaxed">
                      {/* Java Code Lines */}
                      {codeLines.map((line, index) => (
                        <div key={`line-${index}-${line.line}`} className={`${line.color} font-medium`}>
                          {line.line}
                        </div>
                      ))}
                      
                      {/* Compiling Animation */}
                      {isRunning && currentLine < javaCode.length && (
                        <div className="flex items-center gap-2 text-yellow-300 mt-1">
                          <FaSpinner className="animate-spin text-[10px] sm:text-xs" />
                          <span className="text-[10px] sm:text-xs font-medium">Compiling...</span>
                        </div>
                      )}

                      {/* Description Output */}
                      {!isRunning && showContent && (
                        <div className="mt-1">
                          <div className="text-green-400 text-[10px] sm:text-xs mb-2 font-bold">
                            ✓ Build Successful!
                          </div>
                          <pre className="text-gray-200 whitespace-pre-wrap font-mono text-[10px] sm:text-xs leading-relaxed">
                            {typingText.split('\n').map((line, index) => {
                              if (line.includes('⭐')) {
                                return <div key={`desc-${index}`} className="text-yellow-400 font-bold">{line}</div>;
                              } else if (line.includes('Hello!')) {
                                return <div key={`desc-${index}`} className="text-purple-300 font-bold text-sm sm:text-base">{line}</div>;
                              } else if (line.includes('Full Stack')) {
                                return <div key={`desc-${index}`} className="text-purple-400 font-bold text-sm sm:text-base">{line}</div>;
                              } else if (line.includes('Crafting')) {
                                return <div key={`desc-${index}`} className="text-gray-300">{line}</div>;
                              } else if (line.includes('Stats')) {
                                return <div key={`desc-${index}`} className="text-cyan-400 font-bold mt-1">{line}</div>;
                              } else if (line.includes('•')) {
                                return <div key={`desc-${index}`} className="text-green-300 font-medium">{line}</div>;
                              } else if (line === '') {
                                return <div key={`desc-${index}`} className="h-1"></div>;
                              } else {
                                return <div key={`desc-${index}`} className="text-gray-300">{line}</div>;
                              }
                            })}
                            {showCursor && <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-purple-400 ml-0.5"></span>}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Show after loading */}
              {!isRunning && showContent && (
                <div className="mt-4 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button 
                      onClick={scrollToProjects}
                      className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 border border-purple-400/30 text-sm sm:text-base"
                    >
                      View My Work
                      <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a 
                      href={myCV} 
                      download="Tariq_Resum.pdf"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 text-white font-semibold rounded-xl hover:bg-purple-500/20 hover:border-purple-500/60 transition-all duration-300 text-sm sm:text-base"
                    >
                      <FaDownload className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Download My CV
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Photo */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className={`relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] transition-all duration-1000 transform ${
                showPhoto ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 translate-x-20'
              }`}>
                <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 rounded-3xl blur transition-all duration-1000 ${
                  showPhoto ? 'opacity-60 group-hover:opacity-100' : 'opacity-0'
                } animate-spin-slow`}></div>
                
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-1.5 sm:p-2 border border-purple-500/40">
                  <div className="relative overflow-hidden rounded-2xl" style={{ height: '380px' }}>
                    <img 
                      src={myphoto}
                      alt="Tariq Omari"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Sparkles */}
                    {showPhoto && (
                      <>
                        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-20 left-12 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
                        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-1000"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations & Scrollbar Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #7c3aed);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #a78bfa, #8b5cf6);
        }
        
        /* Firefox Scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #7c3aed rgba(31, 41, 55, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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