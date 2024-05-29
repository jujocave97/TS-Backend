const { insertOrganizations } = require('./organization');
const { insertCustomers } = require('./customer');
const { insertContacts } = require('./contact');
const { insertGroups } = require('./group');
const { insertActions } = require('./insertActions');
const { insertProducts } = require('./product');
const { insertProductVersions } = require('./productVersion');
const { insertTickets } = require('./ticket');
const { insertTicketStatuses } = require('./ticketStatus');
const { insertTicketSeverities } = require('./ticketSeverity');
const { insertTicketTypes } = require('./ticketType');
const { insertUsers } = require('./user');

async function insertAll() {
    try {
        await insertOrganizations();
        await insertCustomers();
        await insertGroups();
        await insertProducts();
        await insertProductVersions();
        await insertUsers();
        await sleep(1000);
        await insertContacts(); 
        await insertTicketTypes();
        await insertTicketSeverities();
        await sleep(1000);  
        await insertTicketStatuses();
        await sleep(1000);
        await insertTickets();
        await sleep(1000);
        await insertActions();
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

insertAll();
