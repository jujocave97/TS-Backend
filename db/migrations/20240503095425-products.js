'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('./../models/productModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllEnums(PRODUCT_TABLE);
  }
};
