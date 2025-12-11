import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdPerson, MdCalendarToday } from 'react-icons/md'

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  gender: 'male' | 'female'
  available: boolean
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    experience: '15 years',
    gender: 'female',
    available: true,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrics',
    experience: '12 years',
    gender: 'male',
    available: true,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatology',
    experience: '10 years',
    gender: 'female',
    available: true,
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    experience: '18 years',
    gender: 'male',
    available: true,
  },
  {
    id: '5',
    name: 'Dr. Lisa Anderson',
    specialty: 'Neurology',
    experience: '14 years',
    gender: 'female',
    available: true,
  },
  {
    id: '6',
    name: 'Dr. Robert Taylor',
    specialty: 'General Medicine',
    experience: '20 years',
    gender: 'male',
    available: true,
  },
]

export default function Doctors() {
  const navigate = useNavigate()
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all')

  const specialties = ['all', ...new Set(doctors.map((d) => d.specialty))]

  const filteredDoctors =
    selectedSpecialty === 'all'
      ? doctors
      : doctors.filter((d) => d.specialty === selectedSpecialty)

  const handleBookAppointment = (doctorId: string) => {
    navigate(`/appointments/patient-info?doctorId=${doctorId}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Doctors</h1>
        <p className="text-lg text-gray-600">
          Choose a doctor to book your appointment
        </p>
      </div>

      {/* Specialty Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              selectedSpecialty === specialty
                ? 'bg-teal-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdPerson className="text-5xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
              <p className="text-teal-600 font-medium mb-1">{doctor.specialty}</p>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <MdCalendarToday className="text-base" />
                {doctor.experience} of experience
              </p>
            </div>
            <button
              onClick={() => handleBookAppointment(doctor.id)}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <MdCalendarToday />
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
