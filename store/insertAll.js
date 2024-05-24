const { insertCustomers } = require('./customer');
const { insertContacts } = require('./contact');
const { insertGroups } = require('./group');
const { insertActions } = require('./insertActions');
const { insertOrganizations } = require('./organization');
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
        await insertContacts();
        await insertGroups();
        await insertProducts();
        await insertProductVersions();
        await insertUsers();
        await insertTicketTypes();
        await insertTicketSeverities();
        await insertTicketStatuses();
        await insertTickets();
        await insertActions();
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

insertAll();
