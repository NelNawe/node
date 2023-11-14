const scanf = require('scanf');

console.log('Entrez cinq nombres séparés par des espaces :');
const input = scanf('%f %f %f %f %f');// entrer les cinq chiffres 

if (input.length === 5) {
  const sum = input.reduce((acc, num) => acc + num, 0);
  console.log(`La somme des cinq nombres est : ${sum}`);
} else {
  console.log('Vous devez entrer exactement cinq nombres.');
}
