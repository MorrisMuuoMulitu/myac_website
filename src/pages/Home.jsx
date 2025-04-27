import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaEye, FaHandshake, FaHeart } from 'react-icons/fa'; // Import icons

export default function Home() {
  const navigate = useNavigate();

  const handleJoinMYAC = () => {
    navigate("/membership");
  };

  const handleExploreImpact = () => {
    navigate("/impact");
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-light to-white dark:from-dark dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Color */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary to-secondary dark:from-dark dark:to-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Optional: Overlay for darker effect */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-h1 sm:text-6xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
          >
            <span className="text-gradient from-white via-secondary to-accent bg-gradient-to-br">
              Ignite Change,
              <br className="hidden sm:block" /> Empower Youth
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-body sm:text-lg md:text-xl lg:text-2xl mb-8 text-light max-w-3xl mx-auto drop-shadow-2xl leading-relaxed animate-pulse-slow"
          >
            We're building a movement of young leaders, innovators, and
            change-makers in Makueni. Join us and be part of the transformation.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-primary btn-3d shadow-xl"
              onClick={handleJoinMYAC}
            >
              Join the Movement
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-secondary btn-3d shadow-xl text-white"
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
            className="quick-link-block glass glass-dark"
          >
            <FaRocket className="quick-link-icon" />
            <h2 className="text-h3 font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-body text-gray-700 leading-relaxed">
              Empowering youth through leadership, education, and sustainable
              development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="quick-link-block glass glass-dark"
          >
            <FaEye className="quick-link-icon" />
            <h2 className="text-h3 font-semibold mb-4 text-primary">
              Our Vision
            </h2>
            <p className="text-body text-gray-700 leading-relaxed">
              A self-reliant, inclusive, and prosperous Makueni County.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="quick-link-block glass glass-dark"
          >
            <FaHandshake className="quick-link-icon" />
            <h2 className="text-h3 font-semibold mb-4 text-primary">
              Our Values
            </h2>
            <p className="text-body text-gray-700 leading-relaxed">
              Integrity, Equality, Innovation, and Community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="container mx-auto px-4 py-12 glass glass-dark rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Our Partners
        </h2>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          We collaborate with organizations, institutions, and individuals who
          share our vision. Partner with us to amplify our impact and create
          lasting change.
        </p>
        <div className="flex flex-wrap justify-center items-center md:space-x-8 space-x-4 py-4"> {/* Added flex-wrap and adjusted spacing */}
          <motion.a
            href="https://www.kenyagreencongress.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 md:mb-0 hover:scale-110 transition-transform duration-300" // Added margin for vertical spacing on mobile
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/MUSA/kgc.webp?updatedAt=1732220827687"
              alt="KGC Logo"
              className="h-16 md:h-24 w-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
          <motion.a
            href="https://www.musaconsortium.org/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 md:mb-0 hover:scale-110 transition-transform duration-300"  // Added margin for vertical spacing on mobile
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/MUSA/musa_logo.jpg?updatedAt=1732220026021"
              alt="MUSA Logo"
              className="h-16 md:h-24 w-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
          <motion.a
            href="https://seedballskenya.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 md:mb-0 hover:scale-110 transition-transform duration-300"  // Added margin for vertical spacing on mobile
          >
            <img
              src="https://ik.imagekit.io/5zp8ovb7c/Kaiti%20Greening%20Champions/images/Logos/seedballs.webp?updatedAt=1706519243006"
              alt="Seedballs Kenya Logo"
              className="h-16 md:h-24 w-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
           <motion.a
            href="https://www.example.com" // Replace with actual partner link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 md:mb-0 hover:scale-110 transition-transform duration-300"  // Added margin for vertical spacing on mobile
          >
            <img
              src="https://via.placeholder.com/150?text=Partner+Logo" // Placeholder logo - replace with actual logo
              alt="Partner Logo"
              className="h-16 md:h-24 w-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
           <motion.a
            href="https://www.example.com" // Replace with actual partner link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 md:mb-0 hover:scale-110 transition-transform duration-300"  // Added margin for vertical spacing on mobile
          >
            <img
              src="https://via.placeholder.com/150?text=Partner+Logo" // Placeholder logo - replace with actual logo
              alt="Partner Logo"
              className="h-16 md:h-24 w-auto hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
