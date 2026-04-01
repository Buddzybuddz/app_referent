import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const all = await prisma.collaborateur.findMany()
  console.log('TotalCount:', all.length)
  all.forEach(c => {
    console.log(`[${c.id}] ${c.prenom} ${c.nom} | Roles: [${c.isRefere?'Référé':''} ${c.isReferent?'Référent':''} ${c.isAdmin?'Admin':''}] | Email: ${c.email}`)
  })
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
