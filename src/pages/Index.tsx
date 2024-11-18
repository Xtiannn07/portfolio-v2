import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
  SiMicrosoftazure,
  SiNextdotjs,
} from "react-icons/si";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary"
              >
                Hi, I'm{" "}
                <span className="text-primary">Christian Marc Galingan</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-gray-600"
              >
                A passionate developer crafting beautiful web experiences
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 space-x-4"
              >
                <a
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#" // Replace with your resume URL
                  className="inline-flex items-center bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-secondary/90 transition-colors"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="lg:w-1/2 mt-10 lg:mt-0"
            >
              <img
                src="/placeholder.svg" // Replace with your image URL
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
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
              <SkillIcon Icon={SiMicrosoftazure} name="SQL" color="#0078D4" />
              <SkillIcon Icon={FaNode} name="Node.js" color="#339933" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const SkillIcon = ({ Icon, name, color }: { Icon: any; name: string; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center justify-center p-4"
  >
    <Icon className="w-12 h-12" style={{ color }} />
    <span className="mt-2 text-sm font-medium text-gray-600">{name}</span>
  </motion.div>
);

export default Index;