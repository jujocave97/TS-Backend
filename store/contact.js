const  insertContact  = require('../services/contactService');
const {swapEngCalendar} = require('./../formats/changeDate');
const path = require('path');
const fs = require ('fs');


function objectList(){
    const data = fs.readFileSync("./json/contacts.json",'utf8');
    const objectList = JSON.parse(data);
    const contacts = objectList.Contacts;
    return contacts;
}



// siempre va a tener el mismo valor de organizacion
function processContacts( contacts ){
    contacts.forEach(contact => {
        contact.CustomerID = contact.OrganizationID
        contact.OrganizationID = 748448;
        contact.DateModified = swapEngCalendar( contact.DateModified);
        contact.DateCreated = swapEngCalendar( contact.DateCreated);
        contact.LastLogin = swapEngCalendar( contact.LastLogin);
        contact.LastActivity = swapEngCalendar( contact.LastActivity);
    
        insertContact( contact);
    });
}

function insertContacts(){
    const contacts = objectList();
    processContacts(contacts);
}

module.exports = {insertContact}

// funciona insertado 