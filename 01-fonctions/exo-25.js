function afficherUtilisateur(utilisateur) {

  const { nom, age, ville } = utilisateur;

  return `${nom} a ${age} ans et habite à ${ville}`;

}

console.log(
  afficherUtilisateur({
    nom: "Mohamed",
    age: 27,
    ville: "Lome",
  }),
);

console.log(
  afficherUtilisateur({
    nom: "Alice",
    age: 22,
    ville: "Paris",
  }),
);

console.log(
  afficherUtilisateur({
    nom: "Karim",
    age: 30,
    ville: "Dakar",
  }),
);
