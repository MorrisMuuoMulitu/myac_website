import React from 'react'
    import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

    export default function Footer() {
      return (
        <footer className="bg-[#0a6eba] text-white py-12 mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">About MYAC</h2>
                <p className="text-gray-100">
                  The Makueni Youth Advisory Council (MYAC) is dedicated to empowering youth through leadership, education, and sustainable development initiatives.
                </p>
              </div>

              {/* Contact Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-100">
                  <strong>Phone:</strong> +254705329860
                </p>
                <p className="text-gray-100">
                  <strong>Email:</strong> info@myac.org
                </p>
              </div>

              {/* Social Media Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-white transition duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-white transition duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-white transition duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-white transition duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Designed By Section */}
            <div className="mt-8 border-t border-gray-300 pt-8 text-center">
              <p className="text-gray-100">
                Designed by{' '}
                <a
                  href="https://ottopad.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Ottopad
                </a>
              </p>
            </div>
          </div>
        </footer>
      )
    }
