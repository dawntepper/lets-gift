import { AuthForm } from '@/components/auth/auth-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Welcome to Gift Advisor</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to save your gift lists and chat history
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
}