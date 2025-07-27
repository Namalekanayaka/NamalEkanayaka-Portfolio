"use client";
import ProjectModal from "./ProjectModal";
import { useState, useEffect } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of Project One.",
      fullDescription: "This is a more detailed description of Project One.",
      image: "/13.webp",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      fullDescription: "This is a more detailed description of Project Two.",
      image: "/home-12(1).avif",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      fullDescription: "This is a more detailed description of Project Three.",
      image: "/2.avif",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".project-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex].id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProject
    );
    if (currentIndex === -1) return;

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex].id);
  };

  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <>
      <style jsx>{`
        @keyframes projectSlideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tagFloat {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .project-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card {
          background: linear-gradient(
            135deg,
            rgba(17, 17, 17, 0.9) 0%,
            rgba(31, 31, 31, 0.9) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(64, 64, 64, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(250, 204, 21, 0.1),
            transparent
          );
          transition: left 0.6s;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          border-color: rgba(250, 204, 21, 0.5);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(250, 204, 21, 0.1);
          transform: translateY(-8px);
        }

        .project-title {
          background: linear-gradient(135deg, #facc15, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-tag {
          background: rgba(250, 204, 21, 0.1);
          border: 1px solid rgba(250, 204, 21, 0.3);
          color: #facc15;
          transition: all 0.3s ease;
        }

        .project-tag:hover {
          background: rgba(250, 204, 21, 0.2);
          border-color: rgba(250, 204, 21, 0.6);
          transform: scale(1.05);
        }

        .featured-title {
          background: linear-gradient(135deg, #facc15, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .featured-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #facc15, transparent);
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.3s;
        }
        .stagger-3 {
          animation-delay: 0.5s;
        }
        .stagger-4 {
          animation-delay: 0.7s;
        }
      `}</style>

      <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8 font-mono">
        {/* Section Header */}
        <div className="text-center mb-16 project-animate">
          <div className="text-sm text-gray-400 mb-4">/featured-work/</div>
          <h2 className="text-4xl md:text-5xl font-light featured-title mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A collection of selected works showcasing innovative digital
            experiences and user-centered design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <button
              onClick={() => handleProjectClick(project.id)}
              key={index}
              className={`project-card rounded-lg p-8 text-left group project-animate stagger-${index + 1}`}
            >
              <div className="flex flex-col h-full relative z-10">
                {/* Project Number */}
                <div className="text-xs text-gray-500 mb-2 font-mono">
                  [{String(index + 1).padStart(2, "0")}]
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold project-title mb-4 group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="project-tag px-3 py-1 text-xs rounded-full font-mono"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>

                {/* View Project Link */}
                <div className="flex items-center text-xs text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  <span className="mr-2">VIEW PROJECT</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Section Info */}
        <div className="text-center mt-16 project-animate stagger-4">
          <div className="text-xs text-gray-500 font-mono">
            <p>More projects available upon request</p>
            <p className="mt-2">Updated 2025</p>
          </div>
        </div>

        {/* Modal - keeping your original functionality */}
        {selected && (
          <ProjectModal
            project={selected}
            onClose={handleCloseModal}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
          />
        )}
      </section>
    </>
  );
};

export default Project;
