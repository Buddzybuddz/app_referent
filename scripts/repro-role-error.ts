import { updateCollaborateur } from '../src/app/actions'

async function reproduce() {
  const duboisId = "cmnggx8fd0009zfov9ohhu4lc"
  const adminId = "cmnggx83x0000zfovmeb0rc2f"
  
  console.log("Reproduction START...")
  const result = await updateCollaborateur(duboisId, {
    isRefere: true,
    isReferent: true,
    isAdmin: false,
    nom: "Dubois",
    prenom: "Antoine",
    dateNaissance: "1998-11-05",
    referentId: adminId,
    email: ""
  })
  
  console.log("Reproduction RESULT:", result)
}

reproduce().catch(e => console.error("Reproduction FATAL ERROR:", e))
