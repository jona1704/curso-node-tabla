// File system: Nos permite manejar carpetas, directorios y archivos que esten en el servidor
const fs = require('fs');
const { resolve } = require('path/posix');

// La funcion crearArchivo del archivo multiplicar la
// transformamos en una promesa

// base toma por defecto el valor 5 si el usuario no le
// manda ningun valor
const crearArchivo = (base = 5) =>{

    return new Promise((resolve, reject) => {
        console.log('===================');
        console.log('   Tabla del:', base);
        console.log('===================');

        let salida = '';
        for(let i=1; i<=10; i++){
            salida += `${base}x${i}=${base*i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    })
}

// En Node para exportar un archivo usamos el siguiente codigo:
module.exports = {
    /* Esto es valido pero redundante basta con mencionar
    el nombre de la funcion
    crearArchivo: crearArchivo*/
    crearArchivo
}