'use client'
import { SignUpForm } from '@/components/SignUpForm'
import Logo from '@/components/ui/logo'

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center background bg-primary-red">
                <div className="w-full max-w-md px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-4 filter">
                        Welcome to OSDay25
                    </h1>
                    <div className="flex justify-center items-center mb-4">
                        <Logo width={100} height={100} />
                    </div>

                    <p className="text-center mb-8 filter">
                        Join the OSDay25 challenge and collect points through exciting activities!
                        Unlock exclusive rewards with your earned points!
                    </p>

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
