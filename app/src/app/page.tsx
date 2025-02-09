import { SignUpForm } from '@/components/SignUpForm'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-900">
      <div className="w-full max-w-md px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Tech Event</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
