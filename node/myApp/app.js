// const { saludar, saludarHolaMundo } = require("./saludos.js");
// console.log(saludar('Jeison'))
// console.log(saludarHolaMundo());


// console.log('Hola Mundo');
// console.warn('Ocurrio un error');
// console.error('ERROR!');
// console.error(new Error('Algo Fallo!'));
// console.log(process.env);
// console.log(process.argv);
// console.log(process.memoryUsage());


// const os = require('os');
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());


// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// setTimeout(mostrarTema, 1000, 'Node.js');
// function sumar(a, b){
//   console.log(a + b);
// }
// setTimeout(sumar, 2000, 5, 5);


// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// setImmediate(mostrarTema, 'Node.js');


// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`);
// }
// setInterval(mostrarTema, 2000, 'Node.js');


//fs: File System
const fs = require('fs');

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//   if(err){
//     throw err;
//   }
//   console.log(contenido);
// });

// fs.rename('index.html', 'main.html', (err) =>{
//   if(err){
//     throw err;
//   }
//   console.log('Modificación ejecutada correctamente.');
// });

// fs.appendFile('index.html', '<p>Hola</p>', (err) =>{
//   if(err){
//     throw err;
//   }
//   console.log('Archivo actualizado.')
// });

// fs.writeFile('index.html', 'Contenido Nuevo', (err) => {
//   if(err){
//     throw err;
//   }
//   console.log('Contenido reemplazado.');
// });

// fs.unlink('index.html', (err) =>{
//   if (err){
//     throw err;
//   }
//   console.log('Archivo eliminado')
// });