'use client'

import React, { useState, useTransition } from 'react'
import { login } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Loader2, LogIn, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    startTransition(async () => {
      const result = await login(email)
      if (result.success) {
        toast.success("Connexion réussie !")
        router.push('/')
        router.refresh()
      } else {
        toast.error(result.error)
      }
    })
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-md border-slate-200 shadow-2xl overflow-hidden rounded-3xl">
        <CardHeader className="space-y-4 bg-indigo-600 text-white pb-8">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
            <LogIn className="h-6 w-6 text-white" />
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl font-bold">Bienvenue</CardTitle>
            <CardDescription className="text-indigo-100">
              Connectez-vous à votre espace Mentoring Dashboard.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-8 px-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-600 font-semibold ml-1">Adresse Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="pl-10 h-11 border-slate-200 focus:border-indigo-500 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95"
            >
              {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Se connecter"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-slate-50 border-t border-slate-100 py-4 justify-center">
          <p className="text-xs text-slate-400">
            Accès sécurisé par profil référent.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
