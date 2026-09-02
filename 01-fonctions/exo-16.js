function analyserNombres(nombres) {

  let compteur_positif = 0;

  let compteur_negatif = 0;

  let compteur_zero = 0;

  for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] > 0) {

      compteur_positif++;

    } else if (nombres[i] < 0) {

      compteur_negatif++;

    } else {

      compteur_zero++;

    }

  }

  return {

    positifs: compteur_positif,

    negatifs: compteur_negatif,

    zeros: compteur_zero,

  };

}

console.log(analyserNombres([10, -5, 0, 8, -2, 0, 15]));

console.log(analyserNombres([1, 2, 3]));

console.log(analyserNombres([-1, -2, -3]));

console.log(analyserNombres([0, 0, 0]));

console.log(analyserNombres([]));
