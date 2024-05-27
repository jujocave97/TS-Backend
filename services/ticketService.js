const { seq } = require('./../libs/sequelize');
const {addTOJson} = require('../keys/addToKeysToJSON');
const { Ticket, TicketSchema } = require('./../db/models/ticketModel')

Ticket.init(TicketSchema, Ticket.config(seq));

async function insertTicket(dataTicket) {
    try {
      const newTicket = await Ticket.create(dataTicket);
      await addTOJson(dataTicket.ID, newTicket.id, './keys/Tickets.json');
      console.log('Nuevo ID de ticket:', newTicket);
    } catch (error) {
      console.error('Error al insertar el ticket:', error);
    }
}




module.exports = {insertTicket};