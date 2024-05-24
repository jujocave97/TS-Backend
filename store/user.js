const insertUser = require('./../services/userService');
const path = require('path');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createList} = require('./../formats/createListOfJSON');
const groupList = createList('Groups');
const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/users.json",'utf8');
    const objectList = JSON.parse(data);
    const groups = objectList.Users;
    return groups;
}

async function processUsers(users){
    users.forEach(async user => {
        if(user.GroupID in groupList){
            const group = groupList[user.GroupID];
            user.GroupID = group;
        }
        user.LastLogin = swapEngCalendar(user.LastLogin);
        user.LastActivity = swapEngCalendar(user.LastActivity);
        user.LastPing = swapEngCalendar(user.LastPing);
        user.DateModified = swapEngCalendar( user.DateModified);
        user.DateCreated = swapEngCalendar( user.DateCreated);
        await insertUser(user);
    });
}

async function insertUsers(){
    const users = objectList();
    await processUsers(users);
}

insertUsers()
module.exports = {insertUsers}

//funciona INSERTADO y crea el json