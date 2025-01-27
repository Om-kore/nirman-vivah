import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

export default function SearchRegistration() {
  return (
    <div className="min-h-screen p-8 bg-[#6C5CE7] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaSearch className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Search Marriage Records</h1>
        </div>

        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Search by Registration Number" 
              className="w-full p-3 rounded-lg text-gray-800"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="date" 
                className="w-full p-3 rounded-lg text-gray-800"
              />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full p-3 rounded-lg text-gray-800"
              />
            </div>
            <button className="w-full bg-white text-[#6C5CE7] py-3 rounded-lg font-bold hover:bg-gray-100">
              Search Now
            </button>
          </div>
        </div>

        <Link to="/" className="mt-8 inline-block bg-white text-[#6C5CE7] px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
          Go Back
        </Link>
      </div>
    </div>
  )
}