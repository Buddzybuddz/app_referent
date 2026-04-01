'use server'

import db from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { cookies } from 'next/headers'

// Schéma de validation pour un Collaborateur (qu'il soit référent ou référé)
const CollaborateurSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  prenom: z.string().min(2, "Le prénom est requis"),
  dateEntree: z.string().or(z.date()),
  dateNaissance: z.string().or(z.date()),
  leaderActuel: z.string().optional().nullable(),
  referentId: z.string().optional().nullable(),
  email: z.string().email("Email invalide").optional().nullable().or(z.literal('')),
  telephone: z.string().optional().nullable(),
  ville: z.string().optional().nullable(),
  site: z.string().optional().nullable(),
  isRefere: z.boolean().default(false),
  isReferent: z.boolean().default(false),
  isAdmin: z.boolean().default(false),
}).refine(data => data.isRefere || data.isReferent, {
  message: "Veuillez cocher au moins 'Référé' ou 'Référent'.",
  path: ["isRefere"]
})

const ProjetSchema = z.object({
  nom: z.string().min(2, "Le nom du projet est requis"),
  description: z.string().optional(),
  dateDebut: z.string().or(z.date()),
  dateFin: z.string().optional().or(z.date()).nullable(),
  collaborateurId: z.string(),
})

// --- AUTH ACTIONS ---

