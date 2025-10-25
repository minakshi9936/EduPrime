'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  UserCheck, 
  DollarSign, 
  GraduationCap,
  Calendar,
  BookOpen,
  Users,
  Award,
  ArrowRight
} from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

export default function Admissions() {
  const [activeStep, setActiveStep] = useState(0)

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Application',
      description: 'Submit your online application form with required documents',
      duration: '1-2 days'
    },
    {
      icon: UserCheck,
      title: 'Review',
      description: 'Our admission committee reviews your application',
      duration: '3-5 days'
    },
    {
      icon: Clock,
      title: 'Interview',
      description: 'Schedule and complete your admission interview',
      duration: '1 week'
    },
    {
      icon: CheckCircle,
      title: 'Decision',
      description: 'Receive admission decision and offer letter',
      duration: '2-3 days'
    },
    {
      icon: DollarSign,
      title: 'Enrollment',
      description: 'Complete enrollment and payment process',
      duration: '1 week'
    }
  ]

  const programs = [
    {
      title: 'Undergraduate Programs',
      description: 'Bachelor degrees in various fields of study',
      duration: '4 years',
      requirements: ['High School Diploma', 'Minimum GPA 3.0', 'SAT/ACT Scores'],
      deadline: 'August 15, 2024'
    },
    {
      title: 'Graduate Programs',
      description: 'Master and PhD programs for advanced studies',
      duration: '2-3 years',
      requirements: ['Bachelor Degree', 'Minimum GPA 3.2', 'GRE/GMAT Scores'],
      deadline: 'July 1, 2024'
    },
    {
      title: 'Diploma Programs',
      description: 'Professional diploma and certificate courses',
      duration: '1-2 years',
      requirements: ['High School Diploma', 'Work Experience', 'Portfolio'],
      deadline: 'Rolling Admission'
    }
  ]

  const requirements = [
    {
      icon: FileText,
      title: 'Application Form',
      description: 'Complete online application with personal information'
    },
    {
      icon: BookOpen,
      title: 'Academic Records',
      description: 'Official transcripts from previous institutions'
    },
    {
      icon: Users,
      title: 'Recommendation Letters',
      description: '2-3 letters from teachers or professionals'
    },
    {
      icon: Award,
      title: 'Test Scores',
      description: 'SAT, ACT, GRE, or GMAT scores as required'
    }
  ]

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                Admissions
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Start your educational journey with EduPrime. Discover our programs,
              admission requirements, and application process.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Admission Process
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Follow these simple steps to join our vibrant learning community
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-secondary-200"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <AnimatedCard 
                    className={`cursor-pointer transition-all ${
                      activeStep === index ? 'ring-2 ring-primary-500 transform scale-105' : ''
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        activeStep === index 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                          : 'bg-gray-100'
                      }`}>
                        <step.icon className={`h-8 w-8 ${
                          activeStep === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        activeStep === index ? 'text-primary-600' : 'text-gray-800'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </AnimatedCard>
                  
                  {/* Step number */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    activeStep === index 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                      : 'bg-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Academic Programs
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose from our diverse range of programs designed for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <AnimatedCard key={program.title} delay={index * 0.2}>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{program.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{program.description}</p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Deadline: {program.deadline}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-gray-800 text-sm sm:text-base">Requirements:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                  </motion.button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Admission Requirements
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {requirements.map((req, index) => (
              <AnimatedCard key={req.title} delay={index * 0.1}>
                <div className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <req.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{req.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{req.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="bg-white">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    Start Your Application
                  </span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our admission team will contact you within 24 hours.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a program</option>
                    <option value="undergraduate">Undergraduate Programs</option>
                    <option value="graduate">Graduate Programs</option>
                    <option value="diploma">Diploma Programs</option>
                    <option value="other">Other Programs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your educational goals and any questions you may have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Submit Application
                </motion.button>
                
                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Ready to Begin Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who started their careers at EduPrime. 
              Contact our admission office for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Admissions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}