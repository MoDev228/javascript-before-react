function analyseNombres(nombres) {
  const estNegatif = (nombre) => nombre < 0;
  const estPositif = (nombre) => nombre > 0;

  return {
    contientNegatif: nombres.some(estNegatif),
    tousPositifs: nombres.every(estPositif),
  };
}

console.log(analyseNombres([1, 2, 3]));

console.log(analyseNombres([1, -2, 3]));

console.log(analyseNombres([-1, -2, -3]));

console.log(analyseNombres([0, 1, 2]));

console.log(analyseNombres([]));
