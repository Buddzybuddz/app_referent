'use client'

import React, { useState, useTransition } from 'react'
import { getReferents, createCollaborateur, updateCollaborateur, deleteCollaborateur, getSession } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserPlus, Users, Mail, Loader2, MoreVertical, Edit, Trash2, ShieldAlert } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DatePicker } from '@/components/ui/date-picker'

export default function AdminReferentsPage() {
  const [referents, setReferents] = useState<any[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isPending, startTransition] = useTransition()
  const [openCreate, setOpenCreate] = useState(false)
  const [editingReferent, setEditingReferent] = useState<any>(null)
  const [deletingReferent, setDeletingReferent] = useState<any>(null)

  // Fetch on mount
  React.useEffect(() => {
    async function load() {
      const [allRefs, session] = await Promise.all([getReferents(), getSession()])
      setReferents(allRefs)
      setCurrentUser(session)
    }
    load()
  }, [])

  const refreshList = async () => {
    const data = await getReferents()
    setReferents(data)
  }

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      prenom: formData.get('prenom') as string,
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      dateNaissance: formData.get('dateNaissance') as string,
      dateEntree: new Date().toISOString(), // Default entry for new admin-created referents
    }

    startTransition(async () => {
      const result = await createCollaborateur(data)
      if (result.success) {
        toast.success("Compte créé avec succès !")
        await refreshList()
        setOpenCreate(false)
      } else {
        toast.error(result.error)
      }
    })
  }

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingReferent) return

    const formData = new FormData(e.currentTarget)
    const data = {
      prenom: formData.get('prenom') as string,
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      dateNaissance: formData.get('dateNaissance') as string,
    }

    startTransition(async () => {
      const result = await updateCollaborateur(editingReferent.id, data)
      if (result.success) {
        toast.success("Profil mis à jour !")
        await refreshList()
        setEditingReferent(null)
      } else {
        toast.error(result.error)
      }
    })
  }

  const handleDelete = () => {
    if (!deletingReferent) return

    startTransition(async () => {
      const result = await deleteCollaborateur(deletingReferent.id)
      if (result.success) {
        toast.success("Compte supprimé !")
        await refreshList()
        setDeletingReferent(null)
      } else {
        toast.error(result.error)
      }
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Users className="h-8 w-8 text-indigo-600" /> Gestion de l'Équipe
          </h2>
          <p className="text-slate-500 mt-1">Gérez les accès et les profils de tous les collaborateurs.</p>
        </div>

        <Dialog open={openCreate} onOpenChange={setOpenCreate}>
          <DialogTrigger render={<Button className="bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-100 font-bold" />}>
            <div className="flex items-center">
               <UserPlus className="mr-2 h-4 w-4" /> Ajouter un membre
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
             <DialogHeader>
               <DialogTitle className="text-2xl font-bold">Nouveau Collaborateur</DialogTitle>
               <DialogDescription>
                 Remplissez l'identité. S'il a un rôle, il pourra se connecter avec son email.
               </DialogDescription>
             </DialogHeader>
             <form onSubmit={handleCreate} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" name="prenom" required placeholder="Alice" className="border-slate-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom</Label>
                    <Input id="nom" name="nom" required placeholder="Martin" className="border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Date de Naissance</Label>
                  <DatePicker name="dateNaissance" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email de connexion (Optionnel)</Label>
                  <Input id="email" name="email" type="email" placeholder="alice@entreprise.com" className="border-slate-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Rôle / Accès</Label>
                  <Select name="role" defaultValue="NONE">
                    <SelectTrigger className="border-slate-200">
                      <SelectValue placeholder="Choisir un rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NONE">Pas d'accès (Collaborateur simple)</SelectItem>
                      <SelectItem value="USER">Référent Standard</SelectItem>
                      <SelectItem value="ADMIN">Administrateur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter className="pt-4">
                  <Button type="button" variant="outline" onClick={() => setOpenCreate(false)}>Annuler</Button>
                  <Button type="submit" disabled={isPending} className="bg-indigo-600 min-w-[120px]">
                    {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Créer le profil"}
                  </Button>
                </DialogFooter>
             </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {referents.length > 0 ? (
          referents.map((ref) => (
            <Card key={ref.id} className="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden group rounded-2xl">
              <CardHeader className="pb-4 border-b bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 font-bold text-lg shadow-sm">
                      {ref.prenom[0]}{ref.nom[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
                        {ref.prenom} {ref.nom}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {ref.role === 'ADMIN' ? (
                          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Admin
                          </span>
                        ) : ref.role === 'USER' ? (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Référent
                          </span>
                        ) : (
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Collab.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 rounded-full" />}>
                       <MoreVertical className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => setEditingReferent(ref)} className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => setDeletingReferent(ref)} 
                        className="cursor-pointer text-rose-600 focus:text-rose-600 focus:bg-rose-50"
                        disabled={ref.id === currentUser?.id}
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                 <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                   <Mail className="h-4 w-4 text-slate-400" /> {ref.email || "Pas d'email"}
                 </div>
              </CardContent>
            </Card>
          ))
        ) : (
           <div className="col-span-full py-20 text-center text-slate-400 bg-white rounded-3xl border-2 border-dashed border-slate-100">
             <div className="flex flex-col items-center gap-2">
               <Loader2 className="h-8 w-8 animate-spin text-indigo-200" />
               <p className="font-medium">Chargement des membres...</p>
             </div>
           </div>
        )}
      </div>

      {/* MODAL MODIFICATION */}
      <Dialog open={!!editingReferent} onOpenChange={(open) => !open && setEditingReferent(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-bold text-slate-800">Modifier le Profil</DialogTitle>
            <DialogDescription>
              Mettez à jour les informations de {editingReferent?.prenom}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4 pt-4">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="edit-prenom">Prénom</Label>
                 <Input id="edit-prenom" name="prenom" required defaultValue={editingReferent?.prenom} className="border-slate-200" />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="edit-nom">Nom</Label>
                 <Input id="edit-nom" name="nom" required defaultValue={editingReferent?.nom} className="border-slate-200" />
               </div>
             </div>
             <div className="space-y-2">
               <Label>Date de Naissance</Label>
               <DatePicker name="dateNaissance" required date={editingReferent?.dateNaissance ? new Date(editingReferent.dateNaissance) : undefined} />
             </div>
             <div className="space-y-2">
               <Label htmlFor="edit-email">Email de connexion</Label>
               <Input id="edit-email" name="email" type="email" defaultValue={editingReferent?.email || ''} className="border-slate-200" />
             </div>
             <div className="space-y-2">
               <Label htmlFor="edit-role">Rôle / Accès</Label>
               <Select name="role" defaultValue={editingReferent?.role}>
                 <SelectTrigger className="border-slate-200">
                   <SelectValue placeholder="Choisir un rôle" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="NONE">Pas d'accès (Collaborateur simple)</SelectItem>
                   <SelectItem value="USER">Référent Standard</SelectItem>
                   <SelectItem value="ADMIN">Administrateur</SelectItem>
                 </SelectContent>
               </Select>
             </div>
             <DialogFooter className="pt-4">
               <Button type="button" variant="outline" onClick={() => setEditingReferent(null)}>Annuler</Button>
               <Button type="submit" disabled={isPending} className="bg-indigo-600 min-w-[120px]">
                 {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enregistrer"}
               </Button>
             </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* DIALOGUE SUPPRESSION */}
      <Dialog open={!!deletingReferent} onOpenChange={(open) => !open && setDeletingReferent(null)}>
        <DialogContent className="sm:max-w-[400px] border-rose-100">
          <DialogHeader className="items-center text-center">
            <div className="h-12 w-12 rounded-full bg-rose-50 flex items-center justify-center mb-4">
              <ShieldAlert className="h-6 w-6 text-rose-600" />
            </div>
            <DialogTitle className="text-xl font-bold text-slate-800">Supprimer le profil ?</DialogTitle>
            <DialogDescription className="text-slate-500">
              Êtes-vous sûr de vouloir supprimer le profil de <span className="font-bold text-slate-700">{deletingReferent?.prenom} {deletingReferent?.nom}</span> ? 
              <br/><br/>
              Cette action est irréversible et ne peut être effectuée que si ce collaborateur ne suit personne.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 justify-center sm:justify-center pt-4">
            <Button type="button" variant="outline" onClick={() => setDeletingReferent(null)} className="flex-1">Annuler</Button>
            <Button 
              type="button" 
              onClick={handleDelete} 
              disabled={isPending}
              className="bg-rose-600 hover:bg-rose-700 text-white flex-1 font-bold"
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Oui, supprimer"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
