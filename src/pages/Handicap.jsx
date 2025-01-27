import { FaWheelchair } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function HandicapRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#4ECDC4] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaWheelchair className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Handicap Marriage Registration</h1>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Special Provisions</h2>
          <ul className="space-y-4">
            <li>• Dedicated support team assistance</li>
            <li>• Priority scheduling for verification</li>
            <li>• Additional document flexibility</li>
            <li>• Fee concessions available</li>
            <li>• Accessibility-friendly centers</li>
          </ul>
        </div>

        <Link to="/" className="mt-8 inline-block bg-white text-[#4ECDC4] px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
          Go Back
        </Link>
      </div>
    </div>
  )
}