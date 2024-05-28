const fs = require('fs');
const path = require('path');
const insertAction = require('../services/actionsService');
const {obtenerTickets} = require('../services/ticketService');
const { exit } = require('process');
const {createListSync} = require('./../formats/createListOfJSON');

const ticketList = createListSync('Tickets');

 // Ruta a la carpeta que contiene los archivos JSON

// Función para leer archivos JSON , cambiar el id de ticket referenciado e insertar actions
async function insertActions() {
    const directorio = "./json/actions";
    try {
        const archivos = await fs.promises.readdir(directorio);

        // Filtrar solo los archivos JSON
        const archivosJSON = archivos.filter(archivo => path.extname(archivo).toLowerCase() === '.json');

        let resultados = [];


        for (const archivo of archivosJSON) {
            const rutaArchivo = path.join(directorio, archivo);

            // Leer el contenido del archivo
            const contenido = await fs.promises.readFile(rutaArchivo, 'utf8');
            const datos = JSON.parse(contenido);
            const actions = datos.Actions;
            //console.log(actions.length);


            // Modificar los IDs de los tickets
            actions.forEach(async action =>{
                //console.log(action);
                const ticketID = ticketList[action.TicketID];
                action.TicketID = ticketID;
                await insertAction(action);
        
            });

            resultados.push(datos);
        }

        return resultados;
    } catch (error) {
       console.log(error);
    }
}


module.exports = {insertActions}

// funciona crea json e inserta 