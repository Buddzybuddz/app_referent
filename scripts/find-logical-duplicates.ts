import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const all = await prisma.collaborateur.findMany()
  const map = new Map()
  
  all.forEach(c => {
    // Basic normalization: lowercase, trim, date only
    const d = c.dateNaissance.toISOString().split('T')[0]
    const key = `${c.prenom.trim().toLowerCase()}|${c.nom.trim().toLowerCase()}|${d}`
    
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(c)
  })

  console.log('--- RECHERCHE DE DOUBLONS LOGIQUES ---')
  let found = false
  for (const [key, items] of map.entries()) {
    if (items.length > 1) {
      found = true
      console.log(`Doublon trouvé pour: ${key}`)
      items.forEach((it: any) => {
        console.log(` - ID: ${it.id} | Email: ${it.email} | Role: ${it.role} | Raw DOB: ${it.dateNaissance.toISOString()}`)
      })
    }
  }
  if (!found) console.log('Aucun doublon logique trouvé.')
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
