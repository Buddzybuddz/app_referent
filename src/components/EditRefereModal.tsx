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
    isRefere: boolean
    isReferent: boolean
    isAdmin: boolean
  }
}

import { DatePicker } from '@/components/ui/date-picker'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getAllPotentialReferents } from '@/app/actions'

export default function EditRefereModal({ refere }: EditRefereModalProps) {
  const [open, setOpen] = React.useState(false)
  const [isPending, startTransition] = useTransition()
  const [potentialReferents, setPotentialReferents] = React.useState<any[]>([])
  const router = useRouter()

  React.useEffect(() => {
    if (open) {
      getAllPotentialReferents(refere.id).then(setPotentialReferents)
    }
  }, [open, refere.id])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const data = {
      nom: formData.get('nom') as string,
      prenom: formData.get('prenom') as string,
      dateEntree: formData.get('dateEntree') as string,
      dateNaissance: formData.get('dateNaissance') as string,
      leaderActuel: formData.get('leaderActuel') as string,
      referentId: formData.get('referentId') === 'none' ? null : formData.get('referentId') as string,
      email: formData.get('email') as string,
      telephone: formData.get('telephone') as string,
      ville: formData.get('ville') as string,
      site: formData.get('site') as string,
      isRefere: formData.get('isRefere') === 'on',
      isReferent: formData.get('isReferent') === 'on',
      isAdmin: formData.get('isAdmin') === 'on',
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

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-referent">Référent assigné</Label>
              <Select name="referentId" defaultValue={refere.referentId || 'none'}>
                <SelectTrigger className="border-slate-200 focus:border-indigo-500">
                  <SelectValue placeholder="Choisir un référent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Aucun référent</SelectItem>
                  {potentialReferents.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.prenom} {p.nom} ({p.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 md:col-span-2">
              <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Accès & Rôles</Label>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="modal-isRefere" name="isRefere" defaultChecked={refere.isRefere} className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                  <Label htmlFor="modal-isRefere" className="text-sm font-medium">Référé</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="modal-isReferent" name="isReferent" defaultChecked={refere.isReferent} className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                  <Label htmlFor="modal-isReferent" className="text-sm font-medium">Référent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="modal-isAdmin" name="isAdmin" defaultChecked={refere.isAdmin} className="h-4 w-4 rounded border-slate-300 text-indigo-600" />
                  <Label htmlFor="modal-isAdmin" className="text-sm font-medium">Administrateur</Label>
                </div>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="edit-leaderActuel">Leader Actuel (Interne)</Label>
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
