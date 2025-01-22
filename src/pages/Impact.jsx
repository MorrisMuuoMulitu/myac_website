import React from 'react'

    export default function Impact() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Our Impact</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">SDG Progress</h2>
                <p className="text-gray-700">
                  Over 3,000 youth trained in 2024 through our programs.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Success Stories</h2>
                <p className="text-gray-700">
                  Hear from beneficiaries of our initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
