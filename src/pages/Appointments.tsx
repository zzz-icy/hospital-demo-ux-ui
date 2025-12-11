import { useNavigate } from 'react-router-dom'
import { MdPerson, MdEdit, MdCheckCircle, MdArrowForward, MdSecurity, MdSpeed, MdCheckCircleOutline } from 'react-icons/md'
import iden2Logo from '../assets/iden2_logo.png'

export default function Appointments() {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
        <p className="text-lg text-gray-600">
          Select a doctor to begin your appointment booking
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">How it works</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-md">
              <MdPerson className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Choose Your Doctor</h3>
              <p className="text-gray-600">Browse our team of specialists and select the doctor you'd like to see</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-md">
              <MdEdit className="text-2xl" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Enter Your Information</h3>
              <p className="text-gray-600 mb-3">
                Fill in your details or use{' '}
                <span className="font-semibold inline-flex items-center gap-1.5" style={{ color: '#783adb' }}>
                  <img
                    src={iden2Logo}
                    alt="iDen2"
                    className="w-4 h-4 object-contain"
                  />
                  iDen2
                </span>
                {' '}to prefill automatically
              </p>

              {/* iDen2 Benefits Explanation */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200 mt-3">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={iden2Logo}
                    alt="iDen2"
                    className="w-6 h-6 object-contain flex-shrink-0 mt-0.5"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Why use <span style={{ color: '#783adb' }}>iDen2</span>?
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MdSpeed className="text-teal-600 text-base flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700">
                          <span className="font-medium">Save time:</span> Automatically fill in your personal information, insurance details, and contact info in seconds
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <MdSecurity className="text-teal-600 text-base flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700">
                          <span className="font-medium">Secure & verified:</span> Your identity is verified once and stored securely in your digital wallet
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <MdCheckCircleOutline className="text-teal-600 text-base flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700">
                          <span className="font-medium">No errors:</span> Eliminate typos and ensure accurate information every time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-md">
              <MdCheckCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Confirm Appointment</h3>
              <p className="text-gray-600">Review and confirm your appointment details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/doctors')}
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Browse Doctors
          <MdArrowForward className="text-xl" />
        </button>
      </div>
    </div>
  )
}
