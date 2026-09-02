function filtrerNombresPositifs(nombres) {
  let resultats = nombres.filter((nombre) => nombre > 0);

  return resultats;
}

console.log(filtrerNombresPositifs([10, -5, 20, -3, 8]));

console.log(filtrerNombresPositifs([1, 2, 3]));

console.log(filtrerNombresPositifs([-1, -2, -3]));

console.log(filtrerNombresPositifs([-5, 0, 10, -2, 7]));

console.log(filtrerNombresPositifs([0, 0, 0]));

console.log(filtrerNombresPositifs([]));
