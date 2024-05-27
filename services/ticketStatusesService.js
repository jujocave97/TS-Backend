const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../keys/addToKeysToJSON');
const { TicketStatus, TicketStatusesSchema } = require('./../db/models/ticketStatusesModel')

TicketStatus.init(TicketStatusesSchema, TicketStatus.config(seq));

async function insertTicketStatus(dataTS) {
    try {
      const newTicketStatus = await TicketStatus.create(dataTS);
      await addTOJson(dataTS.ID, newTicketStatus.id, './keys/TicketStatus.json');
      console.log('Nuevo ID de ticket status:', newTicketStatus.id);
    } catch (error) {
      console.error('Error al insertar el ticket status:', error);
    }
}

module.exports = insertTicketStatus;