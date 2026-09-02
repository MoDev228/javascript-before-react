function compterSuperieurs(nombres, valeur) {
  let compteur = 0;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > valeur) {
      compteur++;
    }
  }

  return compteur;
}

console.log(compterSuperieurs([10, 5, 20, 8, 15], 10));
console.log(compterSuperieurs([1, 2, 3, 4, 5], 3));
console.log(compterSuperieurs([10, 20, 30], 50));
console.log(compterSuperieurs([-5, -2, -10, 3], -4));
