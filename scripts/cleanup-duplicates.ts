import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function run() {
  console.log("Recherche de doublons logiques pour nettoyage...")
  const all = await prisma.collaborateur.findMany({
    orderBy: { createdAt: 'asc' }
  })
  
  const seen = new Map()
  const toDelete = []

  for (const c of all) {
    const dob = new Date(Date.UTC(c.dateNaissance.getUTCFullYear(), c.dateNaissance.getUTCMonth(), c.dateNaissance.getUTCDate())).toISOString().split('T')[0]
    const key = `${c.prenom.trim().toLowerCase()}|${c.nom.trim().toLowerCase()}|${dob}`
    
    if (seen.has(key)) {
      const first = seen.get(key)
      console.log(`Doublon trouvé : ${c.prenom} ${c.nom} (${dob})`)
      
      // On garde celui qui a un email ou le plus ancien si aucun n'en a
      if (!first.email && c.email) {
        console.log(` -> On garde le nouveau (ID: ${c.id}) car il a un email. On supprime l'ancien (ID: ${first.id}).`)
        toDelete.push(first.id)
        seen.set(key, c)
      } else {
        console.log(` -> On garde l'existant (ID: ${first.id}). On supprime le doublon (ID: ${c.id}).`)
        toDelete.push(c.id)
      }
    } else {
      seen.set(key, c)
    }
  }

  if (toDelete.length > 0) {
    console.log(`Suppression de ${toDelete.length} doublon(s)...`)
    await prisma.collaborateur.deleteMany({
      where: { id: { in: toDelete } }
    })
    console.log("Nettoyage terminé.")
  } else {
    console.log("Aucun doublon trouvé à supprimer.")
  }
}

run()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
