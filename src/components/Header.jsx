import React from 'react'

export default function Header() {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <img 
            src="/images/logo1.png" 
            alt="Main Logo" 
            className="h-12 w-auto"
          />
          
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo2.jpg" 
              alt="Secondary Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-800">Nirman Vivah</span>
          </div>
        </div>
      </header>
    )
  }