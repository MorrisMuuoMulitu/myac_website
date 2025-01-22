import React from 'react'

    export default function Programs() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Programs</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">SDG Projects</h2>
                <p className="text-gray-700">
                  MYAC is committed to achieving the Sustainable Development Goals (SDGs) by 2030. Our projects focus on poverty reduction, quality education, gender equality, and environmental sustainability.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Leadership Training</h2>
                <p className="text-gray-700">
                  We offer leadership training programs to equip young people with the skills and confidence to take on leadership roles in their communities and beyond.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Agri-Tech Initiatives</h2>
                <p className="text-gray-700">
                  Through innovative agricultural technologies like drip irrigation and greenhouses, we empower youth to increase food production and achieve economic independence.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Success Stories</h2>
              <p className="text-gray-700">
                Meet the young leaders who have transformed their lives and communities through MYAC’s programs. Their stories inspire us to do more.
              </p>
            </div>
          </div>
        </div>
      )
    }
