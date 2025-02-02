import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleJoinMYAC = () => {
    navigate("/membership");
  };

  const handleExploreImpact = () => {
    navigate("/impact");
  };

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-[#0a6eba]">
        <div className="absolute inset-0 bg-opacity-30 bg-black"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white"
          >
            Empowering Youth, Building Futures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-white"
          >
            Join us in creating a sustainable future for Makueni's youth.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0a6eba] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#0a6eba] hover:text-white transition-colors duration-300"
              onClick={handleJoinMYAC}
            >
              Join MYAC
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-[#0a6eba] transition-colors duration-300"
              onClick={handleExploreImpact}
            >
              Explore Our Impact
            </motion.button>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#0a6eba]">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Empowering youth through leadership, education, and sustainable
              development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#0a6eba]">
              Our Vision
            </h2>
            <p className="text-gray-700">
              A self-reliant, inclusive, and prosperous Makueni County.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#0a6eba]">
              Our Values
            </h2>
            <p className="text-gray-700">
              Integrity, Equality, Innovation, and Community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0a6eba]">
          Our Partners
        </h2>
        <p className="text-center text-gray-700 mb-8">
          We collaborate with organizations, institutions, and individuals who
          share our vision. Partner with us to amplify our impact and create
          lasting change.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <motion.a
            href="https://www.kenyagreencongress.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/MUSA/kgc.webp?updatedAt=1732220827687"
              alt="KGC Logo"
              className="h-16 md:h-24 w-auto"
            />
          </motion.a>
          <motion.a
            href="https://www.musaconsortium.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/MUSA/musa_logo.jpg?updatedAt=1732220026021"
              alt="MUSA Logo"
              className="h-16 md:h-24 w-auto"
            />
          </motion.a>
          <motion.a
            href="https://seedballskenya.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/Kaiti%20Greening%20Champions/images/Logos/seedballs.webp?updatedAt=1706519243006"
              alt="Seedballs Kenya Logo"
              className="h-16 md:h-24 w-auto"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
