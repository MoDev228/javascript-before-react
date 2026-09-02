function tousLesNombresSontPositifs(nombres) {
  const event = (nombre) => nombre > 0;

  return nombres.every(event);
}

console.log(tousLesNombresSontPositifs([1, 5, 8]));

console.log(tousLesNombresSontPositifs([1, 2, 3]));

console.log(tousLesNombresSontPositifs([10, 5, 8]));

console.log(tousLesNombresSontPositifs([1, -2, 3]));

console.log(tousLesNombresSontPositifs([0, 1, 2]));

console.log(tousLesNombresSontPositifs([]));
