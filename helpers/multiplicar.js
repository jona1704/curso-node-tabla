// File system: Nos permite manejar carpetas, directorios y archivos que esten en el servidor
const fs = require('fs');

// base toma por defecto el valor 5 si el usuario no le
// manda ningun valor
const crearArchivo = (base = 5) =>{

    console.log('===================');
    console.log('   Tabla del:', base);
    console.log('===================');

    let salida = '';
    for(let i=1; i<=10; i++){
        salida += `${base}x${i}=${base*i}\n`;
    }

    console.log(salida);

    /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
        console.log(`tabla-${base}.txt creado`);
    })*/

    // Trabaja como fs.writeFile() pero el error se tendría que
    // verificar con un try-catch
    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
}

// En Node para exportar un archivo usamos el siguiente codigo:
module.exports = {
    /* Esto es valido pero redundante basta con mencionar
    el nombre de la funcion
    crearArchivo: crearArchivo*/
    crearArchivo
}