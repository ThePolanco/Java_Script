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

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("Que operación deseas realizar?: ");
operacion = prompt("1.Suma, 2.Resta, 3.Multiplicación, 4.División");

if(operacion == 1){
    let numero1 = prompt("Numero 1");
    let numero2 = prompt("Numero 2");
    resultado = sumar(numero1,numero2);
    alert("Resultado: " + resultado);
}
else if(operacion == 2){
    let numero1 = prompt("Numero 1");
    let numero2 = prompt("Numero 2");
    resultado = restar(numero1,numero2);
    alert("Resultado: " + resultado);
}
else if(operacion == 3){
    let numero1 = prompt("Numero 1");
    let numero2 = prompt("Numero 2");
    resultado = multiplicar(numero1,numero2);
    alert("Resultado: " + resultado);
}
else if(operacion == 4){
    let numero1 = prompt("Numero 1");
    let numero2 = prompt("Numero 2");
    resultado = dividir(numero1,numero2);
    alert("Resultado: " + resultado);
}
else{
    alert("No se ha encontrado la operación")
}


