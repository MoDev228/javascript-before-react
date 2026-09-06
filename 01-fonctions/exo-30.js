function afficherAdresse(utilisateur) {

  const {
    nom,
    adresse: { ville, pays },
  } = utilisateur;

  return `${nom} habite à ${ville}, au ${pays}.`;

}

console.log(
  afficherAdresse({
    nom: "Mohamed",
    age: 27,
    adresse: {
      ville: "Lomé",
      pays: "Togo",
    },
  }),
);

console.log(
  afficherAdresse({
    nom: "Ali",
    age: 16,
    adresse: {
      ville: "Cotonou",
      pays: "Benin",
    },
  }),
);

console.log(
  afficherAdresse({
    nom: "Aziz",
    age: 25,
    adresse: {
      ville: "Abijan",
      pays: "Côte d’ivoire",
    },
  }),
);

console.log(
  afficherAdresse({
    nom: "Moussa",
    age: 30,
    adresse: {
      ville: "Accra",
      pays: "Ghana",
    },
  }),
);
