import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import PatientInfo from './pages/PatientInfo'
import AppointmentConfirm from './pages/AppointmentConfirm'
import Services from './pages/Services'
import About from './pages/About'
import Placeholder from './pages/Placeholder'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Navigate to="/doctors" replace />} />
          <Route path="/appointments/patient-info" element={<PatientInfo />} />
          <Route path="/appointments/confirm" element={<AppointmentConfirm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Placeholder title="Contact Us" description="Get in touch with our team" />}
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
