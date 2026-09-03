function analyserNombres(nombres) {

  const [premier, deuxieme, ...reste] = nombres;

  return {
    premier: premier,
    deuxieme: deuxieme,
    reste: reste,
  };

}

console.log(analyserNombres([10, 20, 30, 40, 50]));

console.log(analyserNombres([1, 25, 45, 12]));

console.log(analyserNombres([19, 29, 35, 70, 60, 23, 42]));

console.log(analyserNombres([19, 29, 35, 70, 40, 42]));

console.log(analyserNombres([19, 29, 35, 70, 30, 23, 42, 66, 69]));
