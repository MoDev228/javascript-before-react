function trouverPremierNombrePositif(nombres) {
  let resultats = nombres.find((nombre) => nombre > 0);

  return resultats;
}

console.log(trouverPremierNombrePositif([-5, -2, 8, 10]));

console.log(trouverPremierNombrePositif([1, 2, 3]));

console.log(trouverPremierNombrePositif([-1, -2, -3]));

console.log(trouverPremierNombrePositif([0, -5, 7, 10]));

console.log(trouverPremierNombrePositif([]));
