import { Link } from 'react-router-dom'
import React from 'react'
import { 
  FaHeart,
  FaWheelchair,
  FaEdit,
  FaSearch,
  FaCheckDouble
} from 'react-icons/fa'

const services = [
  { 
    title: 'New Marriage Registration', 
    path: '/new',
    color: 'bg-[#FF6B6B]',
    icon: <FaHeart className="w-12 h-12 mb-4 text-white" />
  },
  { 
    title: 'Handicap Marriage Registration', 
    path: '/handicap',
    color: 'bg-[#4ECDC4]',
    icon: <FaWheelchair className="w-12 h-12 mb-4 text-white" />
  },
  { 
    title: 'Update Registration', 
    path: '/update',
    color: 'bg-[#FFD93D]',
    icon: <FaEdit className="w-12 h-12 mb-4 text-white" />
  },
  { 
    title: 'Search Marriage', 
    path: '/search',
    color: 'bg-[#6C5CE7]',
    icon: <FaSearch className="w-12 h-12 mb-4 text-white" />
  },
  { 
    title: 'Verified Registration', 
    path: '/verified',
    color: 'bg-[#00B894]',
    icon: <FaCheckDouble className="w-12 h-12 mb-4 text-white" />
  },
]

export default function ServicesGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-6">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.path}
            className={`${service.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center min-h-[200px] flex flex-col items-center justify-center`}
          >
            {service.icon}
            <h3 className="text-lg font-bold text-white uppercase">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}