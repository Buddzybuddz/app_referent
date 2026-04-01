import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function run() {
  const email = 'baudouinjeremy@gmail.com'
  const user = await prisma.collaborateur.findUnique({
    where: { email }
  })
  if (!user) {
    console.log(`USER_NOT_FOUND: ${email}`)
    const all = await prisma.collaborateur.findMany()
    console.log("Existing users:", all.map(u => u.email))
  } else {
    console.log("USER_FOUND:", {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      isReferent: user.isReferent,
      isRefere: user.isRefere
    })
  }
}
run().catch(e=>console.error(e)).finally(() => prisma.$disconnect())
