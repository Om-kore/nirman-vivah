import React from 'react'

export default function Login() {
    return (
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="container mx-auto max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }