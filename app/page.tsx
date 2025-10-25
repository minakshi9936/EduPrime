'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, Users, BookOpen, Award, Phone, Mail, MapPin, Send } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

export default function Home() {
  const stats = [
    { number: '2,500+', label: 'Students', icon: Users },
    { number: '150+', label: 'Courses', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '25+', label: 'Years Experience', icon: Award },
  ]

  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and experienced educators.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Modern Curriculum',
      description: 'Updated courses that match current industry requirements.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Career Support',
      description: 'Comprehensive career guidance and placement assistance.',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our admissions team',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      details: 'info@eduprime.com',
      action: 'mailto:info@eduprime.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule a campus tour',
      details: '123 Education Street',
      action: '/contact',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-secondary-100/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                  Shape Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                  Future With Us
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl"
              >
                Empowering students with quality education and innovative learning experiences for a brighter tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
              >
                <Link href="/admissions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Your Journey
                  </motion.button>
                </Link>

                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors w-full sm:w-auto justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Play size={18} className="text-primary-600 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">Watch Tour</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src="https://res.cloudinary.com/dh9uxczld/image/upload/v1761393898/school1_n41hvf.png"
                  alt="Students learning together"
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-primary-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-4 h-4 sm:w-8 sm:h-8 bg-secondary-400 rounded-full opacity-20"
        />
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Why Choose EduPrime?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover what makes us the preferred choice for quality education and student success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.2}>
                <div className="p-6 sm:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>


{/* Contact Section */}
<section className="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Ready to learn more? Contact us today and discover how EduPrime can help you achieve your educational goals.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Side - School Details */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <AnimatedCard>
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-primary-600">EduPrime</span>?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">25+ Years of Excellence</h4>
                  <p className="text-gray-600">
                    With over two decades of experience in education, we've perfected the art of nurturing young minds and building successful futures.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">2,500+ Successful Alumni</h4>
                  <p className="text-gray-600">
                    Join our network of graduates who are making significant impacts in their chosen fields across the globe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">150+ Programs</h4>
                  <p className="text-gray-600">
                    From undergraduate to postgraduate studies, we offer a diverse range of programs tailored to meet modern industry demands.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Visit Our Campus</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-600">123 Education Street, Learning City, LC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-600">info@eduprime.com</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Employment</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </motion.div>

      {/* Right Side - Query Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <AnimatedCard>
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-2 text-gray-800">Send us a Query</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and our admissions team will contact you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="home-firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="home-firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="home-lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="home-lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="home-email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="home-phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="home-program" className="block text-sm font-medium text-gray-700 mb-2">
                  Program of Interest
                </label>
                <select
                  id="home-program"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a program</option>
                  <option value="undergraduate">Undergraduate Programs</option>
                  <option value="graduate">Graduate Programs</option>
                  <option value="diploma">Diploma Programs</option>
                  <option value="certificate">Certificate Courses</option>
                  <option value="other">Other Programs</option>
                </select>
              </div>

              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="home-message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Tell us about your educational goals and any questions you may have..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </AnimatedCard>
      </motion.div>
    </div>

    {/* Quick Contact Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mt-12 text-center"
    >
      <p className="text-gray-600 mb-6">Prefer to contact us directly?</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="tel:+15551234567"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          <Phone className="h-5 w-5 text-green-600" />
          <span>Call: (555) 123-4567</span>
        </motion.a>
        <motion.a
          href="mailto:info@eduprime.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          <Mail className="h-5 w-5 text-blue-600" />
          <span>Email: info@eduprime.com</span>
        </motion.a>
      </div>
    </motion.div>
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
              Take the first step toward your future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}