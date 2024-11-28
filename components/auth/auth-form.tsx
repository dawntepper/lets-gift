"use client"

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/auth'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'

export function AuthForm() {
  const { theme } = useTheme()
  
  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-lg">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: 'hsl(var(--primary))',
                brandAccent: 'hsl(var(--primary))',
                inputBackground: 'hsl(var(--background))',
                inputText: 'hsl(var(--foreground))',
                inputBorder: 'hsl(var(--border))',
                inputBorderFocus: 'hsl(var(--ring))',
                inputBorderHover: 'hsl(var(--ring))',
              },
            },
          },
          className: {
            button: 'rounded-lg',
            input: 'rounded-lg',
            label: 'text-foreground',
          },
        }}
        theme={theme === 'dark' ? 'dark' : 'default'}
        providers={['google', 'github']}
        redirectTo={`${window.location.origin}/auth/callback`}
      />
    </Card>
  )
}