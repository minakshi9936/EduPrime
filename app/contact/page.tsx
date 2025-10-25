'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [activeTab, setActiveTab] = useState('contact')

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us during business hours',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime',
      details: 'info@eduprime.com',
      action: 'mailto:info@eduprime.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come see our campus',
      details: '123 Education Street, Learning City',
      action: '#map',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'We\'re here to help',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      action: '',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'academics', label: 'Academic Affairs' },
    { value: 'financial', label: 'Financial Aid' },
    { value: 'career', label: 'Career Services' },
    { value: 'international', label: 'International Students' }
  ]

  const faqs = [
    {
      question: 'How do I apply for admission?',
      answer: 'You can apply through our online portal or visit our admissions office. The application process typically takes 2-3 weeks.'
    },
    {
      question: 'What are the tuition fees?',
      answer: 'Tuition varies by program. Please contact our financial aid office for detailed fee structures and scholarship opportunities.'
    },
    {
      question: 'Do you offer online courses?',
      answer: 'Yes, we offer a variety of online and hybrid programs. Check our courses page for current online offerings.'
    },
    {
      question: 'Is campus housing available?',
      answer: 'We provide on-campus housing for both domestic and international students. Applications open 3 months before each semester.'
    }
  ]

  const socialLinks = [
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Twitter, url: '#', name: 'Twitter' },
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Linkedin, url: '#', name: 'LinkedIn' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: 'general'
      })
      
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to answer your questions and help you 
              start your educational journey at EduPrime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
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
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedCard key={method.title} delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-lg font-semibold text-gray-800">{method.details}</p>
                  {method.action && (
                    <motion.a
                      href={method.action}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      Contact via {method.title}
                    </motion.a>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  { id: 'contact', label: 'Send Message', icon: MessageCircle },
                  { id: 'faq', label: 'FAQs', icon: Globe },
                  { id: 'visit', label: 'Visit Us', icon: MapPin }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Contact Form */}
                <AnimatedCard>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
                    
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
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                          Department *
                        </label>
                        <select
                          id="department"
                          name="department"
                          required
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          {departments.map(dept => (
                            <option key={dept.value} value={dept.value}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="Enter message subject"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-vertical"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* Form Status */}
                      <AnimatePresence>
                        {formStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                          >
                            <CheckCircle className="h-5 w-5" />
                            <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                          </motion.div>
                        )}
                        
                        {formStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                          >
                            <AlertCircle className="h-5 w-5" />
                            <span>Something went wrong. Please try again.</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                        whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </AnimatedCard>

                {/* Contact Info */}
                <div className="space-y-8">
                  <AnimatedCard>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Our Address</h4>
                            <p className="text-gray-600">123 Education Street<br />Learning City, LC 12345<br />United States</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                            <p className="text-gray-600">
                              Main: +1 (555) 123-4567<br />
                              Admissions: +1 (555) 123-4568<br />
                              Emergency: +1 (555) 123-4569
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Email Addresses</h4>
                            <p className="text-gray-600">
                              General: info@eduprime.com<br />
                              Admissions: admissions@eduprime.com<br />
                              Support: support@eduprime.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Office Hours</h4>
                            <p className="text-gray-600">
                              Monday - Friday: 8:00 AM - 6:00 PM<br />
                              Saturday: 9:00 AM - 2:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                          {socialLinks.map((social) => (
                            <motion.a
                              key={social.name}
                              href={social.url}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                            >
                              <social.icon className="h-5 w-5" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>

                  {/* Emergency Contact */}
                  <AnimatedCard className="bg-gradient-to-br from-red-500 to-pink-500 text-white">
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <AlertCircle className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Emergency Contact</h3>
                      </div>
                      <p className="mb-4 opacity-90">
                        For urgent matters outside office hours, contact our 24/7 emergency line.
                      </p>
                      <div className="text-2xl font-bold">+1 (555) 123-EMER</div>
                    </div>
                  </AnimatedCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                key="faq"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto"
              >
                <AnimatedCard>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                        >
                          <h4 className="font-semibold text-lg text-gray-800 mb-3">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            )}

            {activeTab === 'visit' && (
              <motion.div
                key="visit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                <AnimatedCard>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Visit Our Campus</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Map Placeholder */}
                      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-8 text-white">
                        <div className="h-80 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-lg font-semibold">Interactive Campus Map</p>
                            <p className="opacity-80 mt-2">Map would be embedded here</p>
                          </div>
                        </div>
                      </div>

                      {/* Campus Visit Info */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Campus Tour Hours</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Weekdays: 10:00 AM, 2:00 PM, 4:00 PM</li>
                            <li>• Saturdays: 11:00 AM, 1:00 PM</li>
                            <li>• Group tours by appointment</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Parking Information</h4>
                          <p className="text-gray-600">
                            Visitor parking available in Lot A. Please check in at the security gate for a parking pass.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Public Transportation</h4>
                          <p className="text-gray-600">
                            Bus routes 12, 45, and 78 stop directly in front of campus. The nearest metro station is 0.5 miles away.
                          </p>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                          Schedule a Campus Tour
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            )}
          </AnimatePresence>
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
                Ready to Start Your Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our admissions team today to learn more about our programs, 
              schedule a campus tour, or begin your application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Call Now: (555) 123-4567
              </motion.a>
              <motion.a
                href="mailto:admissions@eduprime.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all"
              >
                Email Admissions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}