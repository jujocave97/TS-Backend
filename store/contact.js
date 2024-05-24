const  insertContact  = require('../services/contactService');
const {swapEngCalendar} = require('./../formats/changeDate');
const path = require('path');
const fs = require ('fs');
const {createList} = require('./../formats/createListOfJSON');

const customerList = createList('Customers');

function objectList(){
    const data = fs.readFileSync("./json/contacts.json",'utf8');
    const objectList = JSON.parse(data);
    const contacts = objectList.Contacts;
    return contacts;
}

//console.log(customerList)

// siempre va a tener el mismo valor de organizacion
async function processContacts( contacts ){
    contacts.forEach(async contact => {
        if(contact.OrganizationID in customerList){
            contact.CustomerID = customerList[contact.OrganizationID]
        }
        contact.OrganizationID = 748448;
        
        contact.DateModified = swapEngCalendar( contact.DateModified);
        contact.DateCreated = swapEngCalendar( contact.DateCreated);
        contact.LastLogin = swapEngCalendar( contact.LastLogin);
        contact.LastActivity = swapEngCalendar( contact.LastActivity);
        await insertContact( contact);
    });
}

async function insertContacts(){
    const contacts = objectList();
    await processContacts(contacts);
}

insertContacts()

module.exports = {insertContacts}

// funciona y crea el json
