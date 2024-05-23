const insertUser = require('./../services/userService');
const path = require('path');


const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/users.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Users;
    return groups;
}

const list = objectList();


for( let i = 0 ; i< list.length; i++){
    insertUser(list[i]);
}


//funciona INSERTADO