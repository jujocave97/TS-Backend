'use strict';
const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE} = require('./../models/customerModel');
const { USER_TABLE} = require('./../models/userModel');
const { GROUP_TABLE} = require('./../models/groupModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(CUSTOMER_TABLE, "userID", {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(CUSTOMER_TABLE, "groupID", {
      allowNull: false,
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: GROUP_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, "userID");
    await queryInterface.removeColumn(CUSTOMER_TABLE, "groupID");
  }
};