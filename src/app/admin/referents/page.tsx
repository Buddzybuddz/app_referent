'use client'

import React, { useState, useTransition } from 'react'
import { getReferents, createCollaborateur, updateCollaborateur, deleteCollaborateur, getSession, getAllPotentialReferents } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserPlus, Users, Mail, Loader2, MoreVertical, Edit, Trash2, ShieldAlert, Search, UserCheck, UserCog } from 'lucide-react'
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
  const [potentialReferents, setPotentialReferents] = useState<any[]>([])

  // Fetch on mount
  React.useEffect(() => {
    async function load() {
      const [allRefs, session, pRefs] = await Promise.all([
        getReferents(), 
        getSession(),
        getAllPotentialReferents()
      ])
      setReferents(allRefs)
      setCurrentUser(session)
      setPotentialReferents(pRefs)
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
      isRefere: formData.get('isRefere') === 'on',
      isReferent: formData.get('isReferent') === 'on',
      isAdmin: formData.get('isAdmin') === 'on',
      dateNaissance: formData.get('dateNaissance') as string,
      referentId: formData.get('referentId') === 'none' ? null : formData.get('referentId') as string,
      dateEntree: new Date().toISOString(),
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
      isRefere: formData.get('isRefere') === 'on',
      isReferent: formData.get('isReferent') === 'on',
      isAdmin: formData.get('isAdmin') === 'on',
      dateNaissance: formData.get('dateNaissance') as string,
      referentId: formData.get('referentId') === 'none' ? null : formData.get('referentId') as string,
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

  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState<'ALL' | 'ADMIN' | 'REFERENT' | 'REFERE'>('ALL')

  const filteredReferents = referents.filter((ref) => {
    const matchesSearch = `${ref.prenom} ${ref.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (ref.email && ref.email.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRole = roleFilter === 'ALL' || 
                        (roleFilter === 'ADMIN' && ref.isAdmin) ||
                        (roleFilter === 'REFERENT' && ref.isReferent) ||
                        (roleFilter === 'REFERE' && ref.isRefere)
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Users className="h-8 w-8 text-indigo-600" /> Gestion des collaborateurs
          </h2>
          <p className="text-slate-500 mt-1">Gérez les accès et les profils de tous les membres de l'organisation.</p>
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
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Rôles / Accès</Label>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2 cursor-pointer group">
                      <input type="checkbox" id="isRefere" name="isRefere" className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                      <Label htmlFor="isRefere" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Référé</Label>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer group">
                      <input type="checkbox" id="isReferent" name="isReferent" className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                      <Label htmlFor="isReferent" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Référent</Label>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer group">
                      <input type="checkbox" id="isAdmin" name="isAdmin" className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                      <Label htmlFor="isAdmin" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Administrateur</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referentId">Référent assigné</Label>
                  <Select name="referentId" defaultValue="none">
                    <SelectTrigger className="border-slate-200 font-medium">
                      <SelectValue placeholder="Choisir un référent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Aucun référent (Sommet hiérarchie)</SelectItem>
                      {potentialReferents.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.prenom} {p.nom} {p.isAdmin && <span className="text-[10px] bg-slate-100 px-1 rounded ml-1">Admin</span>}
                        </SelectItem>
                      ))}
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

      {/* FILTRES ET RECHERCHE */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm items-center">
         <div className="relative flex-1 w-full">
            <Input 
              placeholder="Rechercher par nom ou email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 border-slate-200 focus:ring-indigo-500 rounded-xl"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
         </div>
         <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
            <Button 
              variant={roleFilter === 'ALL' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setRoleFilter('ALL')}
              className={`flex-1 sm:flex-none h-9 rounded-lg text-xs font-bold ${roleFilter === 'ALL' ? 'bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Tous
            </Button>
            <Button 
              variant={roleFilter === 'ADMIN' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setRoleFilter('ADMIN')}
              className={`flex-1 sm:flex-none h-9 rounded-lg text-xs font-bold ${roleFilter === 'ADMIN' ? 'bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Admins
            </Button>
            <Button 
              variant={roleFilter === 'REFERENT' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setRoleFilter('REFERENT')}
              className={`flex-1 sm:flex-none h-9 rounded-lg text-xs font-bold ${roleFilter === 'REFERENT' ? 'bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Référents
            </Button>
            <Button 
              variant={roleFilter === 'REFERE' ? 'secondary' : 'ghost'} 
              size="sm"
              onClick={() => setRoleFilter('REFERE')}
              className={`flex-1 sm:flex-none h-9 rounded-lg text-xs font-bold ${roleFilter === 'REFERE' ? 'bg-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Référés
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {referents.length > 0 ? (
          filteredReferents.map((ref) => (
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
                      <div className="flex items-center flex-wrap gap-1 mt-0.5">
                        {ref.isAdmin && (
                          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Admin
                          </span>
                        )}
                        {ref.isReferent && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Référent
                          </span>
                        )}
                        {ref.isRefere && (
                          <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                            Référé
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
                      <DropdownMenuItem 
                        onClick={() => window.location.href = `/refere/${ref.id}`} 
                        className="cursor-pointer"
                      >
                        <UserCheck className="mr-2 h-4 w-4" /> Consulter Profil
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setEditingReferent(ref)} className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" /> Modifier Rapide
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
              <CardContent className="pt-4 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                   <Mail className="h-3.5 w-3.5 text-slate-400" /> {ref.email || "Pas d'email"}
                 </div>
                 {ref.referent && (
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                     <UserCog className="h-3.5 w-3.5 text-indigo-400" /> Mentor: {ref.referent.prenom} {ref.referent.nom}
                   </div>
                 )}
                 {ref.equipe && ref.equipe.length > 0 && (
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                     <Users className="h-3.5 w-3.5 text-emerald-400" /> Équipe: {ref.equipe.length} référés
                   </div>
                 )}
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
            <DialogTitle className="text-2xl font-bold text-slate-800">Modifier le Profil</DialogTitle>
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
             
             <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Rôles / Accès</Label>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2 cursor-pointer group">
                    <input type="checkbox" id="edit-isRefere" name="isRefere" defaultChecked={editingReferent?.isRefere} className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <Label htmlFor="edit-isRefere" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Référé</Label>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer group">
                    <input type="checkbox" id="edit-isReferent" name="isReferent" defaultChecked={editingReferent?.isReferent} className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <Label htmlFor="edit-isReferent" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Référent</Label>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer group">
                    <input type="checkbox" id="edit-isAdmin" name="isAdmin" defaultChecked={editingReferent?.isAdmin} className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <Label htmlFor="edit-isAdmin" className="text-sm font-medium cursor-pointer group-hover:text-indigo-600">Administrateur</Label>
                  </div>
                </div>
             </div>

             <div className="space-y-2">
                <Label htmlFor="edit-referentId">Référent assigné</Label>
                <Select name="referentId" defaultValue={editingReferent?.referentId || 'none'}>
                  <SelectTrigger className="border-slate-200">
                    <SelectValue placeholder="Choisir un référent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Aucun référent</SelectItem>
                    {potentialReferents.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.prenom} {p.nom} {p.isAdmin && <span className="text-[10px] bg-slate-100 px-1 rounded ml-1">Admin</span>}
                      </SelectItem>
                    ))}
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
