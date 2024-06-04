'use strict';
const { DataTypes } = require('sequelize');
const { GROUP_TABLE, GroupSchema} = require('./../models/groupModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(GROUP_TABLE, "id", {
      type: "VARCHAR",
      defaultValue: Sequelize.NOW
    });


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(GROUP_TABLE, "id");
    
  }
};
