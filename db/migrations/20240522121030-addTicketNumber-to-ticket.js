'use strict';
const { DataTypes } = require('sequelize');
const { TICKET_TABLE} = require('./../models/ticketModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(TICKET_TABLE, "TicketNumber", {
      allowNull: true,
      type: DataTypes.INTEGER,

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(TICKET_TABLE, "TicketNumber");
  }
};