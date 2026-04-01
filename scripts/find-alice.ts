import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const l = await prisma.collaborateur.findMany({ where: { nom: 'Martin', prenom: 'Alice' } })
  console.log('ResultCount:', l.length)
  l.forEach(c => console.log('ID:', c.id, 'DOB:', c.dateNaissance.toISOString()))
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
