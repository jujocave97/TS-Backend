const fs = require('fs');
const path = require('path');

// Crea una colección leyendo un archivo JSON a partir del nombre de ruta que se pasa por parámetro
async function createListSync(rute) {
    const filePath = path.resolve(__dirname, `./../keys/${rute}.json`);
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const objectList = JSON.parse(data);
        return objectList;
    } catch (error) {
        console.error(`Error leyendo el archivo JSON en ${filePath}:`, error);
    }
}


module.exports = { createListSync };
