'use client'

import { useEffect, useState } from 'react'

interface Notification {
  id: string
  message: string
  type: string
  expiresAt: string | null
  active: boolean
}

export default function Notification() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotifications] = useState(true)
  const [dismissedNotifications, setDismissedNotifications] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dismissedNotifications')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications/public', {
          cache: 'no-store',
          next: { revalidate: 0 }
        })
        
        if (!res.ok) {
          console.error('Failed to fetch notifications')
          return
        }
        
        const data = await res.json()
        const notificationsArray = Array.isArray(data) 
          ? data 
          : data.notifications || []
        
        const activeNotifications = notificationsArray.filter((notification: Notification) => {
          const now = new Date()
          return notification.active && 
                 (!notification.expiresAt || new Date(notification.expiresAt) > now) &&
                 !dismissedNotifications.includes(notification.id)
        })
        setNotifications(activeNotifications)
      } catch (error) {
        console.error('Error fetching notifications:', error)
      }
    }

    fetchNotifications()
    const interval = setInterval(fetchNotifications, 60000)
    return () => clearInterval(interval)
  }, [dismissedNotifications])

  const handleDismiss = (id: string) => {
    const newDismissedNotifications = [...dismissedNotifications, id]
    setDismissedNotifications(newDismissedNotifications)
    localStorage.setItem('dismissedNotifications', JSON.stringify(newDismissedNotifications))
    setNotifications(notifications.filter(n => n.id !== id))
  }

  if (!notifications.length) return null

  return (
    <div className="bg-gray-50 border-b">
      {showNotifications && notifications.length > 0 && (
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col gap-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-lg p-3 transition-all duration-300 ${
                  notification.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
                  notification.type === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                  'bg-blue-50 text-blue-800 border border-blue-200'
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    {notification.type === 'error' && (
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {notification.type === 'warning' && (
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    {notification.type === 'info' && (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="font-medium">{notification.message}</p>
                  </div>
                  <button 
                    onClick={() => handleDismiss(notification.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}