import { useLocation, useNavigate } from 'react-router-dom'
import type { PatientData } from '../types'
import { MdPerson, MdAccountCircle, MdEmail, MdPhone, MdHome, MdCreditCard, MdCalendarToday, MdAccessTime, MdCheckCircle, MdArrowBack } from 'react-icons/md'
import { HiCheck } from 'react-icons/hi'

interface LocationState {
  formData: PatientData
  doctor: { name: string; specialty: string }
}

export default function AppointmentConfirm() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState

  if (!state) {
    navigate('/doctors')
    return null
  }

  const { formData, doctor } = state

  const handleConfirm = () => {
    // In a real app, this would submit to a backend
    alert('Appointment booked successfully! You will receive a confirmation email shortly.')
    navigate('/')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
              <HiCheck className="text-lg" />
            </div>
            <span className="ml-3 font-medium text-gray-700">Select Doctor</span>
          </div>
          <div className="flex-1 h-1 bg-teal-600 mx-4"></div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
              <HiCheck className="text-lg" />
            </div>
            <span className="ml-3 font-medium text-gray-700">Patient Information</span>
          </div>
          <div className="flex-1 h-1 bg-teal-600 mx-4"></div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
              3
            </div>
            <span className="ml-3 font-medium text-gray-700">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirm Appointment</h1>
          <p className="text-gray-600">Please review your appointment details</p>
        </div>

        <div className="space-y-6">
          {/* Doctor Information */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MdPerson className="text-teal-600" />
              Doctor Information
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-lg font-medium text-gray-900">{doctor.name}</p>
              <p className="text-teal-600 font-medium">{doctor.specialty}</p>
            </div>
          </div>

          {/* Patient Information */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MdAccountCircle className="text-teal-600" />
              Patient Information
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <MdAccountCircle className="text-gray-400" />
                  Name:
                </span>
                <span className="font-medium text-gray-900">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Age:</span>
                <span className="font-medium text-gray-900">{formData.age}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <MdCreditCard className="text-gray-400" />
                  Health Insurance:
                </span>
                <span className="font-medium text-gray-900">{formData.healthInsurance}</span>
              </div>
              {formData.email && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <MdEmail className="text-gray-400" />
                    Email:
                  </span>
                  <span className="font-medium text-gray-900">{formData.email}</span>
                </div>
              )}
              {formData.phone && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <MdPhone className="text-gray-400" />
                    Phone:
                  </span>
                  <span className="font-medium text-gray-900">{formData.phone}</span>
                </div>
              )}
              {formData.address && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <MdHome className="text-gray-400" />
                    Address:
                  </span>
                  <span className="font-medium text-gray-900">{formData.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Appointment Details */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MdCalendarToday className="text-teal-600" />
              Appointment Details
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <MdCalendarToday className="text-gray-400" />
                  Date:
                </span>
                <span className="font-medium text-gray-900">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <MdAccessTime className="text-gray-400" />
                  Time:
                </span>
                <span className="font-medium text-gray-900">10:00 AM</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <MdArrowBack />
              Back
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MdCheckCircle className="text-xl" />
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
