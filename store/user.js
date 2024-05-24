const insertUser = require('./../services/userService');
const path = require('path');

const groupList = createList('Groups');
const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/users.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Users;
    return groups;
}

function processUsers(users){
    users.forEach(user => {
        if(user.GroupID in groupList){
            const group = groupList[user.GroupID];
            user.GroupID = group;
        }
    
        user.DateModified = swapEngCalendar( user.DateModified);
        user.DateCreated = swapEngCalendar( user.DateCreated);
        insertUser(user);
    });
}

function insertUsers(){
    const users = objectList();
    processUsers(users);
}

module.exports = {insertUsers}

//funciona INSERTADO