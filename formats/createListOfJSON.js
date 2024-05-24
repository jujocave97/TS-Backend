const fs = require('fs');
// crea una coleccion leyendo un archivo json a partir del nombre de ruta que se pasa por parametro
function createList(rute){
    const data = fs.readFileSync(`./keys/${rute}.json`,'utf8');
    const objectList = JSON.parse(data);
    const list = objectList.rute;
    return list;
}

module.exports = {createList}
