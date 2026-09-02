function compterPairs(nombres) {
  let compteur = 0;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
      compteur++;
    }
  }

  return compteur;
}

console.log(compterPairs([1, 2, 3, 4, 5, 6]));
console.log(compterPairs([10, 15, 20, 25]));
console.log(compterPairs([1, 3, 5, 7]));
console.log(compterPairs([-4, -3, -2, 7]));
