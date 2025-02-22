'use client'
import { SignUpForm } from '@/components/SignUpForm'

export default function HomePage() {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md px-4 py-8">
            <h1 className="text-3xl text-white font-bold text-center mb-8 filter drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Welcome to OSDay25</h1>
            
            <div className="
                w-full
                p-6
                space-y-4
                bg-white
                border-2
                border-neutral-950
                shadow-[4px_4px_0px_0px_rgba(23,23,23)]
                rounded-lg
            ">
                <SignUpForm />
            </div>
        </div>
        </div>
      </>
    )
}
