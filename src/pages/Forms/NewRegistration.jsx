import { useState } from 'react'
import { FaCheckCircle, FaHeart, FaFileUpload } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import maharashtraData from '../../../public/data/citidata'

export default function RegistrationForm() {
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    dob: '',
    address: '',
    gender: '',
    caste: '',
    education: '',
    photo: null,
    fatherName: '',
    motherName: '',
    state: '',
    district: '',
    taluka: '',
    city: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    
    setTimeout(() => {
      navigate('/new') 
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => {
      const newData = { 
        ...prev, 
        [name]: files ? files[0] : value 
      }
      
      // Reset dependent fields when parent changes
      if (name === 'state') {
        newData.district = ''
        newData.taluka = ''
        newData.city = ''
      } else if (name === 'district') {
        newData.taluka = ''
        newData.city = ''
      } else if (name === 'taluka') {
        newData.city = ''
      }
      return newData
    })
}

// Get selected district details
const selectedDistrict = maharashtraData.districts.find(
  d => d.name === formData.district
)

// Get selected taluka details
const selectedTaluka = selectedDistrict?.talukas.find(
  t => t.name === formData.taluka
)


  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#2C4E2D] text-white p-6 rounded-t-lg mb-8">
          <div className="flex items-center justify-center space-x-4">
            {/* <FaHeart className="w-12 h-12" /> */}
            <div>
              <h1 className="text-3xl font-bold">New Marriage Registration</h1>
              {/* <p className="text-sm mt-1">Ministry of Home Affairs, Government of India</p> */}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-lg shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                />
              </div>


              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                >
                  <option value="">Select State</option>
                  <option value={maharashtraData.state}>
                    {maharashtraData.state}
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  District <span className="text-red-500">*</span>
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                >
                  <option value="">Select District</option>
                  {maharashtraData.districts.map(district => (
                    <option key={district.name} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Taluka <span className="text-red-500">*</span>
                </label>
                <select
                  name="taluka"
                  value={formData.taluka}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                  disabled={!formData.district}
                >
                  <option value="">Select Taluka</option>
                  {selectedDistrict?.talukas.map(taluka => (
                    <option key={taluka.name} value={taluka.name}>
                      {taluka.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Upload Photo <span className="text-red-500">*</span>
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                    required
                  />
                  <FaFileUpload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Click to upload passport size photo</p>
                  {formData.photo && (
                    <p className="text-sm text-green-600 mt-2">{formData.photo.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Education Qualification <span className="text-red-500">*</span>
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                >
                  <option value="">Select Education</option>
                  <option value="high-school">High School</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Caste <span className="text-red-500">*</span>
                </label>
                <select
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                >
                  <option value="">Select Caste</option>
                  <option value="general">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Permanent Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none h-32"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  required
                  disabled={!formData.taluka}
                >
                  <option value="">Select City</option>
                  {selectedTaluka?.cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#2C4E2D] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors text-lg"
            >
              Submit Application
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg text-center max-w-md mx-4">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
              <p className="text-gray-600">Your registration is being processed</p>
            </div>
          </div>
        )}

        <Link 
          to="/" 
          className="mt-8 inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Return to Home
        </Link>


      </div>
    </div>
  )
}