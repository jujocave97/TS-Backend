const fs = require('fs');
const path = require('path');

// Crea una colección leyendo un archivo JSON a partir del nombre de ruta que se pasa por parámetro
function createListSync(rute) {
    const filePath = path.resolve(__dirname, `./../keys/${rute}.json`);
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const objectList = JSON.parse(data);
        return objectList;
    } catch (error) {
        console.error(`Error leyendo el archivo JSON en ${filePath}:`, error);
        throw error;  // Puedes decidir si deseas lanzar el error o manejarlo de otra manera
    }
}

// Llamada de ejemplo a la función síncrona
try {
    const r = createListSync('Customers');
    console.log(r);
} catch (error) {
    console.error('Error creando la lista:', error);
}


module.exports = { createListSync };
