// File system: Nos permite manejar carpetas, directorios y archivos que esten en el servidor
const fs = require('fs');
const colors = require('colors/safe');

// La funcion crearArchivo del archivo multiplicar la
// transformamos usando async-await para que retorne
// una promesa por defecto

// base toma por defecto el valor 5 si el usuario no le
// manda ningun valor
const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{

    try{


        let salida = ''; // Se inicializan dos variables con el mismo valor
        let consola = '';
        for(let i=1; i<=hasta; i++){
            salida += `${base}x${i}=${base*i}\n`;
            consola += `${colors.red(base)}${colors.bold(colors.blue('x'))}${i}=${colors.magenta(base*i)}\n`;
        }

        if(listar){
            console.log(colors.blue('==================='));
            console.log('   Tabla del:', colors.red(base));
            console.log(colors.blue('==================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch(err){
        throw err;
    }

}

// En Node para exportar un archivo usamos el siguiente codigo:
module.exports = {
    /* Esto es valido pero redundante basta con mencionar
    el nombre de la funcion
    crearArchivo: crearArchivo*/
    crearArchivo
}