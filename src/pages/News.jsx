import React from 'react'

    export default function News() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">News & Blog</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Latest News</h2>
                <p className="text-gray-700">
                  Stay updated with MYAC’s latest activities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Podcast</h2>
                <p className="text-gray-700">
                  Listen to "Youth Voices of Makueni."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Resources</h2>
                <p className="text-gray-700">
                  Download annual reports and toolkits.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
