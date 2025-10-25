'use client'
import { motion } from 'framer-motion'
import { Target, Eye, History, Users } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional education that empowers students to achieve their full potential and make positive contributions to society.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a leading educational institution recognized for innovation, excellence, and student success.'
    },
    {
      icon: History,
      title: 'Our Story',
      description: 'Founded in 1998, we have been transforming lives through education for over two decades.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse and inclusive community where every student feels valued and supported.'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                About EduPrime
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              For over 25 years, we have been committed to providing world-class education
              and nurturing the next generation of leaders, innovators, and change-makers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <div className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
                Since our founding in 1998, EduPrime has grown from a small community school
                to a leading educational institution serving thousands of students across the region.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
                Our commitment to innovation in teaching methods and curriculum development
                has consistently placed us at the forefront of educational excellence.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">25+</div>
                  <div className="text-sm sm:text-base text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary-600 mb-1 sm:mb-2">100+</div>
                  <div className="text-sm sm:text-base text-gray-600">Expert Faculty</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-6 sm:p-8 h-64 sm:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <History className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Since 1998</h3>
                    <p className="text-sm sm:text-base text-gray-600">Building futures through education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}