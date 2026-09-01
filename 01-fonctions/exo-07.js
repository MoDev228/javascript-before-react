const notes = [12, 15, 10, 17];

function calculerMoyenne(notes) {

  let somme = 0;

  for (let i = 0; i < notes.length; i++) {

    somme += notes[i];

  }

  if (notes.length !== 0) {

    return somme / notes.length;

  } else {

    return 0;

  }

}

console.log(calculerMoyenne([]));

console.log(calculerMoyenne(notes));
