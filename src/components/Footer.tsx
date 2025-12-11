import { Link } from 'react-router-dom'
import { MdLocalHospital, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <MdLocalHospital className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-white">Meridian Health</span>
            </div>
            <p className="text-sm mb-4">
              Providing whole-person care with compassion, expertise, and innovation. Your health and wellness are our top priorities.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MdPhone className="text-teal-400" />
                <span>1-800-MERIDIAN</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-teal-400" />
                <span>info@meridianhealth.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-teal-400" />
                <span>123 Medical Center Drive, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Find Care */}
          <div>
            <h3 className="text-white font-semibold mb-4">Find Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/doctors" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Schedule Appointment
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Our Services
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Urgent Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Patient Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Pay Your Bill
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Medical Records
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Price Transparency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Financial Assistance
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Who We Are
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  News & Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Meridian Health. All rights reserved.</p>
          <p className="mt-2">
            Accredited by The Joint Commission | Licensed Healthcare Provider
          </p>
        </div>
      </div>
    </footer>
  )
}

