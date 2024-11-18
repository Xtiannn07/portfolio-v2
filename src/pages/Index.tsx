import { motion } from "framer-motion";
import { Download } from "lucide-react";

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
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary"
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
                A passionate developer, ready to explore and indulge web experiences
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xs mx-auto lg:mx-0 sm:max-w-md justify-center lg:justify-start"
              >
                <a
                  href="/contact"
                  className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-primary/90 transition-colors text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/14nkydbnYY3w281OM0As4ob-9KECDTi9S/view?usp=sharing" // Replace with your resume URL
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary text-secondary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-secondary/90 transition-colors"
                  download
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Resume
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
                src="/Gradpic1.JPG" // Replace with your image URL
                alt="Profile"
                className="rounded-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-3 sm:my-4 mx-auto w-3/4 shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
