// let free = false;
// const validarCliente = (time)=>{
//     let edad = prompt("Cual es tu edad?");
//     if (edad > 18){
//         if(time >= 2 && time < 7 && free == flase){
//             alert("Entrada gratuita");
//             free = true;
//         }else{
//             alert("Son las Entrada pagada");
//         }
//     }else{
//         alert("Prohibido el ingreso")
//     } 
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.5);
// validarCliente(1);
// validarCliente(2);

// let cantidad = prompt("¿Cuantos alumnos hay?");
// let alumnosTotales = [];

// for(i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];   
// }

// const tomarAsistencia = (nombre, p)=>{
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
// }

// for(i = 0; i < 30; i++){
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno)
//     }
// }

// for(alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//         Asistencias: ${alumnosTotales[alumno][1]} <br>
//         Ausencias: ${30 - alumnosTotales[alumno][1]}
//     `;
//     if(30 - alumnosTotales[alumno][1] > 18){
//         resultado += "Reprobado por inasistencia <br><br>"
//     }else{
//         resultado += "<br><br>"
//     }
//     document.write(resultado)
// }

// const sumar = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2);
// }
// const dividir = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
// }

// alert("Que operación deseas realizar?: ");
// operacion = prompt("1.Suma, 2.Resta, 3.Multiplicación, 4.División");

// if(operacion == 1){
//     let numero1 = prompt("Numero 1");
//     let numero2 = prompt("Numero 2");
//     resultado = sumar(numero1,numero2);
//     alert("Resultado: " + resultado);
// }
// else if(operacion == 2){
//     let numero1 = prompt("Numero 1");
//     let numero2 = prompt("Numero 2");
//     resultado = restar(numero1,numero2);
//     alert("Resultado: " + resultado);
// }
// else if(operacion == 3){
//     let numero1 = prompt("Numero 1");
//     let numero2 = prompt("Numero 2");
//     resultado = multiplicar(numero1,numero2);
//     alert("Resultado: " + resultado);
// }
// else if(operacion == 4){
//     let numero1 = prompt("Numero 1");
//     let numero2 = prompt("Numero 2");
//     resultado = dividir(numero1,numero2);
//     alert("Resultado: " + resultado);
// }
// else{
//     alert("No se ha encontrado la operación")
// }



//POO 
// class Celular {
//   constructor(color, peso, tamaño, rdc, ram) {
//     this.color = color;
//     this.peso = peso;
//     this.tamaño = tamaño;
//     this.rdc = rdc;
//     this.ram = ram;
//     this.encendido = false;
//   }

//   presionarBotonEncendido() {
//     if (this.encendido == false) {
//       alert("Celular prendido");
//       this.encendido = true;
//     } else {
//       alert("Celular apagado");
//       this.encendido = false;
//     }
//   }

//   reiniciar() {
//     if (this.encendido == true) {
//       alert("Reiniciando celular");
//     } else {
//       alert("El celular está apagado");
//     }
//   }

//   tomarFoto() {
//     alert("Foto tomada en una resolución de: " + this.tamaño);
//   }

//   grabarVideo() {
//     alert("Video grabado en: " + this.rdc);
//   }
//   mobileInfo() {
//     return `
//         Color: <b>${this.color}</b></br>
//         Peso: <b>${this.peso}</b></br>
//         Tamaño: <b>${this.tamaño}</b></br>
//         Memoria RAM: <b>${this.ram}</b></br>
//         Resolución de video: <b>${this.rdc}</b></br>
//         `;
//   }
// }

// class celularAltaGama extends Celular {
//   constructor(color, peso, tamaño, rdc, ram, rdce) {
//     super(color, peso, tamaño, rdc, ram);
//     this.resolucionDeCamaraExtra = rdce;
//   }
//   grabarVideoLento() {
//     alert("Estás grabando en cámara lenta");
//   }
//   reconocimientoFacial() {
//     alert("Vamos a realizar un reconocimiento facial");
//   }
//   infoAltaGama() {
//     return this.mobileInfo() + `Resolución de cámara extra: <b>${this.resolucionDeCamaraExtra}</b> <br>`;
//   }
// }

// celular1 = new Celular("Rojo", "130g", "4'", "Full HD", "2GB");
// celular2 = new Celular("Azul", "140g", "5'", "HD", "8GB");
// celular3 = new Celular("Gris", "150g", "3'", "Full HD", "16GB");

// //   celular1.presionarBotonEncendido();
// //   celular1.tomarFoto();
// //   celular1.grabarVideo();
// //   celular1.reiniciar();
// //   celular1.presionarBotonEncendido();

// celular4 = new celularAltaGama("Negro", "120g", "5.2'", "4k", "16GB", "Full HD");
// celular5 = new celularAltaGama("Blanco", "130g", "5.1'", "4k", "8GB", "Full HD");

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>
//     ${celular4.infoAltaGama()} <br>
//     ${celular5.infoAltaGama()} <br>
//     `);


// class App{
//   constructor(descargas,puntuacion,peso){
//     this.descargas = descargas;
//     this.puntuacion = puntuacion;
//     this.peso = peso;
//     this.iniciada = false;
//     this.instalada = false;
//   }
//   instalar(){
//     if(this.instalada == false){
//       this.instalada = true;
//       alert("App instalada correctamente");
//     }
//   }
//   desinstalar(){
//     if(this.instalada = true){
//       this.instalada = false;
//       alert("App desinstalada correctamente");
//     }
//   }
//   abrir(){
//     if(this.iniciada == false && this.instalada == true){
//       this.iniciada = true;
//       alert("App iniciada");
//     }
//   }
//   cerrar(){
//     if(this.iniciada == true && this.instalada == true){
//       this.iniciada = false;
//       alert("App cerrada");
//     }
//   }
//   appInfo(){
//     return `
//     Descargas: <b>${this.descargas}</b></br>
//     Puntuación: <b>${this.puntuacion}</b></br>
//     Peso: <b>${this.peso}</b></br>
//     `
//   }
// }

// app = new App("16.000","5 estrellas","800mb");
// app2 = new App("160.000","4 estrellas","1000mb");
// app3 = new App("11.000","4 estrellas","200mb");
// app4 = new App("1.000","3 estrellas","300mb");
// app5 = new App("3.000","2 estrellas","400mb");
// app6 = new App("500.000","5 estrellas","1800mb");
// app7 = new App("2.000","4 estrellas","130mb");


// document.write(`
//   ${app.appInfo()}<br>
//   ${app2.appInfo()}<br>
//   ${app3.appInfo()}<br>
//   ${app4.appInfo()}<br>
//   ${app5.appInfo()}<br>
//   ${app6.appInfo()}<br>
//   ${app7.appInfo()}<br>
//   `)