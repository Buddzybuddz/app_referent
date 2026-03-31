import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database with Stable Prisma 5...')
  
  // Clear existing data
  await prisma.entretien.deleteMany()
  await prisma.competence.deleteMany()
  await prisma.refere.deleteMany()
  await prisma.referent.deleteMany()

  const referent = await prisma.referent.create({
    data: { nom: 'Dupont', prenom: 'Jean' }
  })

  const refere1 = await prisma.refere.create({
    data: {
      nom: 'Lemoine',
      prenom: 'Clare',
      dateEntree: new Date('2023-01-15T10:00:00Z'),
      dateNaissance: new Date('1995-04-12T00:00:00Z'),
      projetActuel: 'Refonte Site E-commerce',
      leaderActuel: 'Marc Dubois',
      referentId: referent.id
    }
  })

  await prisma.competence.createMany({
    data: [
      { nom: 'React JS', acquise: true, refereId: refere1.id },
      { nom: 'TypeScript', acquise: true, refereId: refere1.id },
      { nom: 'PostgreSQL', acquise: false, refereId: refere1.id },
    ]
  })

  await prisma.entretien.create({
    data: {
      type: 'PPER',
      date: new Date('2024-03-01T14:30:00Z'),
      statut: 'FAIT',
      compteRendu: 'Excellent premier trimestre.',
      refereId: refere1.id
    }
  })

  const refere2 = await prisma.refere.create({
    data: {
      nom: 'Bouchard',
      prenom: 'Antoine',
      dateEntree: new Date('2024-02-01T09:00:00Z'),
      dateNaissance: new Date('1998-11-05T00:00:00Z'),
      projetActuel: 'App Mobile B2B',
      leaderActuel: 'Sophie Martin',
      referentId: referent.id
    }
  })

  await prisma.competence.createMany({
    data: [
      { nom: 'React Native', acquise: true, refereId: refere2.id },
      { nom: 'Redux', acquise: false, refereId: refere2.id },
    ]
  })

  await prisma.entretien.create({
    data: {
      type: 'PPER',
      date: new Date('2024-05-15T11:00:00Z'),
      statut: 'A_FAIRE',
      refereId: refere2.id
    }
  })

  console.log('Seed successful.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
