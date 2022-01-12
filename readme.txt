devDependencies: Son dependencias solo necesarias en etapa de desarrollo

Para instalar nodemon: npm install nodemon --save-dev
Para desinstalar nodemon: npm uninstall nodemon

Para instalar el paquete de colores: npm install colors
Para desinstalar el paquete de colores: npm uninstall colors
Para instalar una versión específica del paquete: npm install colors@1.0.0
Para actualizar las dependencias instaladas en mi paquete: npm update

Para instalar la dependencia yargs:  npm i yargs

Cuando subimos al repositorio de github nuestra app podemos ignorar
la carpeta node_modules, la cual si es necesaria para la aplicacion
pero esta puede ser reconstuida leyendo los módulos package-lock.json,
package.json y empleando el comando: npm install