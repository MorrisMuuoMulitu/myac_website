import React from "react";
import { 
  FaUsers, 
  FaChartLine, 
  FaLightbulb, 
  FaLeaf, 
  FaHandHoldingHeart 
} from 'react-icons/fa';

const ValueItem = ({ icon, title, description }) => (
  <div className="mb-8 group relative">
    <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent dark:via-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="flex items-center mb-3">
      <div className="text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400 pl-9">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] bg-gradient-to-br from-primary to-secondary dark:from-dark dark:to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              <span className="text-gradient from-white via-secondary to-accent bg-gradient-to-br">
                ABOUT MYAC
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-pulse-slow">
              Empowering youth for sustainable development in Makueni County
            </p>
            <button className="btn-3d px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl">
              <span className="relative z-10">Learn More ↓</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 -mt-20 relative z-10">
        {/* Floating content container */}
        <div className="glass glass-dark rounded-3xl p-12 backdrop-blur-lg">

        {/* Mission & Vision */}
        <div className="glass glass-dark grid md:grid-cols-2 gap-16 mb-24 relative">
          {/* Decorative element */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-100 dark:bg-gray-800 opacity-30"></div>
          
          <div className="relative z-10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-primary dark:text-blue-400 text-xl">01</span>
              </div>
              <h2 className="text-2xl font-light text-gray-900 dark:text-white pt-2">Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-16">
              To mobilize youth, women, people with disabilities, and
              marginalized groups in Makueni County for leadership and economic
              empowerment through innovative, sustainable development
              initiatives.
            </p>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-primary dark:text-blue-400 text-xl">02</span>
              </div>
              <h2 className="text-2xl font-light text-gray-900 dark:text-white pt-2">Vision</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-16">
              A self-reliant and inclusive Makueni County where every young
              person has the opportunity to lead, innovate, and thrive.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="glass glass-dark mb-20 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-center text-gray-900 dark:text-white mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueItem
              icon={<FaUsers className="text-xl" />}
              title="Integrity"
              description="We uphold honesty, transparency, and accountability in all our actions."
            />
            <ValueItem
              icon={<FaChartLine className="text-xl" />}
              title="Inclusivity"
              description="We champion equal opportunities for all, regardless of gender, ability, or background."
            />
            <ValueItem
              icon={<FaLightbulb className="text-xl" />}
              title="Innovation"
              description="We leverage creativity and technology to address community challenges effectively."
            />
            <ValueItem
              icon={<FaLeaf className="text-xl" />}
              title="Sustainability"
              description="We are committed to environmental stewardship and intergenerational equity."
            />
            <ValueItem
              icon={<FaHandHoldingHeart className="text-xl" />}
              title="Community"
              description="We foster collaboration and collective action to empower our communities."
            />
          </div>
        </div>

        {/* Senate Structure */}
        <div className="glass glass-dark mb-20 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Senate Structure</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The MYAC Senate consists of 60 elected representatives—two from each
            of Makueni County's 30 wards—ensuring gender balance and grassroots
            representation. The Senate plays a pivotal role in guiding the
            council's initiatives and ensuring accountability to the community.
          </p>
        </div>

        {/* Constitution */}
        <div className="glass glass-dark p-8 rounded-lg">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">Our Constitution</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Our constitution outlines the principles, governance structure, and
            objectives of MYAC. It serves as the foundation for our commitment
            to empowering youth and fostering sustainable development in Makueni
            County.
          </p>
          <a
            href="/path/to/myac_constitution.pdf"
            download="myac_constitution.pdf"
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
          >
            Download Constitution
          </a>
        </div>
      </div>
    </div>
  </div>
);
}
