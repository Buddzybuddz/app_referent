import React from 'react'
import { getRefereById } from '@/app/actions'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Briefcase, UserCheck, ChevronLeft, Mail, Phone, MapPin, Building2 } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import CompetenceManager from '@/components/CompetenceManager'
import EntretienManager from '@/components/EntretienManager'
import { Separator } from '@/components/ui/separator'
import EditRefereModal from '@/components/EditRefereModal'
import ProjetManager from '@/components/ProjetManager'

export default async function RefereProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const refere = await getRefereById(id)

  if (!refere) notFound()

  const currentProject = refere.projets && refere.projets.length > 0 ? refere.projets[0] : null

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors w-fit">
           <ChevronLeft className="mr-1 h-4 w-4" /> Retour au Dashboard
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
             <div className="h-20 w-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-white font-bold text-3xl shadow-xl shadow-indigo-100 ring-4 ring-white">
                {refere.prenom[0]}{refere.nom[0]}
             </div>
             <div>
                <h2 className="text-3xl font-extrabold text-slate-900">{refere.prenom} {refere.nom}</h2>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-500 font-medium">
                   <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 font-bold">
                      <Briefcase className="h-3.5 w-3.5 text-indigo-500" /> {currentProject ? currentProject.nom : "Aucun projet en cours"}
                   </div>
                   {refere.leaderActuel && (
                     <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs">
                        <UserCheck className="h-3.5 w-3.5 text-indigo-500" /> Leader: {refere.leaderActuel}
                     </div>
                   )}
                   <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold">
                      <Calendar className="h-3.5 w-3.5" /> Entrée: {format(new Date(refere.dateEntree), 'dd MMM yyyy', { locale: fr })}
                   </div>
                </div>
             </div>
          </div>
          <div className="flex gap-2">
             <EditRefereModal refere={{
               id: refere.id,
               nom: refere.nom,
               prenom: refere.prenom,
               dateEntree: refere.dateEntree,
               dateNaissance: refere.dateNaissance,
               leaderActuel: refere.leaderActuel,
               referentId: refere.referentId,
               email: refere.email,
               telephone: refere.telephone,
               ville: refere.ville,
               site: refere.site,
             }} />
             <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 font-bold">Générer un PDF</Button>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* Profile Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Infos & Personal */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="pb-3 border-b bg-slate-50/50">
               <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <User className="h-5 w-5 text-indigo-500" /> Informations Personnelles
               </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
               <div className="space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date de Naissance</p>
                  <p className="text-slate-800 font-semibold flex items-center gap-2">
                    {format(new Date(refere.dateNaissance), 'dd MMMM yyyy', { locale: fr })}
                    <span className="text-xs text-slate-400 font-normal">
                       ({new Date().getFullYear() - new Date(refere.dateNaissance).getFullYear()} ans)
                    </span>
                  </p>
               </div>
               <div className="space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Coordonnées Professionnelles</p>
                  <div className="space-y-2 mt-1">
                     <div className="flex items-center gap-3 text-sm text-slate-600 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <Mail className="h-4 w-4 text-indigo-400" /> {refere.email || "Non renseigné"}
                     </div>
                     <div className="flex items-center gap-3 text-sm text-slate-600 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <Phone className="h-4 w-4 text-indigo-400" /> {refere.telephone || "Non renseigné"}
                     </div>
                  </div>
               </div>
               <div className="space-y-1.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Localisation & Site</p>
                  <div className="space-y-2 mt-1">
                     <div className="flex items-center gap-3 text-sm text-slate-600 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <MapPin className="h-4 w-4 text-indigo-400" /> {refere.ville || "Non renseigné"}
                     </div>
                     <div className="flex items-center gap-3 text-sm text-slate-600 font-medium p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <Building2 className="h-4 w-4 text-indigo-400" /> {refere.site || "Non renseigné"}
                     </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Competences & History */}
        <div className="lg:col-span-2 space-y-10">
          <ProjetManager collaborateurId={refere.id} projets={refere.projets} />
          <CompetenceManager collaborateurId={refere.id} initialCompetences={refere.competences} />
          <EntretienManager collaborateurId={refere.id} entretiens={refere.entretiens} />
        </div>

      </div>
    </div>
  )
}
