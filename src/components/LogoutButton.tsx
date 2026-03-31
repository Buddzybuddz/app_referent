'use client'

import React, { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { LogOut, Loader2 } from 'lucide-react'
import { logout } from '@/app/actions'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleLogout = () => {
    startTransition(async () => {
      await logout()
      router.push('/login')
      router.refresh()
    })
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={handleLogout}
      disabled={isPending}
      className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors rounded-full"
      title="Déconnexion"
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
    </Button>
  )
}
