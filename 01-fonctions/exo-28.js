function afficherCouleurs(couleurs) {

  const [premiere, deuxieme, troisieme] = couleurs;

  return `La première couleur est ${premiere}, la deuxième est ${deuxieme} et la troisième est ${troisieme}.`;

}

console.log(afficherCouleurs(["Rouge", "Verte", "Jaune"]));

console.log(afficherCouleurs(["Noir", "Violet", "Rose"]));

console.log(afficherCouleurs(["Blanche", "Grise", "Rouge"]));

console.log(afficherCouleurs(["Bleue", "Café", "Cyan"]));
