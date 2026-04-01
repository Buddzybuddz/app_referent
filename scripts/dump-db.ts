import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()
async function r() {
  const all = await p.collaborateur.findMany()
  console.log('--- DATA DUMP START ---')
  all.forEach(c => console.log(JSON.stringify(c)))
  console.log('--- DATA DUMP END ---')
}
r().finally(() => p.$disconnect())
