import React from 'react'

    export default function Contact() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border rounded-lg"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white p-2 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    }
