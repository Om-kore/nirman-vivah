import { FaEdit, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export default function UpdateRegistration() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setIsOtpSent(true)
      // Here you would typically call an API to send OTP
    }
  }

  const handleVerifyOtp = () => {
    // Simple frontend verification (replace with actual API call)
    if (otp.join('') === '1234') {
      setIsVerified(true)
    }
  }

  const handleOtpChange = (index, value) => {
    if (/^\d+$/.test(value) || value === '') {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      // Auto focus next input
      if (value !== '' && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus()
      }
    }
  }

  return (
    <div className="min-h-screen p-8 bg-[#FFD93D] text-gray-800">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <FaEdit className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Update Registration</h1>
        </div>

        <div className="bg-white/30 p-6 rounded-lg shadow-lg">
          {!isVerified ? (
            <>
              <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                  Mobile Number <FaMobileAlt className="inline ml-1" />
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/, ''))}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength="10"
                    disabled={isOtpSent}
                  />
                  <button
                    onClick={handleSendOtp}
                    className={`px-4 py-2 rounded ${mobileNumber.length === 10 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400'} text-white transition-colors`}
                    disabled={mobileNumber.length !== 10 || isOtpSent}
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              {isOtpSent && (
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-2">
                    Enter OTP <FaShieldAlt className="inline ml-1" />
                  </label>
                  <div className="flex justify-center gap-3 mb-4">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        value={otp[index]}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        maxLength="1"
                        className="w-16 h-16 text-2xl text-center rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleVerifyOtp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition-colors"
                  >
                    Verify OTP
                  </button>
                  <button
                    onClick={() => setIsOtpSent(false)}
                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Change Mobile Number
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-2xl font-bold mb-4">✓ Verification Successful!</div>
              <p className="text-gray-600">You can now proceed to update your registration details.</p>
            </div>
          )}
        </div>

        <Link 
          to="/" 
          className="mt-8 inline-block bg-gray-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-700 transition-colors"
        >
          Go Back
        </Link>
      </div>
    </div>
  )
}