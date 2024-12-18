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
        console.log('Fetching notifications...') // Debug log
        const res = await fetch('/api/notifications', {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!res.ok) {
          console.error('Failed to fetch notifications:', res.status)
          if (res.status === 401) {
            router.push('/admin/login')
          }
          return
        }
        
        const data = await res.json()
        console.log('Received data:', data) // Debug log
        
        // Handle both array and object responses
        const notificationsArray = Array.isArray(data) ? data : data.notifications || []
        console.log('Processed notifications:', notificationsArray) // Debug log
        
        setNotifications(notificationsArray)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching notifications:', error)
        setLoading(false)
      }
    }

    if (session) {
      fetchNotifications()
    }
  }, [session, router])

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
        const currentNotifications = Array.isArray(notifications) ? notifications : []
        setNotifications([newNotification, ...currentNotifications])
        setMessage('')
        setExpiresAt('')
      } else {
        console.error('Server responded with error:', await res.text())
      }
    } catch (error) {
      console.error('Chyba pri vytváraní notifikácie:', error)
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
      console.error('Chyba pri mazaní notifikácie:', error)
    }
  }

  const handleToggle = async (id: string, currentActive: boolean) => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, active: !currentActive }),
      })

      if (res.ok) {
        setNotifications(notifications.map(notification => 
          notification.id === id 
            ? { ...notification, active: !notification.active }
            : notification
        ))
      }
    } catch (error) {
      console.error('Chyba pri prepínaní notifikácie:', error)
    }
  }

  if (status === 'loading' || loading) {
    return <div>Načítavam...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Správa notifikácií</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block mb-2">Správa:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2">Typ:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="info">Informácia</option>
            <option value="warning">Upozornenie</option>
            <option value="error">Chyba</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Platnosť do (voliteľné):</label>
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
          Vytvoriť notifikáciu
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Aktuálne notifikácie</h2>
        {notifications && notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg ${
                notification.type === 'error' ? 'bg-red-100' :
                notification.type === 'warning' ? 'bg-yellow-100' :
                'bg-blue-100'
              } ${!notification.active ? 'opacity-50' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-600">
                    Vytvorené: {new Date(notification.createdAt).toLocaleString()}
                  </p>
                  {notification.expiresAt && (
                    <p className="text-sm text-gray-600">
                      Platné do: {new Date(notification.expiresAt).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleToggle(notification.id, notification.active)}
                    className={`px-3 py-1 rounded ${
                      notification.active 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'bg-gray-500 text-white hover:bg-gray-600'
                    }`}
                  >
                    {notification.active ? 'Aktívna' : 'Neaktívna'}
                  </button>
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Vymazať
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Žiadne notifikácie</p>
        )}
      </div>
    </div>
  )
}