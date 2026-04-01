import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const l = await prisma.collaborateur.findMany({
    where: {
      nom: { contains: 'Martin', mode: 'insensitive' },
      prenom: { contains: 'Alice', mode: 'insensitive' }
    }
  })
  console.log('ResultCount:', l.length)
  l.forEach(c => console.log('ID:', c.id, 'Nom:', c.nom, 'Prenom:', c.prenom, 'DOB:', c.dateNaissance.toISOString()))
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
