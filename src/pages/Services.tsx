import { 
  MdFavorite, 
  MdPerson, 
  MdEmergency, 
  MdHealthAndSafety,
  MdPregnantWoman,
  MdChildCare,
  MdPsychology,
  MdHealing
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

interface Service {
  name: string
  description: string
  icon: any
  features: string[]
}

const services: Service[] = [
  {
    name: 'Cardiology',
    description: 'Comprehensive heart and vascular care with advanced diagnostic and treatment options.',
    icon: MdFavorite,
    features: ['Cardiac Catheterization', 'Echocardiography', 'Heart Surgery', 'Cardiac Rehabilitation']
  },
  {
    name: 'Emergency Care',
    description: '24/7 emergency services with board-certified emergency physicians ready when you need us most.',
    icon: MdEmergency,
    features: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Fast Track Services']
  },
  {
    name: 'Pediatrics',
    description: 'Specialized care for children from infancy through adolescence with child-friendly facilities.',
    icon: MdChildCare,
    features: ['Well-Child Visits', 'Vaccinations', 'Pediatric Surgery', 'Child Development']
  },
  {
    name: 'Orthopedics',
    description: 'Expert care for bones, joints, muscles, and connective tissues to restore mobility and reduce pain.',
    icon: MdHealthAndSafety,
    features: ['Joint Replacement', 'Sports Medicine', 'Spine Care', 'Physical Therapy']
  },
  {
    name: 'Neurology',
    description: 'Advanced neurological care for conditions affecting the brain, spine, and nervous system.',
    icon: MdPsychology,
    features: ['Stroke Care', 'Epilepsy Treatment', 'Headache Management', 'Neurological Surgery']
  },
  {
    name: 'Primary Care',
    description: 'Comprehensive primary care services for the whole family, from preventive care to chronic disease management.',
    icon: MdPerson,
    features: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings']
  },
  {
    name: 'Women\'s Health',
    description: 'Complete women\'s health services including obstetrics, gynecology, and reproductive health.',
    icon: MdPregnantWoman,
    features: ['OB/GYN Services', 'Maternity Care', 'Breast Health', 'Menopause Management']
  },
  {
    name: 'Oncology',
    description: 'Comprehensive cancer care with multidisciplinary teams providing personalized treatment plans.',
    icon: MdHealing,
    features: ['Medical Oncology', 'Radiation Therapy', 'Surgical Oncology', 'Support Services']
  },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of medical specialties designed to meet your health needs at every stage of life. Our multidisciplinary approach ensures you receive coordinated, whole-person care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/doctors"
                className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 text-sm"
              >
                Find {service.name} Doctors
                <HiArrowRight />
              </Link>
            </div>
          )
        })}
      </div>

      {/* Additional Services Section */}
      <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Imaging Services</h3>
            <p className="text-sm text-gray-600">MRI, CT, X-Ray, Ultrasound</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Laboratory Services</h3>
            <p className="text-sm text-gray-600">Blood tests, pathology, diagnostics</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Pharmacy</h3>
            <p className="text-sm text-gray-600">On-site prescription services</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Rehabilitation</h3>
            <p className="text-sm text-gray-600">Physical, occupational, speech therapy</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/appointments"
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Schedule an Appointment
          <HiArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  )
}

