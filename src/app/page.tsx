import { getReferes, getSession } from '@/app/actions'
import RefereCard from '@/components/RefereCard'
import NewRefereModal from '@/components/NewRefereModal'
import { PlusCircle, Search, Users, Activity, Target } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  const referes = await getReferes()
  const session = await getSession()

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
         <p className="text-xl font-semibold text-slate-600">Session expirée ou invalide</p>
         <p className="text-slate-400 mt-2">Merci de vous déconnecter pour réinitialiser vos accès.</p>
         <div className="mt-6">
            <LogoutButton />
         </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header & Stats section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tableau de Bord
          </h2>
          <p className="mt-2 text-lg text-slate-500">
            Bonjour {session.prenom}, vous gérez actuellement <span className="font-bold text-indigo-600 underline underline-offset-4 decoration-indigo-200">{referes.length} membres</span> dans votre équipe.
          </p>
        </div>
        <NewRefereModal referentId={session.id} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border-slate-200 shadow-sm overflow-hidden hover:border-indigo-200 transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
             <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Users className="h-6 w-6 text-indigo-600" />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">Total Équipe</p>
                <p className="text-2xl font-bold text-slate-900">{referes.length}</p>
             </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm overflow-hidden hover:border-emerald-200 transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
             <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <Target className="h-6 w-6 text-emerald-600" />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">Entretiens ce mois</p>
                <p className="text-2xl font-bold text-slate-900">2</p>
             </div>
          </CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm overflow-hidden hover:border-amber-200 transition-colors">
          <CardContent className="p-6 flex items-center gap-4">
             <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                <Activity className="h-6 w-6 text-amber-600" />
             </div>
             <div>
                <p className="text-sm font-medium text-slate-500">PPER à faire</p>
                <p className="text-2xl font-bold text-slate-900">
                  {referes.filter((r: any) => r.entretiens?.find((e: any) => e.type === 'PPER' && e.statut === 'A_FAIRE')).length}
                </p>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid section */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 py-2 border-y border-slate-100 mb-6 bg-slate-50/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
           <div className="relative flex-1 max-w-md">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
             <Input 
               placeholder="Rechercher un membre de l'équipe..." 
               className="pl-10 bg-white border-slate-200 focus:ring-indigo-500 rounded-lg h-11"
             />
           </div>
           <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-500">
             <span>Filtrer par : </span>
             <Badge variant="outline" className="cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 border-indigo-100 text-indigo-600 bg-indigo-50/30">Tous</Badge>
             <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">En retard</Badge>
             <Badge variant="outline" className="cursor-pointer hover:bg-slate-100">Senior</Badge>
           </div>
        </div>

        {referes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
             <Users className="h-12 w-12 text-slate-300 mb-4" />
             <p className="text-xl font-semibold text-slate-600">Aucun membre dans votre équipe</p>
             <p className="text-slate-400 mt-2">Commencez par ajouter votre premier collaborateur.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {referes.map((refere: any) => (
              <RefereCard key={refere.id} refere={refere} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
