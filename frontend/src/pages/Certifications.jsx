import React from 'react';
import { useState } from 'react'

function Certifications() {
  const [selectedType, setSelectedType] = useState('all')

  const certificates = [
    {
      id: 1,
      title: 'React Development',
      type: 'course',
      issueDate: '2024-01-15',
      txHash: '0x123...abc',
      badge: '🏆'
    },
    {
      id: 2,
      title: 'Problem Solving Expert',
      type: 'challenge',
      issueDate: '2024-02-01',
      txHash: '0x456...def',
      badge: '🎯'
    },
    // Add more certificates...
  ]

  const filteredCertificates = certificates.filter(cert => 
    selectedType === 'all' || cert.type === selectedType
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filter Buttons */}
      <div className="mb-8 flex space-x-4">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-lg ${
            selectedType === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Certificates
        </button>
        <button
          onClick={() => setSelectedType('course')}
          className={`px-4 py-2 rounded-lg ${
            selectedType === 'course'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Course Certificates
        </button>
        <button
          onClick={() => setSelectedType('challenge')}
          className={`px-4 py-2 rounded-lg ${
            selectedType === 'challenge'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Challenge Certificates
        </button>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map(certificate => (
          <div key={certificate.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{certificate.badge}</span>
              <span className="text-sm text-gray-500">
                Issued on {new Date(certificate.issueDate).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-4">{certificate.title}</h3>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <p>Type: {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}</p>
                <p className="font-mono">TX: {certificate.txHash}</p>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Download PDF
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200">
                  Verify
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications