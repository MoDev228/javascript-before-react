const notes = [12, 15, 10, 17];

function calculerMoyenne(notes) {
  let somme = 0;

  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }

  return somme / notes.length;
}

console.log(calculerMoyenne(notes));
console.log(calculerMoyenne(notes));
