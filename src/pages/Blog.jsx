import React from 'react'

    export default function Blog() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Blog</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Blog Post 1</h2>
                <p className="text-gray-700">
                  This is a sample blog post. You can add more content here.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Blog Post 2</h2>
                <p className="text-gray-700">
                  This is another sample blog post. You can add more content here.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Blog Post 3</h2>
                <p className="text-gray-700">
                  This is yet another sample blog post. You can add more content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
