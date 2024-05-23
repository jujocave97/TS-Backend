'use strict';

const { ActionSchema, ACTION_TABLE } = require('./../models/actionModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ACTION_TABLE, ActionSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(ACTION_TABLE);
  }
};