import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary"
            >
              Hi, I'm <span className="text-primary">Christian Marc Galingan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto"
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
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#" // Replace this with your actual resume URL
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;