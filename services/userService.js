const { seq } = require('./../libs/sequelize');
const { User, UserSchema } = require('./../db/models/userModel')
const {addTOJson} = require('../keys/addToKeysToJSON');
User.init(UserSchema, User.config(seq));

async function insertUser(dataUser) {
    try {
      const newUser = await User.create(dataUser);
      await addTOJson(dataUser.ID, newUser.id, './keys/Users.json');
      console.log('Nuevo ID de Usuario:', newUser.id);
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
}

module.exports = insertUser;