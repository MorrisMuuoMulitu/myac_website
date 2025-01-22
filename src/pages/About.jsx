import React from 'react'

    export default function About() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">About MYAC</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Mission Statement</h2>
                <p className="text-gray-700">
                  To mobilize and empower the youth of Makueni County through leadership, education, and sustainable development initiatives, fostering a culture of innovation and inclusivity.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Vision Statement</h2>
                <p className="text-gray-700">
                  A self-reliant, inclusive, and prosperous Makueni County where every young person has the opportunity to thrive.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Core Values</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Integrity: We act with honesty and transparency in all we do.</li>
                <li>Equality: We believe in equal opportunities for all, regardless of gender, ability, or background.</li>
                <li>Innovation: We embrace creativity and technology to solve community challenges.</li>
                <li>Community: We work together to uplift and empower our communities.</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Senate Structure</h2>
              <p className="text-gray-700">
                The MYAC Senate comprises 60 elected representatives from Makueni’s 30 wards, ensuring gender balance and grassroots representation. Together, they guide the council’s initiatives and ensure accountability.
              </p>
            </div>
          </div>
        </div>
      )
    }
