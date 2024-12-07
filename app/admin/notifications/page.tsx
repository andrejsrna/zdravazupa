'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
  const { data: session, status } = useSession()
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('info')
  const [expiresAt, setExpiresAt] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications')
        const data = await res.json()
        setNotifications(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching notifications:', error)
        setLoading(false)
      }
    }

    if (session) {
      fetchNotifications()
    }
  }, [session])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          type,
          expiresAt: expiresAt || null,
        }),
      })

      if (res.ok) {
        const newNotification = await res.json()
        setNotifications([newNotification, ...notifications])
        setMessage('')
        setExpiresAt('')
      }
    } catch (error) {
      console.error('Error creating notification:', error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      if (res.ok) {
        setNotifications(notifications.filter(n => n.id !== id))
      }
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }

  if (status === 'loading' || loading) {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Notifications</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block mb-2">Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Expires At (optional):</label>
          <input
            type="datetime-local"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          Create Notification
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Current Notifications</h2>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.type === 'error' ? 'bg-red-100' :
              notification.type === 'warning' ? 'bg-yellow-100' :
              'bg-blue-100'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-gray-600">
                  Created: {new Date(notification.createdAt).toLocaleString()}
                </p>
                {notification.expiresAt && (
                  <p className="text-sm text-gray-600">
                    Expires: {new Date(notification.expiresAt).toLocaleString()}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleDelete(notification.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}