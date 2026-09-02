function trouverMaximum(nombres) {
  let maximum = nombres[0];

  for (let i = 0; i < nombres.length; i++) {
    if (maximum < nombres[i]) {
      maximum = nombres[i];
    }
  }

  return maximum;
}

console.log(trouverMaximum([12, 5, 18, 7, 3]));
console.log(trouverMaximum([4, 9, 2]));
console.log(trouverMaximum([-10, -3, -20]));
console.log(trouverMaximum([12, 20, 15, 30]));
