import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaTimes, FaBars } from 'react-icons/fa'; // Import icons for hamburger and close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://ik.imagekit.io/5zp8ovb7c/MYAC/Makueni%20Youth%20Council%20Logo%20copy-1.png?updatedAt=1737573103832"
                alt="MYAC Logo"
                className="h-16 w-auto md:h-24"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/membership">Membership</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/donate">Donate</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" /> // Close icon when menu is open
              ) : (
                <FaBars className="h-6 w-6" /> // Hamburger icon when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-24 left-0 w-full bg-white shadow-md rounded-b-md overflow-hidden" // Added background and shadow
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/events">Events</MobileNavLink>
            <MobileNavLink to="/membership">Membership</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <MobileNavLink to="/donate">Donate</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-bold text-primary hover:text-secondary hover:bg-gray-100 transition duration-300"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-bold text-primary hover:text-secondary hover:bg-gray-100 transition duration-300"
    >
      {children}
    </Link>
  )
}
