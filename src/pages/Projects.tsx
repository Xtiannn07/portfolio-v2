const projects = [
  {
    title: "Project 1",
    description: "My portfolio with React, TypeScript, and Next.js",
    image: "/portfolio.jpg",
    tags: ["React", "TypeScript", "Next.js"],
    link: "#",
  },
  {
    title: "Project 2",
    description: "Full-stack application with Next.js and Tailwind CSS",
    image: "/placeholder.svg",
    tags: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    title: "Project 3",
    description: "E-commerce platform with modern technologies",
    image: "/placeholder.svg",
    tags: ["React", "Node.js"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-secondary mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
