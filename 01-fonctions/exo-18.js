function doublerNombres(nombres) {
  let secondeTableau = [];

  for (let i = 0; i < nombres.length; i++) {
    secondeTableau.push(nombres[i] * 2);
  }

  return secondeTableau;
}

console.log(doublerNombres([1, 2, 3, 4]));
