'use client'
import { motion } from 'framer-motion'
import { Users, BookOpen, TrendingUp, DollarSign } from 'lucide-react'
import AnimatedCard from '@/components/AnimatedCard'

// Dummy data
const stats = [
  { label: 'Total Students', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
  { label: 'Active Courses', value: '156', change: '+5%', icon: BookOpen, color: 'green' },
  { label: 'Attendance Rate', value: '94%', change: '+2%', icon: TrendingUp, color: 'purple' },
  { label: 'Revenue', value: '$1.2M', change: '+18%', icon: DollarSign, color: 'orange' },
]

const recentActivities = [
  { action: 'New student registration', user: 'John Doe', time: '2 min ago' },
  { action: 'Course updated', user: 'Dr. Smith', time: '15 min ago' },
  { action: 'Payment received', user: 'Sarah Wilson', time: '1 hour ago' },
  { action: 'New teacher added', user: 'Admin', time: '2 hours ago' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <AnimatedCard>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">by {activity.user}</p>
                    </div>
                    <span className="text-sm text-gray-400">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Quick Actions */}
          <AnimatedCard>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Add Student', color: 'primary' },
                  { label: 'Create Course', color: 'secondary' },
                  { label: 'Send Announcement', color: 'accent' },
                  { label: 'View Reports', color: 'primary' },
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-${action.color}-500 text-white rounded-lg font-medium text-center hover:bg-${action.color}-600 transition-colors`}
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  )
}