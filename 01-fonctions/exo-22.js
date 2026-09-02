function contientNombreNegatif(nombres) {
  const event = (nombre) => nombre < 0;

  return nombres.some(event);
}

console.log(contientNombreNegatif([10, 5, -3, 8]));

console.log(contientNombreNegatif([1, 2, 3]));

console.log(contientNombreNegatif([-1, 2, 3]));

console.log(contientNombreNegatif([0, 0, 0]));

console.log(contientNombreNegatif([]));
