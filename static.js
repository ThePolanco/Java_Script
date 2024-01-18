class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }   
}

// HERENCIA
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    static ladrar(){
        document.write("¡Guau!" + "<br>")
    }
}


let perro = new Perro("perro",5,"negro","Golden");
let gato = new Animal("gato",3,"cafe");
let ave = new Animal("paloma",10,"blanco");

Perro.ladrar();
gato.verInfo();
ave.verInfo();