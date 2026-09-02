function compterOccurrences(nombres, recherche) {
  let compteur = 0;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
      compteur += 1;
    }
  }

  return compteur;
}

console.log(compterOccurrences([10, 20, 10, 30, 10], 10));

console.log(compterOccurrences([1, 2, 3, 4, 5], 3));

console.log(compterOccurrences([5, 5, 5, 5], 5));

console.log(compterOccurrences([1, 2, 3, 4], 10));

console.log(compterOccurrences([], 5));
