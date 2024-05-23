'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { GROUP_TABLE, GroupSchema} = require('./../models/groupModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(GROUP_TABLE, "createdAt", {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    });

    queryInterface.addColumn(GROUP_TABLE, "updatedAt", {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(GROUP_TABLE, "createdAt");
    await queryInterface.removeColumn(GROUP_TABLE, "createdAt");
  }
};
