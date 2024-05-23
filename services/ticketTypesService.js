const { seq } = require('./../libs/sequelize');

const { TicketType, TicketTypesSchema } = require('./../db/models/ticketTypesModel')

TicketType.init(TicketTypesSchema, TicketType.config(seq));

async function insertTicketType(dataTT) {
    try {
      const newTicketType = await TicketType.create(dataTT);

      console.log('Nuevo ID de ticket type:', newTicketType.id);
    } catch (error) {
      console.error('Error al insertar ticket type:', error);
    }
}

module.exports = insertTicketType;