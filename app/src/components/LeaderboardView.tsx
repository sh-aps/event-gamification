'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { User } from '@/types'

export function LeaderboardView() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard')
        const data = await response.json()
        setUsers(data.users)
      } catch (error) {
        console.error('Error fetching leaderboard:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        CONGRATULATE THE MOST ACTIVE MEMBERS OF OUR EVENT
      </h1>
      
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user._id}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-gray-500 w-8">
                {index + 1}
              </span>
              <div className="relative w-12 h-12">
                <Image
                  src={`https://api.dicebear.com/7.x/bottts-neutral/png?seed=${user.name}`}
                  alt={user.name}
                  className="rounded-full"
                  fill
                />
              </div>
              <span className="font-semibold">{user.name}</span>
            </div>
            <span className="text-blue-600 font-bold">
              {user.totalPoints} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 