import React, { useState } from 'react'
    import { Link } from 'react-router-dom'

    export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-32">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                  <img
                    src="https://ik.imagekit.io/5zp8ovb7c/MYAC/Makueni%20Youth%20Council%20Logo%20copy-1.png?updatedAt=1737573103832"
                    alt="MYAC Logo"
                    className="h-24 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/programs">Programs</NavLink>
                  <NavLink to="/impact">Impact</NavLink>
                  <NavLink to="/membership">Membership</NavLink>
                  <NavLink to="/news">News</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink to="/about">About</MobileNavLink>
                <MobileNavLink to="/programs">Programs</MobileNavLink>
                <MobileNavLink to="/impact">Impact</MobileNavLink>
                <MobileNavLink to="/membership">Membership</MobileNavLink>
                <MobileNavLink to="/news">News</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
              </div>
            </div>
          )}
        </nav>
      )
    }

    function NavLink({ to, children }) {
      return (
        <Link
          to={to}
          className="px-3 py-2 rounded-md text-sm font-medium text-primary hover:text-secondary hover:bg-gray-100 transition duration-300"
        >
          {children}
        </Link>
      )
    }

    function MobileNavLink({ to, children }) {
      return (
        <Link
          to={to}
          className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-secondary hover:bg-gray-100"
        >
          {children}
        </Link>
      )
    }
