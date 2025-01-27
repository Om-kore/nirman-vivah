import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function UpdateRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#FFD93D] text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaEdit className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Update Registration</h1>
        </div>

        <div className="bg-white/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">What You Can Update</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/50 rounded">Contact Information</div>
            <div className="p-4 bg-white/50 rounded">Address Details</div>
            <div className="p-4 bg-white/50 rounded">Marriage Preferences</div>
            <div className="p-4 bg-white/50 rounded">Documentation</div>
          </div>
        </div>

        <Link to="/" className="mt-8 inline-block bg-gray-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-700">
          Go Back
        </Link>
      </div>
    </div>
  )
}