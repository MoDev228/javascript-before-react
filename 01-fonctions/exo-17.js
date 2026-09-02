function analyserParRapport(nombres, valeur) {

  let compteur_superieur = 0;

  let compteur_inferieur = 0;

  let compteur_egale = 0;

  for (let i = 0; i < nombres.length; i++) {

    if (nombres[i] > valeur) {

      compteur_superieur++;

    } else if (nombres[i] < valeur) {

      compteur_inferieur++;

    } else {

      compteur_egale++;

    }

  }

  return {

    superieurs: compteur_superieur,

    inferieurs: compteur_inferieur,

    egaux: compteur_egale,

  };

}

console.log(analyserParRapport([10, 5, 20, 10, 3, 15], 10));

console.log(analyserParRapport([10, 5, 20, 10, 3, 15], 10));

console.log(analyserParRapport([1, 2, 3, 4, 5], 3));

console.log(analyserParRapport([-5, -2, -10], -5));

console.log(analyserParRapport([], 10));
