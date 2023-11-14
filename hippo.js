const scanf = require('scanf');
class Hippopotame {
    constructor(name, tucksSize, weight, position) {
      this.name = name;
      this.tucksSize = tucksSize;
      this.weight = weight;
      this.position = position;
    }
  
    afficherDetails() {
      console.log(`Hippopotame : ${this.name}`);
      console.log(`Taille : ${this.tucksSize} mètres`);
      console.log(`Poids : ${this.weight} kg`);
    }
    swin(){
        if(!this.position){
            console.log('${this.name} is swimming,');
            this.position = true;
            this.weight -= 0.3;
            console.log('${this.name} lose 300 grammes by swimming');
        }
        else{
            console.log('${this.name} is in the water');
        }
        

    }
    eat(){
            console.log('${this.name} is eating')
            this.weight += 1;
            console.log('${this.name} won 1 kg');
        }
        fight(otherHippopotame) {
            console.log(`${this.name} fights against ${otherHippopotame.name}.`);
            if (this.defense > otherHippopotame.defense) {
              console.log(`${this.name} wins the fight !`);
            } else if (this.defense < otherHippopotame.defense) {
              console.log(`${otherHippopotame.name} wins the fight !`);
            } else {
              console.log("match null.");
            }
          }
        
  }

        console.log('Write the name of Hippopotamus : ');//entrer le nom de l'hippopotame
        const name = scanf('%s'); //lire le nom %s pour chaine de caractères 
        console.log('Write the weight of the Hippopothamus : ');//entrer le poids de l'hippopotame
        const weight = scanf('%f');//lire le poids %f pour les virgules flottantes
        console.log('Write the tucksSize of the Hippopothamus : ');//entrer la taille de l'hippopotame
        const tucksSize  = scanf('%f');// lire la taille en incluant les virgules
        const hippopotame = new Hippopotame(name, weight, tucksSize);//creer l'hippopotame
        hippopotame.swin();
        hippopotame.eat();
        hippopotame.fight();
        hippopotame.afficherDetails();//afficher l'hippopotame

    
    





