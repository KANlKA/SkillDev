import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const trendingCourses = [
    { id: 1, title: 'React Fundamentals', progress: 70 },
    { id: 2, title: 'Node.js Basics', progress: 45 },
    { id: 3, title: 'Blockchain Development', progress: 30 }
  ]

  const upcomingHackathons = [
    { id: 1, title: 'Web3 Hackathon', date: '2024-03-15', organizer: 'ETHGlobal' },
    { id: 2, title: 'AI Innovation', date: '2024-03-20', organizer: 'DevPost' }
  ]

  const topLearners = [
    { id: 1, name: 'John Doe', xp: 15000 },
    { id: 2, name: 'Jane Smith', xp: 14500 },
    { id: 3, name: 'Mike Johnson', xp: 14000 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Level Up Your Skills & Earn Rewards!</h1>
          <p className="text-xl mb-8">Master new technologies, complete challenges, and earn certificates</p>
          <div className="space-x-4">
            <Link to="/learn" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Start Learning
            </Link>
            <Link to="/challenges" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
              Explore Challenges
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Trending Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingCourses.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <Link to={`/learn/${course.id}`} className="mt-4 text-indigo-600 font-medium hover:text-indigo-500 block">
                  View Course →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingHackathons.map(hackathon => (
              <div key={hackathon.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                <p className="text-gray-600 mb-2">Date: {hackathon.date}</p>
                <p className="text-gray-600 mb-4">Organizer: {hackathon.organizer}</p>
                <Link to="/hackathons" className="text-indigo-600 font-medium hover:text-indigo-500">
                  Register Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Top Learners</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {topLearners.map((learner, index) => (
              <div key={learner.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-indigo-600 w-8">{index + 1}</span>
                  <span className="font-medium">{learner.name}</span>
                </div>
                <span className="text-gray-600">{learner.xp.toLocaleString()} XP</span>
              </div>
            ))}
            <div className="p-4 text-center">
              <Link to="/leaderboard" className="text-indigo-600 font-medium hover:text-indigo-500">
                View Full Leaderboard →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home