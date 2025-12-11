import { MdLocalHospital, MdFavorite, MdHealthAndSafety, MdPeople, MdVerified } from 'react-icons/md'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Meridian Health</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Providing whole-person care with compassion, expertise, and innovation for over 50 years
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center">
            <MdFavorite className="text-3xl text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Meridian Health, we are dedicated to extending the healing ministry of Christ by providing exceptional, whole-person care that improves the health, well-being, and quality of life of the communities we serve.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe that true healing addresses not just the physical, but also the emotional and spiritual needs of each patient. Our commitment to whole-person care means we treat you as an individual, not just a diagnosis.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <MdHealthAndSafety className="text-2xl text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
          <p className="text-gray-600">
            We strive for excellence in everything we do, from patient care to medical innovation and research.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <MdPeople className="text-2xl text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
          <p className="text-gray-600">
            Every patient is treated with dignity, respect, and genuine care. We understand that healing requires both medical expertise and human connection.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
            <MdVerified className="text-2xl text-teal-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
          <p className="text-gray-600">
            We maintain the highest ethical standards, ensuring transparency, honesty, and accountability in all our interactions.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-teal-50 rounded-xl p-8 mb-12 border border-teal-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            Founded in 1970, Meridian Health began as a small community hospital with a vision to provide comprehensive, compassionate care to all who needed it. Over the decades, we have grown into a nationally recognized healthcare system while maintaining our commitment to whole-person care.
          </p>
          <p className="leading-relaxed">
            Today, we serve over 100,000 patients annually across multiple locations, offering a full spectrum of medical services from primary care to advanced specialty treatments. Our growth has been guided by our founding principles: treating each person with dignity, providing the highest quality care, and serving our community with compassion.
          </p>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition & Accreditation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <MdVerified className="text-3xl text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">The Joint Commission Accreditation</h3>
              <p className="text-gray-600 text-sm">Gold Seal of Approval for meeting the highest standards of quality and safety</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdHealthAndSafety className="text-3xl text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Magnet Recognition</h3>
              <p className="text-gray-600 text-sm">Recognized for nursing excellence and quality patient care</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdLocalHospital className="text-3xl text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Top Hospital Recognition</h3>
              <p className="text-gray-600 text-sm">Consistently ranked among the nation's best hospitals</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MdFavorite className="text-3xl text-teal-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Patient Safety Excellence</h3>
              <p className="text-gray-600 text-sm">Awarded for outstanding commitment to patient safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
