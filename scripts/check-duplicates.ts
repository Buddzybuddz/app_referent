import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const collabs = await prisma.collaborateur.findMany({
    orderBy: { nom: 'asc' }
  })
  
  console.log("Liste des collaborateurs :")
  collabs.forEach(c => {
    console.log(`ID: ${c.id} | Nom: ${c.nom} | Prenom: ${c.prenom} | DateNaissance: ${c.dateNaissance.toISOString()}`)
  })

  // Group by nom, prenom, dateNaissance to find duplicates manually
  const groups = collabs.reduce((acc: any, c) => {
    const key = `${c.nom}-${c.prenom}-${c.dateNaissance.toISOString()}`
    if (!acc[key]) acc[key] = []
    acc[key].push(c.id)
    return acc
  }, {})

  console.log("\nDoublons détectés :")
  Object.entries(groups).forEach(([key, ids]: [string, any]) => {
    if (ids.length > 1) {
      console.log(`Key: ${key} | IDs: ${ids.join(', ')}`)
    }
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
