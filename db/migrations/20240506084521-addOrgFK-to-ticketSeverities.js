'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { TICKETSEVERITIES_TABLE} = require('./../models/ticketSeveritiesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(TICKETSEVERITIES_TABLE, "organizationID", {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: ORGANIZATION_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKETSEVERITIES_TABLE, "organizationID");
  }
};