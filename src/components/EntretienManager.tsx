'use client'

import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlusCircle, Calendar, MessageSquare, History, FileText, Briefcase } from 'lucide-react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { addEntretien } from '@/app/actions'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { DatePicker } from '@/components/ui/date-picker'

export default function EntretienManager({ collaborateurId, entretiens }: { collaborateurId: string, entretiens: any[] }) {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'PPER' | 'CARRIERE'>('PPER')

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const data = {
      collaborateurId,
      type: formData.get('type') as 'PPER' | 'CARRIERE',
      date: formData.get('date') as string,
      statut: (formData.get('statut') as 'FAIT' | 'A_FAIRE') || 'FAIT',
      compteRendu: formData.get('compteRendu') as string
    }

    startTransition(async () => {
      const result = await addEntretien(data)
      if (result.success) {
        toast.success("Entretien ajouté")
        setOpen(false)
      } else {
        toast.error("Erreur de sauvegarde")
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
           <History className="h-6 w-6 text-indigo-500" /> Gestion des Entretiens
        </h3>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100" />}>
            <div className="flex items-center">
               <PlusCircle className="mr-2 h-4 w-4" /> Programmer un entretien
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
             <DialogHeader>
               <DialogTitle className="text-2xl font-bold">Nouvel Entretien</DialogTitle>
               <DialogDescription>Ajoutez un point de suivi PPER ou Carrière.</DialogDescription>
             </DialogHeader>
             <form onSubmit={handleAdd} className="space-y-4 pt-4">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="type">Type d'entretien</Label>
                   <Select name="type" defaultValue="PPER" onValueChange={(v: any) => setType(v)}>
                     <SelectTrigger>
                       <SelectValue placeholder="Choisir le type" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="PPER">Plan Personnel d'Évolution (PPER)</SelectItem>
                       <SelectItem value="CARRIERE">Entretien Carrière</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="date">Date</Label>
                   <DatePicker name="date" required placeholder="Sélect. date" />
                 </div>
               </div>

               {type === 'PPER' && (
                 <div className="space-y-2">
                   <Label htmlFor="statut">Statut</Label>
                   <Select name="statut" defaultValue="A_FAIRE">
                     <SelectTrigger>
                       <SelectValue placeholder="Choisir le statut" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="A_FAIRE">À faire (Planifié)</SelectItem>
                       <SelectItem value="FAIT">Fait (Réalisé)</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
               )}

               <div className="space-y-2">
                 <Label htmlFor="compteRendu">Compte-rendu / Notes</Label>
                 <Textarea 
                   id="compteRendu" 
                   name="compteRendu" 
                   rows={5} 
                   placeholder="Détails du point, objectifs fixés..." 
                   className="resize-none border-slate-200"
                 />
               </div>

               <DialogFooter className="pt-4">
                 <Button type="button" variant="outline" onClick={() => setOpen(false)}>Annuler</Button>
                 <Button type="submit" disabled={isPending} className="bg-indigo-600 min-w-[120px]">
                   {isPending ? "Enregistrement..." : "Enregistrer"}
                 </Button>
               </DialogFooter>
             </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative space-y-4 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-100 before:via-indigo-50 before:to-slate-100">
        {entretiens.length === 0 ? (
          <p className="text-slate-400 italic py-10 bg-white rounded-2xl border border-slate-100 text-center">Aucun historique d'entretien disponible.</p>
        ) : (
          entretiens.map((et) => (
            <div key={et.id} className="relative pl-12 group">
              {/* Timeline circle */}
              <div className={`absolute left-0 h-10 w-10 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 ${et.type === 'PPER' ? 'bg-indigo-100 text-indigo-600' : 'bg-amber-100 text-amber-600'} group-hover:scale-110 shadow-sm border-4 border-white`}>
                 {et.type === 'PPER' ? <Target className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
              </div>
              
              <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <CardHeader className="py-4 flex flex-row items-center justify-between space-y-0 bg-slate-50/50 rounded-t-xl">
                   <div>
                     <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">
                          {et.type === 'PPER' ? 'Entretien PPER' : 'Entretien Carrière'}
                        </span>
                        {et.statut === 'FAIT' ? (
                           <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-none font-bold text-[10px] uppercase tracking-tighter">Fait</Badge>
                        ) : (
                           <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-none font-bold text-[10px] uppercase tracking-tighter">À faire</Badge>
                        )}
                     </div>
                     <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-medium italic">
                        <Calendar className="h-3 w-3" /> le {format(new Date(et.date), 'dd MMMM yyyy', { locale: fr })}
                     </span>
                   </div>
                 </CardHeader>
                 {et.compteRendu && (
                   <CardContent className="py-4">
                      <div className="flex gap-3 text-slate-600">
                        <MessageSquare className="h-4 w-4 text-slate-300 mt-1 shrink-0" />
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{et.compteRendu}</p>
                      </div>
                   </CardContent>
                 )}
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function Target(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  )
}
