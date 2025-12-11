import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdLocalHospital, MdSearch } from 'react-icons/md'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Find Doctors' },
    { path: '/appointments', label: 'Book Appointment' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-md">
                <MdLocalHospital className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 block">Meridian Health</span>
                <span className="text-xs text-gray-500">Whole-Person Care</span>
              </div>
            </Link>
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MdSearch className="text-xl text-gray-600" />
              </button>
              <Link
                to="/appointments"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                My Account
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
