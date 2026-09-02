function contientNombre(nombres, recherche) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
      return true;
    }
  }

  return false;
}

console.log(contientNombre([10, 20, 30, 40], 30));
console.log(contientNombre([10, 20, 30, 40], 50));
console.log(contientNombre([-5, -2, -10], -2));
console.log(contientNombre([1, 3, 5, 7], 2));
