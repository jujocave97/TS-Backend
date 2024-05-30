const fs = require('fs').promises;
const path = require('path');
const insertAction = require('../services/actionsService');
const { createListSync } = require('./../formats/createListOfJSON');

// Función para leer archivos JSON, cambiar el id de ticket referenciado e insertar actions
async function insertActions() {
    const directorio = "./json/actions";
    try {
        // Asegurarse de que createListSync se ha completado antes de continuar
        const ticketList = await createListSync('Tickets');
        if (!ticketList) {
            throw new Error('La lista de tickets no se pudo crear');
        }

        const archivos = await fs.readdir(directorio);

        // Filtrar solo los archivos JSON
        const archivosJSON = archivos.filter(archivo => path.extname(archivo).toLowerCase() === '.json');

        let resultados = [];

        for (const archivo of archivosJSON) {
            const rutaArchivo = path.join(directorio, archivo);

            // Leer el contenido del archivo
            const contenido = await fs.readFile(rutaArchivo, 'utf8');
            const datos = JSON.parse(contenido);
            const actions = datos.Actions;

            // Modificar los IDs de los tickets e insertar actions
            for (const action of actions) {
                const ticketID = ticketList[action.TicketID];
                if (!ticketID) {
                    console.error(`No se encontró un nuevo ID de ticket para el ID de ticket original: ${action.TicketID}`);
                    continue;
                }
                action.TicketID = ticketID;
                await insertAction(action);
            }

            resultados.push(datos);
        }

        return resultados;
    } catch (error) {
        console.error("Error en insertActions:", error);
    }
}

async function funInsertActions() {
    try {
        await insertActions();
    } catch (error) {
        console.error("No se han podido introducir los actions:", error);
    }
}

module.exports = { funInsertActions };
