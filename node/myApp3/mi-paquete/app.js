// const EventEmitter = require('events');

// const emisorProductos = new EventEmitter();

// emisorProductos.on('compra', (total, numProductos) => {
//     console.log(`Se realizo la compra por $${total}`);
//     console.log(`Numero de productos: ${numProductos}`);
// });

// emisorProductos.emit('compra', 500, 5);

// PROMESAS
// const promesaCumplida = false;

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(promesaCumplida){
//             resolve('Promesa cumplida.');
//         } else {
//             reject('Promesa rechazada.');
//         }
//     }, 2000);
// });

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);


// const estatusPedido = () => {
//   return estatus = Math.random() < 0.8;
// };

// const miPedido = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(estatusPedido()) {
//       resolve('Pedido exitoso.');
//     } else {
//       reject('Ocurrio un error.')
//     }
//   }, 100);
// });

// miPedido
//   .then((mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
//   })
//   .catch((mensajedDeError) => {
//     console.log(mensajedDeError);
//   });



function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de JP`);
    setTimeout(() => {
      if(producto == 'taza'){
        resolve('Ordenando una taza.');
      } else {
        reject('Producto agotado. Lo siento.');
      }
    }, 1000);
  });
}

function procesarPedido(respuesta){
  return new Promise((resolve) => {
    console.log('Procesando respuesta');
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve('Gracias por su compra.');  
    }, 3000);
  });
}

ordenarProducto('taza')
  .then(respuesta => {
    console.log('Respuesa recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  });
