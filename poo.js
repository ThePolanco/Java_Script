class animal{
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

let perro = new animal("perro",5,"negro");
let gato = new animal("gato",3,"cafe");
let ave = new animal("paloma",10,"blanco");

// document.write(perro.info + "<br>")
// document.write(gato.info + "<br>")
// document.write(ave.info + "<br>")

perro.verInfo()
gato.verInfo()
ave.verInfo()