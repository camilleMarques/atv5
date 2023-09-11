
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  class Cachorro extends Animal {
    fazerSom() {
      console.log(`${this.nome} late.`);
    }
  }
  
  class Gato extends Animal {
    fazerSom() {
      console.log(`${this.nome} mia.`);
    }
  }
  
  function fazerAnimalFazerSom(animal) {
    animal.fazerSom();
  }
  
  const rex = new Cachorro('Rex');
  const felix = new Gato('Felix');
  
  fazerAnimalFazerSom(rex);   
  fazerAnimalFazerSom(felix); 
  