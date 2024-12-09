'use client'

import { useEffect, useState } from 'react'

export default function Notification() {
  const [notification, setNotification] = useState<{
    message: string
    type: string
  } | null>(null)

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const res = await fetch('/api/notifications')
        const data = await res.json()
        
        // Check if we have notifications and they're not empty
        if (data.notifications && data.notifications.length > 0) {
          setNotification(data.notifications[0])
        }
      } catch (error) {
        console.error('Error fetching notifications:', error)
      }
    }

    fetchNotification()
  }, [])

  if (!notification) return null

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
      notification.type === 'error' ? 'bg-red-100 text-red-800' :
      notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
      'bg-blue-100 text-blue-800'
    }`}>
      {notification.message}
    </div>
  )
} 