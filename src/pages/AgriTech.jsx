import React from 'react';

function AgriTech() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Agri-Tech Initiatives</h1>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          Detailed information about MYAC's Agri-Tech Initiatives.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Goals</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Describe the goals of MYAC's Agri-Tech Initiatives. How are you using technology to improve agriculture? What are the intended outcomes for youth and the community?]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies and Methods</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Describe the specific technologies and methods used in MYAC's Agri-Tech Initiatives. This could include drip irrigation, greenhouses, smart farming techniques, mobile apps for agriculture, etc.]
          </p>
        </section>

         <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Impact and Economic Empowerment</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Highlight the impact of MYAC's Agri-Tech Initiatives on economic empowerment. How are these initiatives improving livelihoods, creating jobs, and increasing food security?]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Support Our Initiatives</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Explain how people can support MYAC's Agri-Tech Initiatives. This could include donations, partnerships, providing expertise, or participating in programs.]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Gallery</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Image gallery or video section showcasing MYAC's Agri-Tech Initiatives in action.]
          </p>
          {/* Placeholder for Image Gallery/Video */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                [Image/Video Placeholder]
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                [Image/Video Placeholder]
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                [Image/Video Placeholder]
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AgriTech;
