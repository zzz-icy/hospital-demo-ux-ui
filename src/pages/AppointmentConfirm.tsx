import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { PatientData } from '../types'
import { MdPerson, MdAccountCircle, MdEmail, MdPhone, MdHome, MdCreditCard, MdCalendarToday, MdAccessTime, MdCheckCircle, MdBusiness } from 'react-icons/md'
import Modal from '../components/Modal'
import iden2Logo from '../assets/iden2_logo.png'

interface LocationState {
  formData: PatientData
  doctor: { name: string; specialty: string }
  usedIden2?: boolean
}

// Calculate appointment date once (7 days from now)
const getAppointmentDate = () => {
  const date = new Date()
  date.setDate(date.getDate() + 7)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const appointmentDate = getAppointmentDate()

export default function AppointmentConfirm() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState | null
  const [isOpen, setIsOpen] = useState(!!state)

  useEffect(() => {
    if (!state) {
      // If no state, redirect back
      navigate('/doctors')
    }
  }, [state, navigate])

  if (!state) return null

  const { formData, doctor, usedIden2 } = state

  const handleClose = () => {
    setIsOpen(false)
    navigate('/appointments/patient-info', {
      state: { formData, doctor },
      replace: true
    })
  }

  const handleConfirm = () => {
    // In a real app, this would submit to a backend
    alert('Appointment booked successfully! You will receive a confirmation email shortly.')
    setIsOpen(false)
    navigate('/')
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Confirm Appointment">
      <div className="space-y-6">
        <p className="text-gray-600 mb-6">Please review your appointment details</p>

        {/* Doctor Information */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MdPerson className="text-teal-600" />
            Doctor Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-lg font-medium text-gray-900">{doctor.name}</p>
            <p className="text-teal-600 font-medium">{doctor.specialty}</p>
          </div>
        </div>

        {/* Patient Information */}
        <div className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MdAccountCircle className="text-teal-600" />
              Patient Information
            </h3>
            {usedIden2 && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-lg border border-purple-200">
                <img
                  src={iden2Logo}
                  alt="iDen2"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs font-medium" style={{ color: '#783adb' }}>
                  Verified with iDen2
                </span>
              </div>
            )}
          </div>
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
                Health Insurance Number:
              </span>
              <span className="font-medium text-gray-900">{formData.healthInsurance}</span>
            </div>
            {formData.healthInsuranceProvider && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center gap-2">
                  <MdBusiness className="text-gray-400" />
                  Insurance Provider:
                </span>
                <span className="font-medium text-gray-900">{formData.healthInsuranceProvider}</span>
              </div>
            )}
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MdCalendarToday className="text-teal-600" />
            Appointment Details
          </h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex items-center gap-2">
                <MdCalendarToday className="text-gray-400" />
                Date:
              </span>
              <span className="font-medium text-gray-900">
                {appointmentDate}
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
            onClick={handleClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <MdCheckCircle className="text-xl" />
            Confirm Appointment
          </button>
        </div>
      </div>
    </Modal>
  )
}
