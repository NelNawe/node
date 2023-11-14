const scanf = require('scanf');

console.log("Entrez un nombre :");
const number = scanf('%d');

if (isNaN(number)) {
  console.log("Ce n'est pas un nombre valide.");
} else {
  if (number % 2 === 0) {
    console.log(`${number} est un nombre pair.`);
  } else {
    console.log(`${number} est un nombre impair.`);
  }
}