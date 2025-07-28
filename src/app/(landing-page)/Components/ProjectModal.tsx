import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
}: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  return (
    <>
      <style jsx global>{`
        /* Schitt's Creek inspired elegant animations */
        @keyframes luxuryTitle {
          0% {
            opacity: 0;
            transform: translateY(60px);
            letter-spacing: 12px;
            filter: blur(4px);
          }
          40% {
            opacity: 0.3;
            transform: translateY(30px);
            letter-spacing: 8px;
            filter: blur(2px);
          }
          70% {
            opacity: 0.7;
            transform: translateY(10px);
            letter-spacing: 4px;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: normal;
            filter: blur(0);
          }
        }

        @keyframes modalEntrance {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes gooeyReveal {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(3px);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-5px);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes elegantGlow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
            filter: brightness(1);
          }
          50% {
            text-shadow:
              0 0 20px rgba(250, 204, 21, 0.6),
              0 0 40px rgba(250, 204, 21, 0.4),
              0 0 60px rgba(250, 204, 21, 0.2);
            filter: brightness(1.1);
          }
        }

        @keyframes tagMorph {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateY(45deg);
            filter: blur(2px);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05) rotateY(0deg);
            filter: blur(0.5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
            filter: blur(0);
          }
        }

        @keyframes backgroundFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.05;
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
            opacity: 0.08;
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
            opacity: 0.03;
          }
        }

        .luxury-title {
          animation: ${reducedMotion
            ? "gooeyReveal 0.8s ease forwards"
            : "luxuryTitle 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards"};
        }

        .modal-entrance {
          animation: modalEntrance 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .gooey-reveal {
          opacity: 0;
          animation: gooeyReveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .elegant-glow {
          animation: ${reducedMotion
            ? "none"
            : "elegantGlow 4s ease-in-out infinite"};
        }

        .tag-morph {
          animation: ${reducedMotion
            ? "gooeyReveal 0.6s ease forwards"
            : "tagMorph 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards"};
        }

        .floating-bg {
          animation: ${reducedMotion
            ? "none"
            : "backgroundFloat 8s ease-in-out infinite"};
        }

        .stagger-1 {
          animation-delay: 0.2s;
        }
        .stagger-2 {
          animation-delay: 0.4s;
        }
        .stagger-3 {
          animation-delay: 0.6s;
        }
        .stagger-4 {
          animation-delay: 0.8s;
        }
        .stagger-5 {
          animation-delay: 1s;
        }
        .stagger-6 {
          animation-delay: 1.2s;
        }

        .gooey-container {
          filter: url(#gooey);
        }

        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #facc15;
          border-radius: 2px;
        }
      `}</style>

      {/* SVG Filter for Gooey Effect */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50 p-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400 opacity-5 rounded-full floating-bg"></div>
          <div
            className="absolute top-1/3 right-20 w-24 h-24 border border-yellow-400 opacity-3 rounded-full floating-bg"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 border border-yellow-400 opacity-2 rounded-full floating-bg"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div
          className={`bg-black border border-gray-800 rounded-none w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl font-mono gooey-container ${isVisible ? "modal-entrance" : ""}`}
        >
          {/* Elegant Header */}
          <div className="relative bg-black border-b border-gray-800 p-8 sm:p-12">
            <div className="max-w-6xl mx-auto">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="text-xs text-yellow-400 leading-tight h-full overflow-hidden">
                  {Array(8)
                    .fill(undefined)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="floating-bg"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        EXPERIENCE DESIGN • UX/UI • PRODUCT DESIGN • DIGITAL
                        TRANSFORMATION •
                      </div>
                    ))}
                </div>
              </div>

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex-1 pr-8">
                  <div className="gooey-reveal stagger-1">
                    <div className="text-sm text-gray-400 mb-6 font-mono tracking-wide">
                      /project-showcase/
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-yellow-400 leading-tight mb-6 luxury-title elegant-glow">
                    {project.title}
                  </h1>

                  <div className="gooey-reveal stagger-2">
                    <div className="w-24 h-1 bg-yellow-400 mb-4"></div>
                    <div className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                      {project.description}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-yellow-400 transition-all duration-500 hover:rotate-180 transform p-3 border border-gray-700 hover:border-yellow-400 gooey-reveal stagger-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 sm:p-12 overflow-y-auto max-h-[calc(95vh-250px)] custom-scrollbar">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Project Image - Takes 2 columns */}
                <div className="lg:col-span-2 gooey-reveal stagger-3">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-gray-900 border border-gray-800 hover:border-yellow-400 rounded-lg overflow-hidden transition-all duration-700">
                      <div className="relative w-full h-64 sm:h-80 lg:h-96">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>

                        {/* Elegant overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="text-yellow-400 text-2xl font-light mb-4 elegant-glow">
                              View Project
                            </div>
                            <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details - Takes 1 column */}
                <div className="space-y-8">
                  {/* Full Description */}
                  <div className="gooey-reveal stagger-4">
                    <h3 className="text-sm text-gray-400 mb-4 font-mono tracking-wider">
                      /description/
                    </h3>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {project.fullDescription}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="gooey-reveal stagger-5">
                    <h3 className="text-sm text-gray-400 mb-4 font-mono tracking-wider">
                      /technologies/
                    </h3>
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                      <div className="space-y-3">
                        {project.tags.map((tag, index) => (
                          <div
                            key={index}
                            className={`inline-block mr-3 mb-2 px-4 py-2 text-xs border border-yellow-400 border-opacity-30 text-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 hover:border-opacity-100 transition-all duration-500 cursor-default tag-morph`}
                            style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="gooey-reveal stagger-6">
                    <div className="text-xs text-gray-500 font-mono space-y-2">
                      <div>/project-meta/</div>
                      <div>Status: Completed</div>
                      <div>Year: 2025</div>
                      <div>Type: Web Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Footer */}
          <div className="bg-black border-t border-gray-800 p-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <button
                onClick={onPrev}
                className="flex items-center space-x-3 px-6 py-3 text-sm text-gray-400 hover:text-yellow-400 transition-all duration-500 border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-5 font-mono"
              >
                <span>←</span>
                <span>/previous/</span>
              </button>

              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>

              <button
                onClick={onNext}
                className="flex items-center space-x-3 px-6 py-3 text-sm text-gray-400 hover:text-yellow-400 transition-all duration-500 border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-5 font-mono"
              >
                <span>/next/</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
