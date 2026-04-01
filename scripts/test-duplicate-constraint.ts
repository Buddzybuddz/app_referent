import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function test() {
  console.log("Tentative de création de doublon (Alice Martin)...")
  try {
    // Note: On utilise des espaces et une casse différente pour tester la normalisation
    const res = await prisma.collaborateur.create({
      data: {
        nom: " Martin ",
        prenom: " ALICE ",
        dateNaissance: new Date("1992-03-20T00:00:00Z"),
        dateEntree: new Date(),
        isRefere: false,
        isReferent: true,
        isAdmin: false
      }
    })
    console.log("SUCCÈS : Le doublon a été créé ! (Ce n'est pas bon)")
    console.log("ID créé :", res.id)
  } catch (e: any) {
    if (e.code === 'P2002') {
      console.log("ÉCHEC ATTENDU : La contrainte d'unicité Prisma (P2002) a fonctionné.")
    } else {
      console.log("ERREUR INATTENDUE :", e.message)
    }
  }
}

test().finally(() => prisma.$disconnect())
