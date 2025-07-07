const Project = () => {
  const projects = [
    {
      title: "Project One",
      description: "This is a brief description of Project One.",
      imageUrl: "/project1.jpg",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
    {
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      imageUrl: "/project2.jpg",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
    {
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      imageUrl: "/project3.jpg",
      link: "#",
      tags: ["React", "JavaScript", "TailwindCSS"],
    },
  ];
  return (
    <section id="projects" className=" px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500 transition-colors hoevr:shadow-sm"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag, Index) => (
                    <span
                      key={Index}
                      className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <br />

                <br />

                {project.description}
                <br />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
