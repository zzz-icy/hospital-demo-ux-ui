import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MdCheckCircle, MdAccountCircle, MdEmail, MdPhone, MdHome, MdCreditCard, MdDownload, MdVerifiedUser, MdQrCodeScanner } from 'react-icons/md'
import { HiCheck } from 'react-icons/hi'
import iden2Logo from '../assets/iden2_logo.png'

interface PatientData {
  name: string
  age: string
  healthInsurance: string
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

export default function PatientInfo() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const doctorId = searchParams.get('doctorId') || ''
  const doctor = doctors[doctorId] || { name: 'Selected Doctor', specialty: '' }

  const [formData, setFormData] = useState<PatientData>({
    name: '',
    age: '',
    healthInsurance: '',
    email: '',
    phone: '',
    address: '',
  })

  const [isIden2Connected, setIsIden2Connected] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
      email: 'john.doe@example.com',
      phone: '+1-555-0123',
      address: '123 Main St, City, State 12345',
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/appointments/confirm?doctorId=${doctorId}`, {
      state: { formData, doctor },
    })
  }

  const isFormValid = formData.name && formData.age && formData.healthInsurance


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
                    Use <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span> to Prefill Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Connect your iDen2 wallet to automatically fill in your personal information and save time
                  </p>
                  <button
                    onClick={handleIden2Connect}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Connect with iDen2
                  </button>
                </div>
              </div>
            </div>
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
                        <div className="flex items-center gap-2 mb-1">
                          <MdDownload className="text-teal-600 text-sm" />
                          <span className="font-medium text-sm text-gray-900">Download the iDen2 app</span>
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
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Already scanned? Click here to continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="mb-6 p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3">
              <MdCheckCircle className="text-2xl text-green-600 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <img 
                  src={iden2Logo} 
                  alt="iDen2" 
                  className="w-6 h-6 object-contain"
                />
                <p className="text-sm text-green-800 font-medium">
                  Connected to <span className="font-semibold" style={{ color: '#783adb' }}>iDen2</span> - Information prefilled from your identity wallet
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MdAccountCircle className="text-lg text-gray-500" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="1"
                max="120"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label htmlFor="healthInsurance" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MdCreditCard className="text-lg text-gray-500" />
                Health Insurance Number *
              </label>
              <input
                type="text"
                id="healthInsurance"
                name="healthInsurance"
                value={formData.healthInsurance}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                placeholder="INS-XXXXXXXXX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MdEmail className="text-lg text-gray-500" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MdPhone className="text-lg text-gray-500" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              placeholder="+1-555-0123"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <MdHome className="text-lg text-gray-500" />
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              placeholder="123 Main St, City, State ZIP"
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/doctors')}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              Continue to Confirmation
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
