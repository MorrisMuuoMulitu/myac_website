import React from 'react'

const events = [
  {
    title: '2024 Youth Agri-Tech Expo',
    description: 'Showcasing the latest innovations in agricultural technology and empowering youth in agri-business.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/2024_Youth_Agri-Tech_Expo.webp?updatedAt=1737580818242',
    eventUrl: 'https://www.example.com/agri-tech-expo', // Replace with actual event URL if available
    dateTime: 'July 15, 2024'
  },
  {
    title: 'Leadership and Innovation Workshop',
    description: 'A workshop focused on developing leadership skills and fostering innovation among young leaders.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/Leadership_and_Innovation_Workshop.webp?updatedAt=1737580818238',
    eventUrl: 'https://www.example.com/leadership-workshop', // Replace with actual event URL if available
    dateTime: 'August 22, 2024'
  },
  {
    title: 'Community Clean-Up Drive',
    description: 'Youth-led initiative to promote environmental sustainability through a community clean-up.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/Community_Clean-Up_Drive.webp?updatedAt=1737580818241',
    eventUrl: 'https://www.example.com/clean-up-drive', // Replace with actual event URL if available
    dateTime: 'September 10, 2024'
  },
   {
    title: 'MYAC General Meeting',
    description: 'General Meeting for MYAC members to discuss council activities and future plans.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/MYAC_General_Meeting.webp?updatedAt=1737581814384',
    eventUrl: 'https://www.example.com/general-meeting', // Replace with actual event URL if available
    dateTime: 'October 25, 2024'
  },
    {
    title: 'Financial Literacy Workshop',
    description: 'Workshop to empower youth with financial management skills for personal and entrepreneurial success.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/Financial_Literacy_Workshop.webp?updatedAt=1737581814285',
    eventUrl: 'https://www.example.com/financial-literacy', // Replace with actual event URL if available
    dateTime: 'November 15, 2024'
  },
    {
    title: 'End-of-Year Celebration',
    description: 'Celebrating the achievements and milestones of MYAC and its members throughout the year.',
    imageUrl: 'https://ik.imagekit.io/5zp8ovb7c/MYAC/End-of-Year_Celebration.webp?updatedAt=1737581814273',
    eventUrl: 'https://www.example.com/end-of-year-celebration', // Replace with actual event URL if available
    dateTime: 'December 20, 2024'
  },
]

export default function Events() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Events</h1>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          Explore photos and videos from our events, workshops, and community projects. See the impact we’re making together.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="event-card-image"
                />
              </a>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  <a href={event.eventUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {event.title}
                  </a>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {event.description}
                </p>
                {event.dateTime && <p className="text-gray-500 text-sm mb-2">Date: {event.dateTime}</p>}
                <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
                  <button className="event-card-button">Learn More</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
