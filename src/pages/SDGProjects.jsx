import React from 'react';

function SDGProjects() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">SDG Projects</h1>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          Detailed information about MYAC's Sustainable Development Goals projects.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Goals</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Describe the goals of MYAC's SDG projects. What specific SDGs are you addressing? What are the intended outcomes?]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Activities and Initiatives</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Describe the activities and initiatives undertaken within MYAC's SDG projects. What specific actions are being taken to achieve the goals?]
          </p>
        </section>

         <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Impact and Achievements</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Highlight the impact and achievements of MYAC's SDG projects. Include data, success stories, and testimonials if available.]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Get Involved</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Explain how people can get involved with MYAC's SDG projects. Include information about volunteering, partnerships, or donations.]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Gallery</h2>
          <p className="text-gray-700 leading-relaxed">
            [Placeholder: Image gallery or video section showcasing MYAC's SDG projects in action.]
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

export default SDGProjects;
