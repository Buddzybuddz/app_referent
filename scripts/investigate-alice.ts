import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const all = await prisma.collaborateur.findMany()
  console.log('--- ALL COLLABORATORS ---')
  all.forEach(c => {
    console.log(`ID: "${c.id}"`)
    console.log(`Prenom: "${c.prenom}" (len: ${c.prenom.length})`)
    console.log(`Nom: "${c.nom}" (len: ${c.nom.length})`)
    console.log(`DOB: ${c.dateNaissance.toISOString()}`)
    console.log(`Email: "${c.email}"`)
    console.log('-------------------------')
  })
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
