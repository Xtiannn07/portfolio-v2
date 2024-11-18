import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiCsharp,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-secondary">About Me</h1>
            <p className="text-gray-600 leading-relaxed">
              I'm a family guy and a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I bring ideas
              to life through clean, efficient code and intuitive interfaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in web development started during my first year in college years, and since then, I've had the
              pleasure of working on diverse projects that have helped me grow both professionally
              and personally.
            </p>
          </div>
          <div className="relative">
            <img
              src="/aboutme.jpg"
              alt="Family"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            <SkillIcon Icon={FaHtml5} name="HTML5" color="#E34F26" />
            <SkillIcon Icon={FaCss3Alt} name="CSS3" color="#1572B6" />
            <SkillIcon Icon={FaJs} name="JavaScript" color="#F7DF1E" />
            <SkillIcon Icon={SiTypescript} name="TypeScript" color="#3178C6" />
            <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" color="#06B6D4" />
            <SkillIcon Icon={SiCplusplus} name="C++" color="#00599C" />
            <SkillIcon Icon={SiCsharp} name="C#" color="#239120" />
            <SkillIcon Icon={FaPython} name="Python" color="#3776AB" />
            <SkillIcon Icon={FaReact} name="React" color="#61DAFB" />
            <SkillIcon Icon={SiNextdotjs} name="Next.js" color="#000000" />
            <SkillIcon Icon={SiMysql} name="MySQL" color="#4479A1" />
            <SkillIcon Icon={FaNode} name="Node.js" color="#339933" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillIcon = ({ Icon, name, color }: { Icon: any; name: string; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center justify-center p-2"
  >
    <Icon className="w-full h-auto max-w-[3rem]" style={{ color }} />
    <span className="mt-2 text-sm font-medium text-gray-600">{name}</span>
  </motion.div>
);

export default About;
