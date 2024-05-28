const { seq } = require('./../libs/sequelize');
const { Customer, CustomerSchema } = require('./../db/models/customerModel')
const {addTOJson} = require('../keys/addToKeysToJSON');

Customer.init(CustomerSchema, Customer.config(seq));

async function insertCustomer(dataCustomer) {
    try {
      const newCustomer = await Customer.create(dataCustomer);
      addTOJson(dataCustomer.ID, newCustomer.id, './keys/Customers.json');
      console.log('Nuevo ID del cliente:', newCustomer.id);
    } catch (error) {
      console.error('Error al insertar el cliente:', error);
    }
}

module.exports = insertCustomer;