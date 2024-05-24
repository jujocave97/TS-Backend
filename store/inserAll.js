const {insertCustomers} = require('./customer');
const {insertContacts} = require('./contact');
const {insertGroups} = require('./group');
const {insertActions} = require('./insertActions');
const {insertOrganizations} = require('./organization');
const {insertProducts} = require('./product');
const {insertProductVersions} = require('./productVersion');
const {insertTickets} = require('./ticket');
const {insertTicketStatuses} = require('./ticketStatus');
const {insertTicketSeverities} = require('./ticketSeverity');
const {insertTicketTypes} = require('./ticketType');
const {insertUsers} = require('./user');

function insertAll() {
    insertCustomers();
    insertContacts();
    insertGroups();
    insertActions();
    insertOrganizations();
    insertProducts();
    insertProductVersions();
    insertTickets();
    insertTicketStatuses();
    insertTicketSeverities();
    insertTicketTypes();
    insertUsers();
}

insertAll();