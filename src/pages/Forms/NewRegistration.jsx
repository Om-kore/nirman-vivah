import { useState } from 'react'
import { FaCheckCircle, FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

export default function RegistrationForm() {
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    dob: '',
    address: '',
    gender: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    
    setTimeout(() => {
      navigate('/new') 
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen p-8 bg-[#FF6B6B] text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <FaHeart className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">New Marriage Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm space-y-6">
          <div>
            <label className="block text-lg mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg mb-2">Mobile Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 h-32 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-lg mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#FF6B6B] py-3 rounded-lg font-bold hover:bg-gray-100 text-lg"
          >
            Complete Registration
          </button>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg text-center max-w-md mx-4">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
              <p className="text-gray-600">Redirecting back to registration page...</p>
            </div>
          </div>
        )}

        <Link to="/" className="mt-8 inline-block bg-white text-[#FF6B6B] px-6 py-2 rounded-lg font-bold hover:bg-gray-100">
          Go Back
        </Link>
      </div>
    </div>
  )
}