export async function login(email: string) {
  try {
    const user = await db.collaborateur.findUnique({
      where: { email: email.trim().toLowerCase() }
    })
    console.log("Login attempt for:", email.trim().toLowerCase())
    console.log("User found in DB:", user ? { id: user.id, isAdmin: user.isAdmin, isReferent: user.isReferent } : "NULL")
    
    if (!user || (!user.isAdmin && !user.isReferent)) {
      return { success: false, error: "Accès refusé ou rôle insuffisant." }
    }
    
    const cookieStore = await cookies()
    cookieStore.set('referentId', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    
    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "Une erreur est survenue lors de la connexion." }
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('referentId')
  revalidatePath('/')
  return { success: true }
}

export async function getSession() {
  try {
    const cookieStore = await cookies()
    const referentId = cookieStore.get('referentId')?.value
    if (!referentId) return null
    
    return await db.collaborateur.findUnique({
      where: { id: referentId }
    })
  } catch (error) {
    return null
  }
}

// --- CORE LOGIC & HELPERS ---

function normalizeDate(d: Date | string | null | undefined) {
  if (!d) return new Date(0)
  const date = new Date(d)
  if (isNaN(date.getTime())) {
    console.error("Invalid date passed to normalizeDate:", d)
    return new Date(0)
  }
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
}

async function checkDuplicate(nom: string, prenom: string, dateNaissance: Date | string, excludeId?: string) {
  try {
    const dob = normalizeDate(dateNaissance)
    return await db.collaborateur.findFirst({
      where: {
        nom: { equals: nom.trim(), mode: 'insensitive' },
        prenom: { equals: prenom.trim(), mode: 'insensitive' },
        dateNaissance: dob,
        NOT: excludeId ? { id: excludeId } : undefined
      }
    })
  } catch (e) {
    console.error("Error in checkDuplicate:", e)
    return null
  }
}

async function verifyAccess(targetCollaborateurId: string) {
  const session = await getSession()
  if (!session) return false
  if (!session || !session.isAdmin) return false
  if (session.id === targetCollaborateurId) return true

  const target = await db.collaborateur.findUnique({
    where: { id: targetCollaborateurId },
    select: { referentId: true }
  })
  
  return target?.referentId === session.id
}

// --- TEAM & COLLABORATOR ACTIONS ---

export async function getReferes() {
  try {
    const session = await getSession()
    if (!session) return []

    // L'Admin voit tout le monde. Un référent voit son équipe.
    const where = session.isAdmin ? {} : { referentId: session.id }

    return await db.collaborateur.findMany({
      where,
      include: {
        entretiens: { orderBy: { date: 'desc' } },
        competences: true,
        projets: { orderBy: { dateDebut: 'desc' } }
      },
      orderBy: { nom: 'asc' }
    })
  } catch (error) {
    console.error("Error fetching collaborators:", error)
    return []
  }
}

export async function getRefereById(id: string) {
  if (!id) return null
  try {
    if (!await verifyAccess(id)) return null

    return await db.collaborateur.findUnique({
      where: { id },
      include: {
        entretiens: { orderBy: { date: 'desc' } },
        competences: true,
        projets: { orderBy: { dateDebut: 'desc' } },
        referent: true, // Pour voir qui le suit
        equipe: {
           include: { projets: true }
        } // Pour voir qui il suit
      }
    })
  } catch (error) {
    console.error("Error fetching collaborator:", error)
    return null
  }
}

// --- ADMIN : TEAM MANAGEMENT ---

export async function getReferents() {
  const session = await getSession()
  if (!session || !session.isAdmin) return []

  // On retourne TOUT LE MONDE pour l'admin (Admin, Référents, Référés)
  return await db.collaborateur.findMany({
    include: {
      referent: true,
      equipe: true,
    },
    orderBy: { nom: 'asc' }
  })
}

// Pour alimenter les listes de sélection de référents
export async function getAllPotentialReferents(excludeId?: string) {
  const session = await getSession()
  if (!session) return []

  return await db.collaborateur.findMany({
    where: { 
      isReferent: true,
      NOT: excludeId ? { id: excludeId } : undefined
    },
    select: { id: true, nom: true, prenom: true, email: true, isAdmin: true, isReferent: true },
    orderBy: { nom: 'asc' }
  })
}

export async function createCollaborateur(data: z.infer<typeof CollaborateurSchema>) {
  try {
    const session = await getSession()
    if (!session) return { success: false, error: "Non authentifié" }

    const validated = CollaborateurSchema.parse(data)
    
    // Normalisation locale
    const nom = validated.nom.trim()
    const prenom = validated.prenom.trim()
    const dob = normalizeDate(validated.dateNaissance)

    // 1. Check Identité Unique (Logique)
    const duplicate = await checkDuplicate(nom, prenom, dob)
    if (duplicate) {
      return { 
        success: false, 
        error: `Impossible de créer : ${prenom} ${nom} né(e) le ${dob.toLocaleDateString('fr-FR')} existe déjà dans vos effectifs.`
      }
    }

    // 2. Check Email Unique if provided
    if (validated.email && validated.email.trim() !== "") {
      const emailExists = await db.collaborateur.findUnique({ 
        where: { email: validated.email.trim().toLowerCase() }
      })
      if (emailExists) {
        return { 
          success: false, 
          error: `L'adresse email "${validated.email}" est déjà associée au profil de ${emailExists.prenom} ${emailExists.nom}.`
        }
      }
    }

    const newCollab = await db.collaborateur.create({
      data: {
        nom,
        prenom,
        dateEntree: new Date(validated.dateEntree),
        dateNaissance: dob,
        email: (validated.email && validated.email.trim() !== "") ? validated.email.trim().toLowerCase() : null,
        isRefere: validated.isRefere,
        isReferent: validated.isReferent,
        isAdmin: validated.isAdmin,
        telephone: validated.telephone,
        ville: validated.ville,
        site: validated.site,
        leaderActuel: validated.leaderActuel,
        referentId: (validated.referentId === "" || validated.referentId === "none") ? null : validated.referentId,
      }
    })

    revalidatePath('/')
    revalidatePath('/admin/referents')
    return { success: true, data: newCollab }
  } catch (error: any) {
    console.error("Error creating collaborator:", error)
    
    if (error instanceof z.ZodError) {
      return { success: false, error: `Erreur de validation : ${error.issues[0].message}` }
    }

    // Erreur d'unicité Prisma (P2002) - Sécurité de dernier recours
    if (error.code === 'P2002') {
      const target = error.meta?.target || []
      if (target.includes('email')) return { success: false, error: "Cet email est déjà utilisé." }
      return { success: false, error: "Un profil identique (nom, prénom et date de naissance) existe déjà." }
    }

    return { success: false, error: `Erreur technique : ${error.message || "Inconnue"}` }
  }
}

// Alias pour compatibilité avec les anciens composants ou distinction sémantique
export const createRefere = createCollaborateur
export const createReferent = createCollaborateur

export async function updateCollaborateur(id: string, data: Partial<z.infer<typeof CollaborateurSchema>>) {
  try {
    if (!await verifyAccess(id)) return { success: false, error: "Accès refusé" }
    
    const validated = CollaborateurSchema.partial().parse(data)

    // Check Duplicate identity if name/dob changed
    if (validated.nom || validated.prenom || validated.dateNaissance) {
      const current = await db.collaborateur.findUnique({ where: { id }, select: { nom: true, prenom: true, dateNaissance: true }})
      const nom = (validated.nom || current!.nom).trim()
      const prenom = (validated.prenom || current!.prenom).trim()
      const dob = normalizeDate(validated.dateNaissance || current!.dateNaissance)
      
      const duplicate = await checkDuplicate(nom, prenom, dob, id)
      if (duplicate) return { success: false, error: "Cette identité (Nom/Prénom/Date) est déjà prise par un autre profil." }
    }

    const dataToUpdate: any = {
      ...validated,
      dateEntree: validated.dateEntree ? new Date(validated.dateEntree as string) : undefined,
      dateNaissance: validated.dateNaissance ? normalizeDate(validated.dateNaissance as string) : undefined,
      email: validated.email === '' ? null : (validated.email?.trim() || undefined),
      referentId: validated.referentId === '' || validated.referentId === 'none' ? null : (validated.referentId || undefined),
    }
    
    if (validated.nom) dataToUpdate.nom = validated.nom.trim()
    if (validated.prenom) dataToUpdate.prenom = validated.prenom.trim()

    const updated = await db.collaborateur.update({
      where: { id },
      data: dataToUpdate
    })

    revalidatePath('/')
    revalidatePath(`/refere/${id}`)
    revalidatePath('/admin/referents')
    return { success: true, data: updated }
  } catch (error: any) {
    console.error("Error updating collaborator details:", error)
    if (error.code === 'P2002') {
      return { success: false, error: "Ces modifications entreraient en conflit avec un profil existant." }
    }
    return { success: false, error: `Erreur technique : ${error.message || "Erreur lors de la mise à jour"}` }
  }
}

export const updateRefere = updateCollaborateur
export const updateReferent = updateCollaborateur

export async function deleteCollaborateur(id: string) {
  try {
    const session = await getSession()
    if (!session || !session.isAdmin) return { success: false, error: "Droits insuffisants" }

    if (id === session.id) return { success: false, error: "Impossible de supprimer votre propre compte." }

    // Check if has team
    const teamCount = await db.collaborateur.count({ where: { referentId: id }})
    if (teamCount > 0) return { success: false, error: `Ce collaborateur suit encore ${teamCount} personne(s). Réassignez son équipe avant de le supprimer.` }

    await db.collaborateur.delete({ where: { id }})

    revalidatePath('/')
    revalidatePath('/admin/referents')
    return { success: true }
  } catch (error) {
    console.error("Error deleting collaborator:", error)
    return { success: false, error: "Erreur technique lors de la suppression" }
  }
}

export const deleteReferent = deleteCollaborateur

// --- SUB-DATA ACTIONS (Projets, Entretiens, Competences) ---

export async function addProjet(data: z.infer<typeof ProjetSchema>) {
  if (!await verifyAccess(data.collaborateurId)) return { success: false }
  
  try {
    const validated = ProjetSchema.parse(data)
    await db.projet.create({
      data: {
        ...validated,
        dateDebut: new Date(validated.dateDebut),
        dateFin: validated.dateFin ? new Date(validated.dateFin) : null,
      }
    })
    revalidatePath(`/refere/${validated.collaborateurId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function updateProjet(id: string, data: Partial<z.infer<typeof ProjetSchema>>) {
  try {
    const proj = await db.projet.findUnique({ where: { id }, select: { collaborateurId: true }})
    if (!proj || !await verifyAccess(proj.collaborateurId)) return { success: false }

    const validated = ProjetSchema.partial().parse(data)
    await db.projet.update({
      where: { id },
      data: {
        ...validated,
        dateDebut: validated.dateDebut ? new Date(validated.dateDebut as string) : undefined,
        dateFin: validated.dateFin ? new Date(validated.dateFin as string) : (validated.hasOwnProperty('dateFin') ? null : undefined),
      }
    })
    revalidatePath(`/refere/${proj.collaborateurId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function addEntretien(data: { collaborateurId: string, type: string, date: Date | string, statut: string, compteRendu?: string }) {
  if (!await verifyAccess(data.collaborateurId)) return { success: false }
  try {
    await db.entretien.create({ data: { ...data, date: new Date(data.date) } })
    revalidatePath(`/refere/${data.collaborateurId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function updatePPERStatus(collabId: string, id: string, statut: string) {
  if (!await verifyAccess(collabId)) return { success: false }
  try {
    await db.entretien.update({ where: { id }, data: { statut } })
    revalidatePath(`/refere/${collabId}`)
    return { success: true }
  } catch (error) {
     return { success: false }
  }
}

export async function addCompetence(collaborateurId: string, nom: string) {
  if (!await verifyAccess(collaborateurId)) return { success: false }
  try {
    await db.competence.create({ data: { nom, collaborateurId, acquise: false } })
    revalidatePath(`/refere/${collaborateurId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

export async function toggleCompetence(id: string, acquise: boolean) {
  try {
    const comp = await db.competence.findUnique({ where: { id }, select: { collaborateurId: true }})
    if (!comp || !await verifyAccess(comp.collaborateurId)) return { success: false }
    await db.competence.update({ where: { id }, data: { acquise } })
    revalidatePath(`/refere/${comp.collaborateurId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
