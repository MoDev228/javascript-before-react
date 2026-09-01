function additionner(a, b) {
  return a + b;
}

function soustraire(a, b) {
  return a - b;
}

function multiplier(a, b) {
  return a * b;
}

function diviser(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Erreur : division par zéro impossible.");
  }
}

console.log(additionner(12, 8));
console.log(soustraire(12, 8));
console.log(multiplier(12, 8));
console.log(diviser(12, 8));
