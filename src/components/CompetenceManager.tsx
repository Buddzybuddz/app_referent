'use client'

import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, CheckCircle2, Circle } from 'lucide-react'
import { toggleCompetence, addCompetence } from '@/app/actions'
import { toast } from 'sonner'

export default function CompetenceManager({ collaborateurId, initialCompetences }: { collaborateurId: string, initialCompetences: any[] }) {
  const [competences, setCompetences] = useState(initialCompetences)
  const [newCompName, setNewCompName] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleToggle = async (compId: string, currentStatus: boolean) => {
    const newStatus = !currentStatus
    // Optimistic UI update
    setCompetences(prev => prev.map(c => c.id === compId ? { ...c, acquise: newStatus } : c))
    
    const result = await toggleCompetence(compId, newStatus)
    if (result.success) {
      toast.success("Compétence mise à jour")
    } else {
      // Rollback on failure
      setCompetences(prev => prev.map(c => c.id === compId ? { ...c, acquise: currentStatus } : c))
      toast.error("Erreur de mise à jour")
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCompName.trim()) return

    startTransition(async () => {
      const result = await addCompetence(collaborateurId, newCompName)
      if (result.success) {
        toast.success("Compétence ajoutée")
        setNewCompName('')
        // In a real app we'd refresh from server, but here we can just add to local state for speed
        // Or call router.refresh(). Since getReferes is a server action, router.refresh is better.
      }
    })
  }

  return (
    <Card className="border-slate-200 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b">
        <div>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            Grille de Compétences
          </CardTitle>
          <CardDescription>Suivre l'acquisition des compétences techniques et soft-skills.</CardDescription>
        </div>
        <form onSubmit={handleAdd} className="flex gap-2 items-center">
            <Input 
              placeholder="Nouvelle compétence..." 
              value={newCompName}
              onChange={(e) => setNewCompName(e.target.value)}
              className="w-48 h-9 border-slate-200 focus:ring-indigo-500"
            />
            <Button type="submit" size="sm" variant="outline" className="h-9 border-indigo-200 text-indigo-700 hover:bg-indigo-50 shadow-sm">
                <Plus className="h-4 w-4 mr-1" /> Ajouter
            </Button>
        </form>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competences.length === 0 ? (
            <p className="text-slate-400 italic text-center col-span-2 py-4">Aucune compétence listée.</p>
          ) : (
            competences.map((comp) => (
              <div 
                key={comp.id} 
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${comp.acquise ? 'bg-emerald-50/50 border-emerald-100 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${comp.acquise ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {comp.acquise ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                  </div>
                  <span className={`font-medium ${comp.acquise ? 'text-emerald-900' : 'text-slate-700'}`}>
                    {comp.nom}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Label htmlFor={`comp-${comp.id}`} className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {comp.acquise ? 'Acquise' : 'En cours'}
                  </Label>
                  <Switch 
                    id={`comp-${comp.id}`} 
                    checked={comp.acquise} 
                    onCheckedChange={() => handleToggle(comp.id, comp.acquise)}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
