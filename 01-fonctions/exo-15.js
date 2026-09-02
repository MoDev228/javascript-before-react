function trouverMinimum(nombres) {
  let minimum = nombres[0];

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] < minimum) {
      minimum = nombres[i];
    }
  }

  return minimum;
}

console.log(trouverMinimum([12, 5, 18, 7, 3]));

console.log(trouverMinimum([10, 20, 5, 8]));

console.log(trouverMinimum([-10, -3, -20, -5]));

console.log(trouverMinimum([7]));
