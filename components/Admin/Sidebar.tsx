'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  BookOpen, 
  Megaphone,
  Settings 
} from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Students', path: '/admin/students', icon: Users },
    { name: 'Teachers', path: '/admin/teachers', icon: UserCheck },
    { name: 'Courses', path: '/admin/courses', icon: BookOpen },
    { name: 'Announcements', path: '/admin/announcements', icon: Megaphone },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 mb-8"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">Admin Panel</span>
        </motion.div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link key={item.name} href={item.path}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar