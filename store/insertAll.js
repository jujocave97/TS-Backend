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
        const methods = [
            insertOrganizations,
            insertCustomers,
            insertContacts,
            insertGroups,
            insertProducts,
            insertProductVersions,
            insertUsers,
            insertTicketTypes,
            insertTicketSeverities,
            insertTicketStatuses,
            insertTickets,
            insertActions
        ];
       
        for (const method of methods) {
            await method();
        }

        console.log('Todos los métodos se han ejecutado correctamente.');
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
}

insertAll();
