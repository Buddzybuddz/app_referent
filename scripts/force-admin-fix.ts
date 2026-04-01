import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const email = 'baudouinjeremy@gmail.com'
  const updated = await prisma.collaborateur.update({
    where: { email },
    data: {
      isAdmin: true,
      isReferent: true,
      isRefere: false // On s'assure qu'il est bien admin/référent
    }
  })
  console.log("FORCE_UPDATE_SUCCESS:", {
    email: updated.email,
    isAdmin: updated.isAdmin,
    isReferent: updated.isReferent
  })
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
