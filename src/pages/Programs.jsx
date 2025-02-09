import React from 'react'
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'SDG Projects',
    description: 'MYAC is committed to achieving the Sustainable Development Goals (SDGs) by 2030. Our projects focus on poverty reduction, quality education, gender equality, and environmental sustainability.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/SDG_Projects_Program.webp?updatedAt=1739112841249',
    link: '/programs/sdg-projects' // Link to detailed SDG Projects page
  },
  {
    title: 'Leadership Training',
    description: 'We offer leadership training programs to equip young people with the skills and confidence to take on leadership roles in their communities and beyond.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/Leadership_Training_Program.webp?updatedAt=1739112841246',
    link: '/programs/leadership-training' // Link to detailed Leadership Training page
  },
  {
    title: 'Agri-Tech Initiatives',
    description: 'Through innovative agricultural technologies like drip irrigation and greenhouses, we empower youth to increase food production and achieve economic independence.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/Agri-Tech_Initiatives_Program.webp?updatedAt=1739112841227',
    link: '/programs/agri-tech' // Link to detailed Agri-Tech Initiatives page
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Programs</h1>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          Explore our programs designed to empower youth and drive sustainable development in Makueni County.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="event-card">
              <Link to={program.link}>
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="event-card-image"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  <Link to={program.link} className="hover:underline">
                    {program.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {program.description}
                </p>
                <Link to={program.link}>
                  <button className="event-card-button">Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
