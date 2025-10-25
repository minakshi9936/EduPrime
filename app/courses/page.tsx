'use client'
import { motion } from 'framer-motion'
import { Clock, Users, Star } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

const courses = [
  {
    title: 'Computer Science',
    description: 'Learn programming, algorithms, and software development',
    duration: '4 years',
    students: '320',
    rating: '4.8',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Business Administration',
    description: 'Master business strategies and management principles',
    duration: '3 years',
    students: '280',
    rating: '4.6',
    image: '/api/placeholder/400/250'
  },
  {
    title: 'Graphic Design',
    description: 'Develop creative skills in digital and print media',
    duration: '2 years',
    students: '150',
    rating: '4.9',
    image: '/api/placeholder/400/250'
  }
]

export default function Courses() {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Our Courses
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our comprehensive range of courses designed to prepare you
              for success in today's competitive world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <AnimatedCard key={course.title} delay={index * 0.2}>
                <div className="p-4 sm:p-6">
                  <div className="w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{course.title}</h3>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition-all"
                  >
                    Learn More
                  </motion.button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}