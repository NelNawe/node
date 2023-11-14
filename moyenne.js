const scanf = require('scanf');

function calculerMoyenne() {
  const nombres = [];

  for (let i = 1; i <= 5; i++) {
    console.log(`Entrez le nombre ${i}:`);//pour l'afficher dans la console du terminal
    const nombre = scanf('%f'); //entrer le nombre et le stocker 
    nombres.push(nombre); //ajoute un nombre au tableau
  }

  const somme = nombres.reduce((acc, nombre) => acc + nombre, 0);//calcule la somme du tableau afin de calculer la moyenne
  const moyenne = somme / nombres.length;//calcule la moyenne
  console.log(`La moyenne des cinq nombres est : ${moyenne}`);//afficher la somme dans le terminal
}

calculerMoyenne();
