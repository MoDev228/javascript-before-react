function calculerSommeEtMoyenne(notes) {
  let somme = 0;
  let moyenne = 0;

  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }

  if (notes.length !== 0) {
    moyenne = somme / notes.length;
  }

  return {
    somme: somme,
    moyenne: moyenne,
  };
}

console.log(calculerSommeEtMoyenne([12, 15, 10, 17]));

console.log(calculerSommeEtMoyenne([10, 10, 10]));

console.log(calculerSommeEtMoyenne([5, 15]));

console.log(calculerSommeEtMoyenne([]));
