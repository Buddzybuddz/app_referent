'use client'

import React, { useTransition } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { createRefere } from '@/app/actions'
import { useRouter } from 'next/navigation'

import { DatePicker } from '@/components/ui/date-picker'

export default function NewRefereModal({ referentId }: { referentId: string }) {
  const [open, setOpen] = React.useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const data = {
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom') as string,
      dateEntree: formData.get('dateEntree') as string,
      dateNaissance: formData.get('dateNaissance') as string,
      leaderActuel: formData.get('leaderActuel') as string,
      referentId: referentId,
      email: formData.get('email') as string,
      telephone: formData.get('telephone') as string,
      ville: formData.get('ville') as string,
      site: formData.get('site') as string,
      role: 'NONE', // Standard collaborator added from dashboard has no login by default
    }

    startTransition(async () => {
      const result = await createRefere(data)
      if (result.success) {
        toast.success("Collaborateur ajouté avec succès !")
        setOpen(false)
        router.refresh()
      } else {
        toast.error(result.error || "Une erreur est survenue")
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200" />}>
        <div className="flex items-center">
          <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un collaborateur
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">Nouveau Collaborateur</DialogTitle>
          <DialogDescription>
            Créez un profil pour un membre de votre équipe.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom</Label>
              <Input id="prenom" name="prenom" required placeholder="Ex: Marc" className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" name="nom" required placeholder="Ex: Leblanc" className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateEntree">Date d'entrée</Label>
              <DatePicker name="dateEntree" required date={new Date()} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateNaissance">Date de naissance</Label>
              <DatePicker name="dateNaissance" required placeholder="Sélect. date" />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="space-y-2">
              <Label htmlFor="leaderActuel">Leader Actuel</Label>
              <Input id="leaderActuel" name="leaderActuel" required placeholder="Ex: Marc Dubois" className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email (Optionnel)</Label>
              <Input id="email" name="email" type="email" placeholder="Ex: clare@empiris.com" className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone</Label>
              <Input id="telephone" name="telephone" placeholder="Ex: 06 12 34 56 78" className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ville">Ville</Label>
              <Input id="ville" name="ville" placeholder="Ex: Lyon" className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="site">Site / Bureau</Label>
              <Input id="site" name="site" placeholder="Ex: Site Innovation" className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Annuler</Button>
            <Button type="submit" disabled={isPending} className="bg-indigo-600 hover:bg-indigo-700 min-w-[120px]">
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Créer le profil"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
