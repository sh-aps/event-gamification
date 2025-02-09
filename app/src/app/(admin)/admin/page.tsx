import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { SupervisorChallenges } from '@/components/SupervisorChallenges'
import { client } from '@/lib/sanity'

export default async function AdminPage() {
  const tokenCookie = (await cookies()).get('supervisor_token')?.value
  console.log(tokenCookie)
  if (!tokenCookie) {
    redirect('/')
  }

  const { email: supervisorEmail } = JSON.parse(tokenCookie)

  // Fetch supervisor and their assigned challenges
  const supervisor = await client.fetch(`
    *[_type == "user" && role == "supervisor" && email == $email][0] {
      name,
      "assignedChallenges": assignedChallenges[]-> {
        _id,
        name,
        description,
        points,
        eventCode
      }
    }
  `, { 
    email: supervisorEmail,
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Welcome, {supervisor.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your assigned challenges below
          </p>
        </div>
        <SupervisorChallenges 
          challenges={supervisor.assignedChallenges} 
        />
      </div>
    </div>
  )
} 