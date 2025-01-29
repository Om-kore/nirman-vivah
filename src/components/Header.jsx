import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Main Logo - Left Side */}
        <div className="flex-shrink-0 w-1/3 max-w-[200px]">
          <img 
            src="/images/logo1.png" 
            alt="Main Logo" 
            className="w-auto h-8 max-h-12 md:h-10 lg:h-12 object-contain"
          />
        </div>

        {/* Secondary Logo - Right Side */}
        <div className="flex-shrink-0 w-1/3 max-w-[200px] flex justify-end">
          <img 
            src="/images/logo2.png" 
            alt="Secondary Logo" 
            className="w-auto h-8 max-h-12 md:h-10 lg:h-12 object-contain"
          />
        </div>
      </div>
    </header>
  )
}
