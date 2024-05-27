const { seq } = require('./../libs/sequelize');
const { Contact, contactSchema } = require('./../db/models/contactsModel')
const {addTOJson} = require('../keys/addToKeysToJSON');

Contact.init(contactSchema, Contact.config(seq));

async function insertContact(dataContact) {
    try {
      dataContact.CustomerID = dataContact.OrganizationID
      console.log(dataContact.Custo)
      
      const newContact = await Contact.create(dataContact);
      await addTOJson(dataContact.ID, newContact.id, './keys/Contacts.json');
      console.log('Nuevo ID del contacto:', newContact.id);
    } catch (error) {
      console.error('Error al insertar el contacto:', error);
    }
}


module.exports = insertContact;