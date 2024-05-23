const fs = require('fs');
const path = require('path');
const insertAction = require('../services/actionsService');

const directorio = './json/actions'; // Ruta a la carpeta que contiene los archivos JSON

// Función para leer archivos JSON y construir un array con su contenido
function leerArchivosJson(directorio) {
    return new Promise((resolve, reject) => {
        fs.readdir(directorio, (err, archivos) => {
            if (err) {
                return reject(`No se pudo leer el directorio: ${err}`);
            }

            // Filtrar solo los archivos JSON
            archivos = archivos.filter(archivo => path.extname(archivo).toLowerCase() === '.json');

            let resultados = [];
            let archivosLeidos = 0;

            if (archivos.length === 0) {
                resolve(resultados);
                return;
            }

            archivos.forEach(archivo => {
                const rutaArchivo = path.join(directorio, archivo);

                // Leer el contenido del archivo
                fs.readFile(rutaArchivo, 'utf8', async (err, contenido) => {
                    if (err) {
                        return reject(`No se pudo leer el archivo ${archivo}: ${err}`);
                    }

                    try {
                        // Parsear el contenido del archivo JSON
                        const datos = JSON.parse(contenido);
                        const actions = datos.Actions;
                        
                        console.log(actions);

                        actions.forEach(action => {
                            insertAction(action); 
                        });

                        resultados.push(datos);
                    } catch (err) {
                        return reject(`Error al parsear el archivo ${archivo}: ${err}`);
                    }

                    archivosLeidos++;
                    if (archivosLeidos === archivos.length) {
                        resolve(resultados);
                    }
                });
            });
        });
    });
}

// Uso de la función para leer los archivos JSON y construir el array
leerArchivosJson(directorio)
    .then(resultados => {
        console.log('Array de contenidos JSON:', resultados);
    })
    .catch(err => {
        console.error('Error:', err);
    });
