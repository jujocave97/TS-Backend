const { seq } = require('./../libs/sequelize');
const { User, UserSchema } = require('./../db/models/userModel')

User.init(UserSchema, User.config(seq));

async function insertUser(dataUser) {
    try {
      const newUser = await User.create(dataUser);

      console.log('Nuevo ID de Usuario:', newUser.id);
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
}

module.exports = insertUser;