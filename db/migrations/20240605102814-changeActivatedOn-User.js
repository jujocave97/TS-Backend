'use strict';
const { DataTypes } = require('sequelize');
const { USER_TABLE, UserSchema} = require('./../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn(USER_TABLE, "ActivatedOn", {
      allowNull: true,
      type: "SMALLDATETIME",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCT_TABLE, "ActivatedOn");
  }
};
