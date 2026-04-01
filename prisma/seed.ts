import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("Nettoyage de la base de données...")
  await prisma.collaborateur.deleteMany()

  console.log("Peuplement de la base de données unifiée...")

  // 1. Créer l'Administrateur Principal (Lui-même n'a pas forcément de référent au sommet)
  const admin = await prisma.collaborateur.create({
    data: {
      nom: 'Baudouin',
      prenom: 'Jérémy',
      email: 'baudouinjeremy@gmail.com',
      role: 'ADMIN',
      dateNaissance: new Date('1985-06-15T00:00:00Z'),
      dateEntree: new Date('2020-01-01T00:00:00Z'),
      site: 'Siège Social',
      ville: 'Lyon',
    }
  })

  // 2. Créer un Référent (Accompagnateur) suivi par l'Admin
  const referentAlice = await prisma.collaborateur.create({
    data: {
      nom: 'Martin',
      prenom: 'Alice',
      email: 'alice@mentor.com',
      role: 'USER',
      dateNaissance: new Date('1992-03-20T00:00:00Z'),
      dateEntree: new Date('2022-05-10T00:00:00Z'),
      referentId: admin.id, // Alice est suivie par Jérémy
      site: 'Site Innovation',
      ville: 'Paris',
    }
  })

  // 3. Créer un Collaborateur (Référé) suivi par Alice
  const collaborateurClare = await prisma.collaborateur.create({
    data: {
      nom: 'Leblanc',
      prenom: 'Clare',
      role: 'NONE', // Ne peut pas se connecter
      dateNaissance: new Date('1995-04-12T00:00:00Z'),
      dateEntree: new Date('2023-01-15T00:00:00Z'),
      referentId: referentAlice.id, // Clare est suivie par Alice
      site: 'Site Lyon',
      ville: 'Lyon',
      projets: {
        create: [
          { nom: 'Refonte Site Web', dateDebut: new Date('2024-01-01T00:00:00Z'), description: 'Migration React' }
        ]
      },
      competences: {
        create: [
          { nom: 'React', acquise: true },
          { nom: 'TypeScript', acquise: false }
        ]
      }
    }
  })

  // 4. Créer un autre Collaborateur suivi directement par l'Admin
  const collaborateurAntoine = await prisma.collaborateur.create({
    data: {
      nom: 'Dubois',
      prenom: 'Antoine',
      role: 'NONE',
      dateNaissance: new Date('1998-11-05T00:00:00Z'),
      dateEntree: new Date('2024-02-01T00:00:00Z'),
      referentId: admin.id, // Antoine est suivi par Jérémy
      site: 'Site Paris',
      ville: 'Paris',
    }
  })

  console.log("Seed accompli avec succès !")
  console.log({
    admin: admin.email,
    referent: referentAlice.email,
    nbTotal: await prisma.collaborateur.count()
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
