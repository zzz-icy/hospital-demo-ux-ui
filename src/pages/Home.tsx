import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MdPerson, 
  MdLocalPharmacy, 
  MdEmergency,
  MdFavorite,
  MdHealthAndSafety,
  MdAccessTime,
  MdVerified,
  MdEdit,
  MdCheckCircle,
  MdSpeed,
  MdSecurity,
  MdCheckCircleOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import iden2Logo from '../assets/iden2_logo.png'

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false)
  const specialties = [
    { name: 'Cardiology', icon: MdFavorite, description: 'Heart and vascular care' },
    { name: 'Pediatrics', icon: MdPerson, description: 'Care for children and adolescents' },
    { name: 'Emergency Care', icon: MdEmergency, description: '24/7 emergency services' },
    { name: 'Orthopedics', icon: MdHealthAndSafety, description: 'Bone and joint care' },
    { name: 'Neurology', icon: MdHealthAndSafety, description: 'Brain and nervous system' },
    { name: 'Primary Care', icon: MdPerson, description: 'Comprehensive primary care' },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Whole-Person Care, Close to Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed">
              At Meridian Health, we're committed to your complete well-being. Whether you're visiting our hospital, urgent care centers, or medical practices, you're more than a patient — you're family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/doctors"
                    className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Book Appointment
                    <HiArrowRight className="text-xl" />
                  </Link>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-teal-200 mt-4 flex items-center gap-2 hover:text-white transition-all duration-200 cursor-pointer group bg-white/5 hover:bg-white/10 rounded-lg px-4 py-2 border border-white/20 hover:border-white/40"
            >
              <span>Quick tip: Use <span className="font-medium" style={{ color: '#c084fc' }}>iDen2</span> to prefill your information and make booking even faster</span>
              <span className="flex items-center gap-1">
                <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'animate-bounce-arrow'}`}>
                  <MdKeyboardArrowDown className="text-lg" />
                </span>
                <span className={`transition-transform duration-300 delay-75 ${isExpanded ? 'rotate-180 opacity-0' : 'animate-bounce-arrow-delayed opacity-100'}`}>
                  <MdKeyboardArrowDown className="text-lg" />
                </span>
                <span className={`transition-transform duration-300 delay-150 ${isExpanded ? 'rotate-180 opacity-0' : 'animate-bounce-arrow-delayed-2 opacity-100'}`}>
                  <MdKeyboardArrowDown className="text-lg" />
                </span>
              </span>
            </button>

            {/* Collapsible How It Works Section - Integrated into hero */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}>
              <div className="pt-6 border-t border-teal-500/30">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How It Works</h2>
                  <p className="text-base md:text-lg text-teal-100 max-w-2xl mx-auto">
                    Booking an appointment is simple and straightforward. Follow these easy steps to get started.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className={`flex items-start gap-4 transition-all duration-500 ${isExpanded ? 'animate-fade-in' : ''}`} style={{ animationDelay: isExpanded ? '0.1s' : '0s' }}>
                      <div className="w-12 h-12 bg-white text-teal-600 rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-lg">
                        <MdPerson className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Choose Your Doctor</h3>
                        <p className="text-teal-100">Browse our team of specialists and select the doctor you'd like to see</p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-4 transition-all duration-500 ${isExpanded ? 'animate-fade-in' : ''}`} style={{ animationDelay: isExpanded ? '0.2s' : '0s' }}>
                      <div className="w-12 h-12 bg-white text-teal-600 rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-lg">
                        <MdEdit className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">Enter Your Information</h3>
                        <p className="text-teal-100 mb-3">
                          Fill in your details or use{' '}
                          <span className="font-semibold" style={{ color: '#c084fc' }}>
                            iDen2
                          </span>
                          {' '}to prefill automatically
                        </p>

                        {/* iDen2 Benefits Explanation */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 mt-3">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 p-1.5">
                              <img
                                src={iden2Logo}
                                alt="iDen2"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white text-sm mb-2">
                                Why use <span style={{ color: '#c084fc' }}>iDen2</span>?
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <MdSpeed className="text-white text-base flex-shrink-0 mt-0.5" />
                                  <p className="text-xs text-teal-50">
                                    <span className="font-medium">Save time:</span> Automatically fill in your personal information, insurance details, and contact info in seconds
                                  </p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <MdSecurity className="text-white text-base flex-shrink-0 mt-0.5" />
                                  <p className="text-xs text-teal-50">
                                    <span className="font-medium">Secure & verified:</span> Your identity is verified once and stored securely in your digital wallet
                                  </p>
                                </div>
                                <div className="flex items-start gap-2">
                                  <MdCheckCircleOutline className="text-white text-base flex-shrink-0 mt-0.5" />
                                  <p className="text-xs text-teal-50">
                                    <span className="font-medium">No errors:</span> Eliminate typos and ensure accurate information every time
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-start gap-4 transition-all duration-500 ${isExpanded ? 'animate-fade-in' : ''}`} style={{ animationDelay: isExpanded ? '0.3s' : '0s' }}>
                      <div className="w-12 h-12 bg-white text-teal-600 rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-lg">
                        <MdCheckCircle className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-1">Confirm Appointment</h3>
                        <p className="text-teal-100">Review and confirm your appointment details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
            <div className="text-gray-600">Expert Physicians</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-600">Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Care</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">100K+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
        </div>

        {/* Key Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Nationally Recognized Services</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Whole-person care means we look after your mind and spirit too. Our multidisciplinary approach revolves around you, so you're in expert hands at every step.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <MdEmergency className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Care</h3>
              <p className="text-gray-600 leading-relaxed mb-4">When the unexpected happens, you need to act fast. Our caring team is here for you every day, at all hours.</p>
              <Link to="/services" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 cursor-pointer">
                Learn More
                <HiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <MdPerson className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Physicians</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Board-certified specialists with years of experience, dedicated to providing the highest quality care.</p>
              <Link to="/doctors" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 cursor-pointer">
                Book Appointment
                <HiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <MdLocalPharmacy className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Site Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Pharmacy, imaging, labs, and rehabilitation services all in one convenient location.</p>
              <Link to="/services" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 cursor-pointer">
                View Services
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Specialties Designed With You in Mind</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your health needs change over time. That's why we're here to support you through every age and stage, from everyday wellness to lifesaving treatments.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Link
                  key={index}
                  to="/doctors"
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-teal-300 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-600 transition-colors">
                    <Icon className="text-2xl text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{specialty.name}</h3>
                  <p className="text-xs text-gray-500">{specialty.description}</p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <MdVerified className="text-3xl text-teal-600" />
              <div>
                <div className="font-semibold text-gray-900">Accredited by The Joint Commission</div>
                <div className="text-sm text-gray-600">Gold Seal of Approval</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdAccessTime className="text-3xl text-teal-600" />
              <div>
                <div className="font-semibold text-gray-900">24/7 Emergency Services</div>
                <div className="text-sm text-gray-600">Always here when you need us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
