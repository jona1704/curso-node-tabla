// Desestructuracion para importar archivos
//const {crearArchivo} = require('./helpers/multiplicar');
//const {crearArchivo} = require('./helpers/multiplicar-promise');
const {crearArchivo} = require('./helpers/multiplicar-async-await');
const argv = require('./config/yargs');
const colors = require('colors');

// Limpia la consola automáticamente
console.clear();

/*
Estas líneas se puede programar con Yargs
const [,, arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');*/
//console.log(base);
//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);


//const base = 9;

/*
Modificaremos esta linea para que trabaje en base a una promesa
crearArchivo(base);*/

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


