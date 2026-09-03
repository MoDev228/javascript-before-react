function afficherInformations(utilisateur) {

  const {
    nom: nomUtilisateur,
    age: ageUtilisateur,
    ville: villeUtilisateur,
  } = utilisateur;

  return `${nomUtilisateur} a ${ageUtilisateur} ans et vit à ${villeUtilisateur}.`;

}

console.log(
  afficherInformations({
    nom: "Mohamed",
    age: 27,
    ville: "Lome",
  }),
);

console.log(
  afficherInformations({
    nom: "Alice",
    age: 22,
    ville: "Paris",
  }),
);

console.log(
  afficherInformations({
    nom: "Karim",
    age: 30,
    ville: "Dakar",
  }),
);
