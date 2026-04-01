import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()
console.log('Client Models:', Object.keys(p).filter(k => !k.startsWith('_')))
p.$disconnect()
