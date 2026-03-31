'use client'

import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Plus, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  History,
  MoreVertical,
  ExternalLink,
  Milestone
} from 'lucide-react'
import { addProjet } from '@/app/actions'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface Projet {
  id: string
  nom: string
  description?: string | null
  dateDebut: Date | string
  dateFin?: Date | string | null
}

interface ProjetManagerProps {
  collaborateurId: string
  projets: Projet[]
}

import { DatePicker } from '@/components/ui/date-picker'

export default function ProjetManager({ collaborateurId, projets }: ProjetManagerProps) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    const data = {
      nom: formData.get('nom') as string,
      description: formData.get('description') as string,
      dateDebut: formData.get('dateDebut') as string,
      dateFin: formData.get('dateFin') as string || null,
      collaborateurId: collaborateurId,
    }

    startTransition(async () => {
      const result = await addProjet(data)
      if (result.success) {
        toast.success("Projet ajouté à l'historique")
        setOpen(false)
        // router.refresh() is handled by the parent or revalidatePath
      } else {
        toast.error("Erreur lors de l'ajout du projet")
      }
    })
  }

  return (
    <Card className="border-slate-200 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b bg-slate-50/30">
        <div>
          <CardTitle className="text-xl font-bold flex items-center gap-2 text-slate-800">
            <History className="h-5 w-5 text-indigo-500" /> Historique des Projets
          </CardTitle>
          <CardDescription>Liste chronologique des missions et projets réalisés.</CardDescription>
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 shadow-sm font-bold" />}>
            <div className="flex items-center">
              <Plus className="h-4 w-4 mr-1" /> Nouveau Projet
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800">Ajouter un Projet</DialogTitle>
              <DialogDescription>
                Renseignez les détails de la nouvelle mission du référé.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom du Projet</Label>
                <Input id="nom" name="nom" required placeholder="Ex: Migration Cloud AWS" className="border-slate-200" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateDebut">Date de début</Label>
                  <DatePicker name="dateDebut" required placeholder="Sélect. date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFin">Date de fin (Optionnel)</Label>
                  <DatePicker name="dateFin" placeholder="Sélect. date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description / Rôle</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Détaillez les responsabilités ou technologies utilisées..." 
                  className="border-slate-200 min-h-[100px]"
                />
              </div>

              <DialogFooter className="pt-4">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>Annuler</Button>
                <Button type="submit" disabled={isPending} className="bg-indigo-600 hover:bg-indigo-700">
                  {isPending ? "Ajout..." : "Enregistrer le projet"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>

      <CardContent className="pt-8">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-slate-100 before:to-transparent">
          {projets.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-slate-400 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 ml-10">
              <Briefcase className="h-10 w-10 mb-2 opacity-20" />
              <p className="italic">Aucun projet enregistré dans l'historique.</p>
            </div>
          ) : (
            projets.map((projet, index) => {
              const isCurrent = index === 0 && !projet.dateFin;
              return (
                <div key={projet.id} className="relative flex items-start gap-6 ml-5">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-5 mt-1.5 h-4 w-4 rounded-full border-2 bg-white ring-4 ring-white z-10 ${isCurrent ? 'border-indigo-600 scale-125' : 'border-slate-300'}`}>
                    {isCurrent && <div className="h-1.5 w-1.5 bg-indigo-600 rounded-full m-auto mt-0.5 animate-pulse" />}
                  </div>

                  <Card className={`flex-1 transition-all ${isCurrent ? 'border-indigo-100 shadow-md bg-indigo-50/20' : 'border-slate-100 shadow-sm hover:border-slate-200'}`}>
                    <CardHeader className="p-4 flex flex-row items-start justify-between space-y-0">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-bold text-base ${isCurrent ? 'text-indigo-900' : 'text-slate-800'}`}>
                            {projet.nom}
                          </h4>
                          {isCurrent && (
                            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 text-[10px] py-0 px-2 font-bold uppercase tracking-tight border-indigo-200">
                              Actuel
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium italic">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> 
                            {format(new Date(projet.dateDebut), 'MMMM yyyy', { locale: fr })}
                          </span>
                          <span>&rarr;</span>
                          <span className="flex items-center gap-1">
                            {projet.dateFin ? (
                              format(new Date(projet.dateFin), 'MMMM yyyy', { locale: fr })
                            ) : (
                              <span className="text-indigo-600 font-bold not-italic">Présent</span>
                            )}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    {projet.description && (
                      <CardContent className="px-4 pb-4 pt-0">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {projet.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}
