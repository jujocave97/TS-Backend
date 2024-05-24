const fs = require('fs');
const path = require('path');

// Crea una colección leyendo un archivo JSON a partir del nombre de ruta que se pasa por parámetro
function createList(rute) {
    const filePath = path.resolve(__dirname, `./../keys/${rute}.json`);
    const data = fs.readFileSync(filePath, 'utf8');
    const objectList = JSON.parse(data);
    return objectList;
}

// const r = createList('Customers');
// console.log(r);

module.exports = { createList };