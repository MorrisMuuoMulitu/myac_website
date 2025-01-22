import React from 'react'
    import { motion } from 'framer-motion'

    export default function Home() {
      return (
        <div className="min-h-screen pt-24 bg-white">
          {/* Hero Section */}
          <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0073E6] to-[#00A8E8]">
            <div className="absolute inset-0 bg-opacity-50 bg-white"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                Empowering Youth, Building Futures
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl mb-8 text-white"
              >
                Join us in creating a sustainable future for Makueni's youth.
              </motion.p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#0073E6] px-6 py-3 rounded-lg font-semibold shadow-lg"
                >
                  Join MYAC
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                >
                  Explore Our Impact
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-[#0073E6]">Our Mission</h2>
                <p className="text-gray-700">
                  Empowering youth through leadership, education, and sustainable development.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-[#0073E6]">Our Vision</h2>
                <p className="text-gray-700">
                  A self-reliant, inclusive, and prosperous Makueni County.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-[#0073E6]">Our Values</h2>
                <p className="text-gray-700">
                  Integrity, Equality, Innovation, and Community.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
