import { useNavigate } from 'react-router-dom'
import { MdPerson, MdEdit, MdCheckCircle, MdArrowForward } from 'react-icons/md'

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
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">Enter Your Information</h3>
              <p className="text-gray-600">
                Fill in your details or use <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span> to prefill automatically
              </p>
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
