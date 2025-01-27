import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function NewRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#FF6B6B] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaHeart className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">New Marriage Registration</h1>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Registration Process</h2>
          <ol className="space-y-4 list-decimal list-inside">
            <li>Create an account with basic details</li>
            <li>Verify your email and mobile number</li>
            <li>Upload required documents (ID proof, age proof)</li>
            <li>Pay registration fee online</li>
            <li>Schedule appointment for verification</li>
          </ol>

          {/* Register Now Button */}
          <div className="mt-8 text-center">
            <Link 
              to="/register" 
              className="inline-block bg-white text-[#FF6B6B] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>
        </div>

        <Link to="/" className="mt-8 inline-block bg-white text-[#FF6B6B] px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
          Go Back
        </Link>
      </div>
    </div>
  )
}