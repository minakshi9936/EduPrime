'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  Search, 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Image as ImageIcon,
  Video,
  Users,
  GraduationCap,
  Award
} from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

// Dummy gallery data
const galleryItems = [
  // Campus Life
  {
    id: 1,
    type: 'image',
    category: 'campus',
    title: 'Modern Campus',
    description: 'Our state-of-the-art campus facilities',
    image: '/api/placeholder/800/600',
    featured: true
  },
  {
    id: 2,
    type: 'image',
    category: 'campus',
    title: 'Library',
    description: '24/7 access to vast digital and physical resources',
    image: '/api/placeholder/800/600'
  },
  {
    id: 3,
    type: 'image',
    category: 'campus',
    title: 'Science Lab',
    description: 'Advanced laboratories for practical learning',
    image: '/api/placeholder/800/600'
  },

  // Events
  {
    id: 4,
    type: 'image',
    category: 'events',
    title: 'Graduation 2024',
    description: 'Celebrating our graduates achievements',
    image: '/api/placeholder/800/600',
    featured: true
  },
  {
    id: 5,
    type: 'video',
    category: 'events',
    title: 'Annual Sports Day',
    description: 'Students showcasing their athletic talents',
    image: '/api/placeholder/800/600',
    videoUrl: '#'
  },
  {
    id: 6,
    type: 'image',
    category: 'events',
    title: 'Science Fair',
    description: 'Innovative projects from young scientists',
    image: '/api/placeholder/800/600'
  },

  // Students
  {
    id: 7,
    type: 'image',
    category: 'students',
    title: 'Study Group',
    description: 'Collaborative learning in action',
    image: '/api/placeholder/800/600'
  },
  {
    id: 8,
    type: 'image',
    category: 'students',
    title: 'International Students',
    description: 'Our diverse student community',
    image: '/api/placeholder/800/600',
    featured: true
  },
  {
    id: 9,
    type: 'image',
    category: 'students',
    title: 'Robotics Club',
    description: 'Students building innovative robots',
    image: '/api/placeholder/800/600'
  },

  // Achievements
  {
    id: 10,
    type: 'image',
    category: 'achievements',
    title: 'Award Ceremony',
    description: 'Recognizing academic excellence',
    image: '/api/placeholder/800/600'
  },
  {
    id: 11,
    type: 'image',
    category: 'achievements',
    title: 'Research Publication',
    description: 'Student research making an impact',
    image: '/api/placeholder/800/600',
    featured: true
  },
  {
    id: 12,
    type: 'image',
    category: 'achievements',
    title: 'Competition Winners',
    description: 'Our champions in national competitions',
    image: '/api/placeholder/800/600'
  },

  // Additional items to fill the gallery
  {
    id: 13,
    type: 'image',
    category: 'campus',
    title: 'Student Lounge',
    description: 'Comfortable spaces for relaxation',
    image: '/api/placeholder/800/600'
  },
  {
    id: 14,
    type: 'image',
    category: 'events',
    title: 'Cultural Festival',
    description: 'Celebrating diversity and traditions',
    image: '/api/placeholder/800/600'
  },
  {
    id: 15,
    type: 'video',
    category: 'students',
    title: 'Campus Tour',
    description: 'Virtual tour of our facilities',
    image: '/api/placeholder/800/600',
    videoUrl: '#'
  },
  {
    id: 16,
    type: 'image',
    category: 'achievements',
    title: 'Alumni Success',
    description: 'Our graduates making waves in industry',
    image: '/api/placeholder/800/600'
  }
]

const categories = [
  { id: 'all', name: 'All Photos', icon: ImageIcon, count: galleryItems.length },
  { id: 'campus', name: 'Campus', icon: GraduationCap, count: galleryItems.filter(item => item.category === 'campus').length },
  { id: 'events', name: 'Events', icon: Users, count: galleryItems.filter(item => item.category === 'events').length },
  { id: 'students', name: 'Students', icon: Users, count: galleryItems.filter(item => item.category === 'students').length },
  { id: 'achievements', name: 'Achievements', icon: Award, count: galleryItems.filter(item => item.category === 'achievements').length }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredItems = galleryItems.filter(item => item.featured)

  const openLightbox = (item: typeof galleryItems[0], index: number) => {
    setSelectedImage(item)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage?.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    }
    
    setSelectedImage(filteredItems[newIndex])
    setLightboxIndex(newIndex)
  }

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return
    
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateLightbox('prev')
    if (e.key === 'ArrowRight') navigateLightbox('next')
  }

  // Add event listener for keyboard navigation
  useState(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown as any)
      return () => window.removeEventListener('keydown', handleKeyDown as any)
    }
  })

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
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the vibrant life at EduPrime through our collection of photos and videos 
              showcasing campus events, student achievements, and memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Featured Moments
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing the essence of campus life and student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <AnimatedCard key={item.id} delay={index * 0.2}>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => {
                    const itemIndex = galleryItems.findIndex(i => i.id === item.id)
                    openLightbox(item, itemIndex)
                  }}
                >
                  {/* Image Container */}
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <ImageIcon className="h-16 w-16 text-gray-400" />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="text-white text-center"
                      >
                        {item.type === 'video' ? (
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        ) : (
                          <ZoomIn className="h-12 w-12 text-white" />
                        )}
                      </motion.div>
                    </div>

                    {/* Badge */}
                    {item.type === 'video' && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        VIDEO
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery with Filter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    <span>{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-80 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    const itemIndex = filteredItems.findIndex(i => i.id === item.id)
                    openLightbox(item, itemIndex)
                  }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
                    {/* Image Container */}
                    <div className="aspect-square bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          className="text-white text-center"
                        >
                          {item.type === 'video' ? (
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="h-6 w-6 text-white ml-0.5" />
                            </div>
                          ) : (
                            <ZoomIn className="h-8 w-8 text-white" />
                          )}
                        </motion.div>
                      </div>

                      {/* Badge */}
                      {item.type === 'video' && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          VIDEO
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Media */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="w-full max-w-2xl aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    {selectedImage.type === 'video' ? (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-lg">Video Content</p>
                        <p className="text-gray-400 text-sm mt-2">Click to play video</p>
                      </div>
                    ) : (
                      <ImageIcon className="h-16 w-16 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Info Panel */}
                <div className="lg:w-80 bg-gray-900 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-2">Category:</span>
                      <span className="capitalize">{selectedImage.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-2">Type:</span>
                      <span className="capitalize">{selectedImage.type}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-2">Image:</span>
                      <span>{lightboxIndex + 1} of {filteredItems.length}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-6">
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors">
                      Download
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}