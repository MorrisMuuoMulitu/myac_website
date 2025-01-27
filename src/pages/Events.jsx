import React from 'react'

    export default function Events() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Events</h1>
            <p className="text-center text-gray-700 mb-8">
              Explore photos and videos from our events, workshops, and community projects. See the impact we’re making together.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Event 1</h2>
                <p className="text-gray-700">
                  Description of Event 1.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Event 2</h2>
                <p className="text-gray-700">
                  Description of Event 2.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Event 3</h2>
                <p className="text-gray-700">
                  Description of Event 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
