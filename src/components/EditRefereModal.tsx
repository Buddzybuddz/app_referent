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
import { UserCog, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { updateRefere } from '@/app/actions'
import { useRouter } from 'next/navigation'

interface EditRefereModalProps {
  refere: {
    id: string
    nom: string
    prenom: string
    dateEntree: Date | string
    dateNaissance: Date | string
    leaderActuel?: string | null
    referentId?: string | null
    email?: string | null
    telephone?: string | null
    ville?: string | null
    site?: string | null
  }
}

import { DatePicker } from '@/components/ui/date-picker'

export default function EditRefereModal({ refere }: EditRefereModalProps) {
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
      referentId: refere.referentId,
      email: formData.get('email') as string,
      telephone: formData.get('telephone') as string,
      ville: formData.get('ville') as string,
      site: formData.get('site') as string,
    }

    startTransition(async () => {
      const result = await updateRefere(refere.id, data)
      if (result.success) {
        toast.success("Profil mis à jour avec succès !")
        setOpen(false)
        router.refresh()
      } else {
        toast.error(result.error || "Erreur lors de la mise à jour")
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold shadow-sm" />}>
        <div className="flex items-center">
          <UserCog className="mr-2 h-4 w-4" /> Modifier le profil
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">Modifier le Profil</DialogTitle>
          <DialogDescription>
            Mettez à jour les informations de {refere.prenom}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-prenom">Prénom</Label>
              <Input id="edit-prenom" name="prenom" required defaultValue={refere.prenom} className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-nom">Nom</Label>
              <Input id="edit-nom" name="nom" required defaultValue={refere.nom} className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-dateEntree">Date d'entrée</Label>
              <DatePicker name="dateEntree" required date={new Date(refere.dateEntree)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-dateNaissance">Date de naissance</Label>
              <DatePicker name="dateNaissance" required date={new Date(refere.dateNaissance)} />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="space-y-2">
              <Label htmlFor="edit-leaderActuel">Leader Actuel</Label>
              <Input id="edit-leaderActuel" name="leaderActuel" defaultValue={refere.leaderActuel || ''} className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input id="edit-email" name="email" type="email" defaultValue={refere.email || ''} className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-telephone">Téléphone</Label>
              <Input id="edit-telephone" name="telephone" defaultValue={refere.telephone || ''} className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-ville">Ville</Label>
              <Input id="edit-ville" name="ville" defaultValue={refere.ville || ''} className="border-slate-200 focus:border-indigo-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-site">Site / Bureau</Label>
              <Input id="edit-site" name="site" defaultValue={refere.site || ''} className="border-slate-200 focus:border-indigo-500" />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Annuler</Button>
            <Button type="submit" disabled={isPending} className="bg-indigo-600 hover:bg-indigo-700 min-w-[120px]">
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enregistrer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
