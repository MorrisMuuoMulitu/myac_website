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
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Color */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: "#076db9", // Primary blue color
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Optional: Overlay for darker effect */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg"
          >
            Ignite Change, Empower Youth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto drop-shadow-md"
          >
            We're building a movement of young leaders, innovators, and
            change-makers in Makueni. Join us and be part of the transformation.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#076db9" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
              onClick={handleJoinMYAC}
            >
              Join the Movement
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#076db9" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="border-2 border-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-primary hover:text-black transition-all duration-300"
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
