// pages/HackathonDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

function HackathonDetail() {
  const { id } = useParams()

  // You can replace this with actual API or context-based data
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Hackathon Detail</h1>
      <p>Hackathon ID: {id}</p>
      {/* Show full detail based on ID */}
    </div>
  )
}

export default HackathonDetail