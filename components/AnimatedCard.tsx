'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

const AnimatedCard = ({ children, className = '', delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay
      }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard