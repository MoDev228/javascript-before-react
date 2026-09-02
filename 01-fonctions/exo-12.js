function calculerSommePositifs(nombres) {
  let somme = 0;

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > 0) {
      somme += nombres[i];
    }
  }

  return somme;
}

console.log(calculerSommePositifs([10, -5, 20, -3, 8])); // 38

console.log(calculerSommePositifs([-10, -5, -2])); // 0

console.log(calculerSommePositifs([1, 2, 3, 4, 5])); // 15

console.log(calculerSommePositifs([-5, 0, 10, -2, 7])); // 17
