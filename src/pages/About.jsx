import React from "react";
import { FaUsers, FaChartLine, FaLightbulb, FaLeaf, FaHandHoldingHeart } from 'react-icons/fa'; // Import icons

const CoreValueCard = ({ icon, title, description }) => (
  <div className="core-value-card">
    {icon}
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);


export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          About MYAC
        </h1>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-h2 font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-body text-gray-700 leading-relaxed">
              To mobilize youth, women, people with disabilities, and
              marginalized groups in Makueni County for leadership and economic
              empowerment through innovative, sustainable development
              initiatives.
            </p>
          </section>
          <section>
            <h2 className="text-h2 font-semibold mb-4 text-primary">
              Our Vision
            </h2>
            <p className="text-body text-gray-700 leading-relaxed">
              A self-reliant and inclusive Makueni County where every young
              person has the opportunity to lead, innovate, and thrive.
            </p>
          </section>
        </div>
         <hr className="border-t-2 border-gray-200 my-8" />

        {/* Core Values Section */}
        <section className="mt-8">
          <h2 className="text-h2 font-semibold mb-8 text-primary text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CoreValueCard
              icon={<FaUsers className="core-value-icon" />}
              title="Integrity"
              description="We uphold honesty, transparency, and accountability in all our actions."
            />
            <CoreValueCard
              icon={<FaChartLine className="core-value-icon" />}
              title="Inclusivity"
              description="We champion equal opportunities for all, regardless of gender, ability, or background."
            />
            <CoreValueCard
              icon={<FaLightbulb className="core-value-icon" />}
              title="Innovation"
              description="We leverage creativity and technology to address community challenges effectively."
            />
             <CoreValueCard
              icon={<FaLeaf className="core-value-icon" />}
              title="Sustainability"
              description="We are committed to environmental stewardship and intergenerational equity."
            />
            <CoreValueCard
              icon={<FaHandHoldingHeart className="core-value-icon" />}
              title="Community"
              description="We foster collaboration and collective action to empower our communities."
            />
          </div>
        </section>

        <hr className="border-t-2 border-gray-200 my-8" />

        {/* Senate Structure Section */}
        <section className="mt-8">
          <h2 className="text-h2 font-semibold mb-4 text-primary">
            Senate Structure
          </h2>
          <p className="text-body text-gray-700 leading-relaxed">
            The MYAC Senate consists of 60 elected representatives—two from each
            of Makueni County's 30 wards—ensuring gender balance and grassroots
            representation. The Senate plays a pivotal role in guiding the
            council’s initiatives and ensuring accountability to the community.
          </p>
        </section>

        <hr className="border-t-2 border-gray-200 my-8" />

        {/* Constitution Section */}
        <section className="mt-8">
          <h2 className="text-h2 font-semibold mb-4 text-primary">
            Our Constitution
          </h2>
          <p className="text-body text-gray-700 leading-relaxed">
            Our constitution outlines the principles, governance structure, and
            objectives of MYAC. It serves as the foundation for our commitment
            to empowering youth and fostering sustainable development in Makueni
            County.
          </p>
          <a
            href="/path/to/myac_constitution.pdf"
            download="myac_constitution.pdf"
            className="constitution-download-button"
          >
            Download the MYAC Constitution
          </a>
        </section>
      </div>
    </div>
  );
}
