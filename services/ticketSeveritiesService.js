const { seq } = require('../libs/sequelize');
const {addTOJson} = require('../keys/addToKeysToJSON');
const { TicketSeverities, TicketSeveritiesSchema } = require('./../db/models/ticketSeveritiesModel')

TicketSeverities.init(TicketSeveritiesSchema, TicketSeverities.config(seq));

async function insertTicketSeverity(dataTS) {
    try {
      const newTicketSeverity = await TicketSeverities.create(dataTS);
      await addTOJson(dataTS.ID, newTicketSeverity.id, './keys/TicketSeverities.json');
      console.log('Nuevo ID de Ticket Severity:', newTicketSeverity.id);
    } catch (error) {
      console.error('Error al insertar el ticket severity:', error);
    }
}

module.exports = insertTicketSeverity;