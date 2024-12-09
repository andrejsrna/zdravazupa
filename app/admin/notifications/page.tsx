'use client'

import { useEffect, useState } from 'react'

interface Notification {
  id: string
  message: string
  type: string
  expiresAt: string | null
  active: boolean
  createdAt: string
}

export default function NotificationsAdminPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [showNotifications, setShowNotifications] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('showNotifications')
      return saved !== null ? JSON.parse(saved) : true
    }
    return true
  })

  useEffect(() => {
    localStorage.setItem('showNotifications', JSON.stringify(showNotifications))
  }, [showNotifications])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications/public', {
          cache: 'no-store',
        })
        
        if (!res.ok) {
          console.error('Failed to fetch notifications')
          return
        }
        
        const data = await res.json()
        const activeNotifications = data.filter((notification: Notification) => {
          const now = new Date()
          return notification.active && 
                 (!notification.expiresAt || new Date(notification.expiresAt) > now)
        })
        setNotifications(activeNotifications)
      } catch (error) {
        console.error('Chyba pri načítaní notifikácií:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
    // Set up polling to check for expired notifications
    const interval = setInterval(fetchNotifications, 60000) // Check every minute
    
    return () => clearInterval(interval)
  }, [])

  const handleToggle = () => {
    setShowNotifications((prev: boolean) => !prev)
  }

  if (loading) {
    return <div>Načítavam...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded ${
              showNotifications 
                ? 'bg-gray-200 hover:bg-gray-300' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            {showNotifications ? 'Skryť notifikácie' : 'Zobraziť notifikácie'}
          </button>
        </div>

        {showNotifications && notifications.length > 0 && (
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.type === 'error' ? 'bg-red-100' :
                  notification.type === 'warning' ? 'bg-yellow-100' :
                  'bg-blue-100'
                }`}
              >
                <p className="font-medium">{notification.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}