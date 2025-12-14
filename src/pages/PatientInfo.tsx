import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MdCheckCircle, MdAccountCircle, MdEmail, MdPhone, MdHome, MdCreditCard, MdDownload, MdVerifiedUser, MdQrCodeScanner, MdBusiness, MdPerson, MdCalendarToday, MdAccessTime, MdAttachMoney, MdInfo } from 'react-icons/md'
import { HiCheck } from 'react-icons/hi'
import Modal from '../components/Modal'
import iden2Logo from '../assets/iden2_logo.png'

interface PatientData {
  name: string
  age: string
  healthInsurance: string
  healthInsuranceProvider: string
  email: string
  phone: string
  address: string
}

const doctors: Record<string, { name: string; specialty: string }> = {
  '1': { name: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
  '2': { name: 'Dr. Michael Chen', specialty: 'Pediatrics' },
  '3': { name: 'Dr. Emily Rodriguez', specialty: 'Dermatology' },
  '4': { name: 'Dr. James Wilson', specialty: 'Orthopedics' },
  '5': { name: 'Dr. Lisa Anderson', specialty: 'Neurology' },
  '6': { name: 'Dr. Robert Taylor', specialty: 'General Medicine' },
}

// Calculate appointment date (7 days from now)
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

export default function PatientInfo() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const doctorId = searchParams.get('doctorId') || ''
  const doctor = doctors[doctorId] || { name: 'Selected Doctor', specialty: '' }

  const [formData, setFormData] = useState<PatientData>({
    name: '',
    age: '',
    healthInsurance: '',
    healthInsuranceProvider: '',
    email: '',
    phone: '',
    address: '',
  })

  const [isIden2Connected, setIsIden2Connected] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [useNewFlow, setUseNewFlow] = useState(false) // Toggle between flows

  const handleIden2Connect = () => {
    setShowQRCode(true)
  }

  const handleQRCodeScanned = () => {
    // Simulate QR code scan and connection
    setIsIden2Connected(true)
    setShowQRCode(false)
    // In real implementation, this would connect to iden2 wallet and fetch identity data
    setFormData({
      name: 'John Doe',
      age: '35',
      healthInsurance: 'INS-123456789',
      healthInsuranceProvider: 'BlueCross BlueShield',
      email: 'john.doe@example.com',
      phone: '+1-555-0123',
      address: '123 Main St, City, State 12345',
    })
  }

  const handleConfirm = () => {
    // In a real app, this would submit to a backend
    setShowSuccessModal(true)
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
    navigate('/')
  }

  const isFormValid = formData.name && formData.age && formData.healthInsurance && formData.healthInsuranceProvider


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
              2
            </div>
            <span className="ml-3 font-medium text-gray-700">Patient Information</span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
              3
            </div>
            <span className="ml-3 font-medium text-gray-500">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Flow Toggle - Outside the card */}
      <div className="mb-6 flex items-center justify-end gap-3">
        <span className={`text-sm font-medium ${!useNewFlow ? 'text-gray-900' : 'text-gray-500'}`}>
          Standard
        </span>
        <button
          onClick={() => {
            setUseNewFlow(!useNewFlow)
            // Reset connection state when switching flows
            setIsIden2Connected(false)
            setShowQRCode(false)
          }}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${useNewFlow ? 'bg-teal-600' : 'bg-gray-300'
            }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useNewFlow ? 'translate-x-6' : 'translate-x-1'
              }`}
          />
        </button>
        <span className={`text-sm font-medium ${useNewFlow ? 'text-gray-900' : 'text-gray-500'}`}>
          With Cost Estimate
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Information</h1>
          <p className="text-gray-600">
            Appointment with <span className="font-semibold text-gray-900">{doctor.name}</span> - <span className="text-teal-600">{doctor.specialty}</span>
          </p>
        </div>

        {/* iDen2 Integration Section */}
        {!isIden2Connected ? (
          !showQRCode ? (
            useNewFlow ? (
              // New Flow: Emphasizes iDen2 connection requirement
              <div className="mb-6 p-8 bg-gradient-to-r from-teal-50 to-indigo-50 rounded-xl border-2 border-teal-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm p-3">
                    <img
                      src={iden2Logo}
                      alt="iDen2"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Connect with <span className="font-bold" style={{ color: '#783adb' }}>iDen2</span> to Continue
                    </h3>
                    <p className="text-gray-700 mb-3">
                      To book your appointment and see your <span className="font-semibold text-teal-600">estimated cost</span>, please connect your iDen2 wallet
                    </p>
                    <div className="flex items-start gap-2 text-sm text-gray-600 mb-6">
                      <MdInfo className="text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Your identity will be verified and cost estimate will be calculated based on your insurance</span>
                    </div>
                    <button
                      onClick={handleIden2Connect}
                      className="px-8 py-4 bg-teal-600 text-white rounded-lg font-bold text-lg hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer"
                    >
                      Connect with iDen2 to Get Started
                    </button>
                  </div>
                </div>
              </div>
            ) : (
            // Standard Flow
                <div className="mb-6 p-6 bg-gradient-to-r from-teal-50 to-indigo-50 rounded-xl border-2 border-teal-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm p-2">
                      <img
                        src={iden2Logo}
                        alt="iDen2"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        Connect with <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span>
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Connect your iDen2 wallet to securely share your personal information for your appointment
                      </p>
                      <button
                        onClick={handleIden2Connect}
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg cursor-pointer"
                      >
                        Connect with iDen2
                      </button>
                    </div>
                  </div>
                </div>
              )
          ) : (
            <div className="mb-6 p-6 bg-white rounded-xl border-2 border-teal-200 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm p-2">
                  <img 
                    src={iden2Logo} 
                    alt="iDen2" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Connect with <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span>
                  </h3>
                  <p className="text-sm text-gray-600">
                    Scan the QR code with your iDen2 app to securely share your information
                  </p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-sm">
                    {/* Mock QR Code - Simple pattern */}
                    <div className="w-[200px] h-[200px] bg-white relative" style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, #000 0px, #000 8px, #fff 8px, #fff 16px),
                        repeating-linear-gradient(90deg, #000 0px, #000 8px, #fff 8px, #fff 16px)
                      `,
                      backgroundSize: '16px 16px'
                    }}>
                      {/* Corner markers */}
                      <div className="absolute top-3 left-3 w-14 h-14 border-4 border-black bg-white">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-black"></div>
                        <div className="absolute top-1 right-1 w-4 h-4 bg-black"></div>
                        <div className="absolute bottom-1 left-1 w-4 h-4 bg-black"></div>
                      </div>
                      <div className="absolute top-3 right-3 w-14 h-14 border-4 border-black bg-white">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-black"></div>
                        <div className="absolute top-1 right-1 w-4 h-4 bg-black"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-black"></div>
                      </div>
                      <div className="absolute bottom-3 left-3 w-14 h-14 border-4 border-black bg-white">
                        <div className="absolute bottom-1 left-1 w-4 h-4 bg-black"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-black"></div>
                        <div className="absolute top-1 left-1 w-4 h-4 bg-black"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">Scan with iDen2 app</p>
                </div>

                {/* Steps for First-Time Users */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">First time using iDen2?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-teal-600">1</span>
                      </div>
                      <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                          <MdDownload className="text-teal-600 text-sm" />
                          <span className="font-medium text-sm text-gray-900">Download the iDen2 app</span>
                        </div>
                          <div className="flex items-center gap-2 mb-2">
                            <a
                              href="https://apps.apple.com/app/iden2"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-2 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                              </svg>
                              <span>App Store</span>
                            </a>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.iden2"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 px-3 py-2 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                              </svg>
                              <span>Google Play</span>
                            </a>
                          </div>
                        <p className="text-xs text-gray-600">
                          Available on iOS and Android app stores
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-teal-600">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <MdVerifiedUser className="text-teal-600 text-sm" />
                          <span className="font-medium text-sm text-gray-900">Complete IDV (Identity Verification)</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Verify your identity by uploading your ID document in the app
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-teal-600">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <MdQrCodeScanner className="text-teal-600 text-sm" />
                          <span className="font-medium text-sm text-gray-900">Scan this QR code</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Open the iDen2 app and scan the QR code to connect
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={handleQRCodeScanned}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium cursor-pointer"
                    >
                      Already scanned? Click here to continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
            <div className={`mb-6 p-4 rounded-xl border-2 ${useNewFlow ? 'bg-gradient-to-r from-green-50 to-teal-50 border-green-300' : 'bg-green-50 border-green-200'}`}>
            <div className="flex items-center gap-3">
              <MdCheckCircle className="text-2xl text-green-600 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <img 
                  src={iden2Logo} 
                  alt="iDen2" 
                  className="w-6 h-6 object-contain"
                />
                <p className="text-sm text-green-800 font-medium">
                    Connected to <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span> - Information retrieved from your identity wallet
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Cost Estimate - Show in new flow after iDen2 connection */}
        {isIden2Connected && useNewFlow && (
          <div className="mb-6 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border-2 border-teal-300 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MdAttachMoney className="text-2xl text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Estimated Visit Cost</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Based on your insurance coverage and the selected appointment type
                </p>
                <div className="bg-white rounded-lg p-4 border border-teal-200 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Consultation Fee</span>
                    <span className="font-semibold text-gray-900">$250.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Insurance Coverage</span>
                    <span className="font-semibold text-green-600">- $200.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Your Estimated Cost</span>
                      <span className="text-2xl font-bold text-teal-600">$50.00</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                    <MdInfo className="text-gray-400" />
                    Final cost may vary based on services provided during your visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Content - Show after iDen2 connection */}
        {isIden2Connected && (
          <div className="space-y-6 mb-6">
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
          </div>
        )}

        {/* Action Buttons */}
        {isIden2Connected && (
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/doctors')}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!isFormValid}
              className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MdCheckCircle className="text-xl" />
              Confirm Appointment
            </button>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} title="Appointment Confirmed!">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
              <MdCheckCircle className="text-5xl text-teal-600" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked Successfully!</h3>
            <p className="text-gray-600 mb-4">
              You will receive a confirmation email shortly.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-left mt-6">
              <p className="text-sm text-gray-600 mb-1">Appointment with</p>
              <p className="text-lg font-semibold text-gray-900">{doctor.name}</p>
              <p className="text-teal-600 font-medium">{doctor.specialty}</p>
              <p className="text-sm text-gray-600 mt-2">
                {appointmentDate} at 10:00 AM
              </p>
            </div>
          </div>
          <button
            onClick={handleCloseSuccessModal}
            className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            Return to Home
          </button>
        </div>
      </Modal>
    </div>
  )
}
