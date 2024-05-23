const { seq } = require('./../libs/sequelize');

const { Group, GroupSchema } = require('./../db/models/groupModel')

Group.init(GroupSchema, Group.config(seq));

async function insertGroup(dataGroup) {
    try {
      const newGroup = await Group.create(dataGroup);

      console.log('Nuevo ID de grupo:', newGroup.id);
    } catch (error) {
      console.error('Error al insertar el grupo:', error);
    }
}

module.exports = insertGroup;