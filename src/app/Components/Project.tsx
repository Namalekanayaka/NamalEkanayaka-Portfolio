const Project = () => {
  const projects = [
    {
      title: "Project One",
      description: "This is a brief description of Project One.",
      imageUrl: "/project1.jpg",
      link: "#",
      tags: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      imageUrl: "/project2.jpg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      imageUrl: "/project3.jpg",
      link: "#",
    },
  ];
  return (
    <section id="projects" className=" px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index}>{project.title}</div>
        ))}
      </div>
    </section>
  );
};
export default Project;
