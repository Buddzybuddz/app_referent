'use client'

import React, { useTransition } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Calendar, Briefcase, ChevronRight, CheckCircle2, Clock } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { updatePPERStatus } from '@/app/actions'

interface RefereCardProps {
  refere: any 
}

export default function RefereCard({ refere }: RefereCardProps) {
  const [isPending, startTransition] = useTransition()

  // Trouver l'entretien PPER le plus récent
  const latestPPER = refere.entretiens?.find((e: any) => e.type === 'PPER')
  // Calculer la date du dernier entretien (tous types confondus)
  const lastEntretien = refere.entretiens?.[0]
  // Le projet actuel est le plus récent de la liste
  const currentProject = refere.projets && refere.projets.length > 0 ? refere.projets[0] : null

  const handlePPERToggle = (checked: boolean) => {
    if (!latestPPER) return
    
    startTransition(async () => {
      const result = await updatePPERStatus(refere.id, latestPPER.id, checked ? 'FAIT' : 'A_FAIRE')
      if (result.success) {
        toast.success(`Statut PPER mis à jour pour ${refere.prenom}`)
      } else {
        toast.error("Échec de la mise à jour")
      }
    })
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 border-slate-200 bg-white group">
      <CardHeader className="pb-4 border-b bg-slate-50/50">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg border-2 border-white shadow-sm">
              {refere.prenom[0]}{refere.nom[0]}
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 leading-none group-hover:text-indigo-600 transition-colors">
                {refere.prenom} {refere.nom}
              </h3>
              <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {currentProject ? currentProject.nom : "Pas de projet actuel"}
              </p>
            </div>
          </div>
          {refere.leaderActuel && (
            <Badge variant="outline" className="bg-white text-slate-500 border-slate-200">
              {refere.leaderActuel}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Dernier Entretien</span>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Calendar className="h-3.5 w-3.5 text-indigo-500" />
              {lastEntretien ? format(new Date(lastEntretien.date), 'dd MMM yyyy', { locale: fr }) : 'Aucun'}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Entrée</span>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Clock className="h-3.5 w-3.5 text-indigo-500" />
              {format(new Date(refere.dateEntree), 'dd MMM yyyy', { locale: fr })}
            </div>
          </div>
        </div>

        <div className="pt-2">
           <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 border-dashed">
             <div className="flex items-center gap-2">
               {latestPPER?.statut === 'FAIT' ? (
                 <CheckCircle2 className="h-5 w-5 text-emerald-500" />
               ) : (
                 <Clock className="h-5 w-5 text-amber-500" />
               )}
               <Label htmlFor={`pper-${refere.id}`} className="font-semibold text-slate-700 cursor-pointer">
                 PPER {latestPPER?.statut === 'FAIT' ? 'Fait' : 'À faire'}
               </Label>
             </div>
             <Switch 
               id={`pper-${refere.id}`}
               checked={latestPPER?.statut === 'FAIT'}
               onCheckedChange={handlePPERToggle}
               disabled={isPending || !latestPPER}
               className="data-[state=checked]:bg-emerald-500"
             />
           </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-6 flex gap-3 px-6">
        <Button render={<Link href={`/refere/${refere.id}`} />} className="w-full bg-slate-900 hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-100">
          <div className="flex items-center justify-center gap-2">
            Voir Profil <ChevronRight className="h-4 w-4" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  )
}
