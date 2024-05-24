const  insertGroup  = require('../services/groupService');
const path = require('path');
const fs = require ('fs');


function objectList(){
    const data = fs.readFileSync("./json/groups.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Groups;
    return groups;
}

// siempre tiene el mismo valor de organizacion y es la unica clave ajena de la tabla a la que se insertan los grupos
function processGroups(groups){
    list.forEach(element => {
        insertGroup(element);
    });
}
function insertGroups (){
    const list = objectList();
    processGroups(list);
}

module.exports = {insertGroups}