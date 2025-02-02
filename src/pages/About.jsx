import React from "react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          About MYAC
        </h1>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To mobilize youth, women, people with disabilities, and
              marginalized groups in Makueni County for leadership and economic
              empowerment through innovative, sustainable development
              initiatives.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Vision
            </h2>
            <p className="text-gray-700">
              A self-reliant and inclusive Makueni County where every young
              person has the opportunity to lead, innovate, and thrive.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Integrity:</strong> We uphold honesty, transparency, and
              accountability in all our actions.
            </li>
            <li>
              <strong>Inclusivity:</strong> We champion equal opportunities for
              all, regardless of gender, ability, or background.
            </li>
            <li>
              <strong>Innovation:</strong> We leverage creativity and technology
              to address community challenges effectively.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to environmental
              stewardship and intergenerational equity.
            </li>
            <li>
              <strong>Community:</strong> We foster collaboration and collective
              action to empower our communities.
            </li>
          </ul>
        </div>

        {/* Senate Structure Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Senate Structure
          </h2>
          <p className="text-gray-700">
            The MYAC Senate consists of 60 elected representatives—two from each
            of Makueni County's 30 wards—ensuring gender balance and grassroots
            representation. The Senate plays a pivotal role in guiding the
            council’s initiatives and ensuring accountability to the community.
          </p>
        </div>

        {/* Constitution Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Our Constitution
          </h2>
          <p className="text-gray-700">
            Our constitution outlines the principles, governance structure, and
            objectives of MYAC. It serves as the foundation for our commitment
            to empowering youth and fostering sustainable development in Makueni
            County.
          </p>
          <a
            href="/path/to/myac_constitution.pdf"
            download="myac_constitution.pdf"
            className="inline-block mt-2 text-primary hover:underline font-medium"
          >
            Download the MYAC Constitution
          </a>
        </div>
      </div>
    </div>
  );
}
