const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-secondary">About Me</h1>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I bring ideas
              to life through clean, efficient code and intuitive interfaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in web development started [X] years ago, and since then, I've had the
              pleasure of working on diverse projects that have helped me grow both professionally
              and personally.
            </p>
            <div className="pt-6">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;