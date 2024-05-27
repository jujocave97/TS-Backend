const insertContact = require('../services/contactService');
const { swapEngCalendar } = require('./../formats/changeDate');
const fs = require('fs/promises');
const { createList } = require('./../formats/createListOfJSON');

async function objectList() {
    const data = await fs.readFile("./json/contacts.json", 'utf8');
    const objectList = JSON.parse(data);
    const contacts = objectList.Contacts;
    return contacts;
}

async function processContacts(contacts, customerList) {
    for (const contact of contacts) {
        if (contact.OrganizationID in customerList) {
            contact.CustomerID = customerList[contact.OrganizationID];
        }
        console.log("customer id: "+contact.CustomerID)
        contact.OrganizationID = 748448;
        
        contact.DateModified = swapEngCalendar(contact.DateModified);
        contact.DateCreated = swapEngCalendar(contact.DateCreated);
        contact.LastLogin = swapEngCalendar(contact.LastLogin);
        contact.LastActivity = swapEngCalendar(contact.LastActivity);

        await insertContact(contact);
    }
}

async function insertContacts() {
    try {
        const customerList = await createList('Customers');
        const contacts = await objectList();
        await processContacts(contacts, customerList);
    } catch (error) {
        console.error('Error inserting contacts:', error);
    }
}

insertContacts();

module.exports = { insertContacts };
