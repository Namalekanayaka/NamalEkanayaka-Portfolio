"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

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
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500 transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-300 mt-3">
                {project.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default Project;
