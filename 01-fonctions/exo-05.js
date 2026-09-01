function estBissextile(annee) {

    return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;

}

console.log(estBissextile(2024));
console.log(estBissextile(2023));
console.log(estBissextile(1900));
console.log(estBissextile(2000));
