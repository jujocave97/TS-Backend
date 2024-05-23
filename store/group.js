const  insertGroup  = require('../services/groupService');
const path = require('path');


const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/groups.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Groups;
    return groups;
}

const list = objectList();


list.forEach(element => {
    insertGroup(element);
});

// funciona | insertado