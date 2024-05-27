'use strict';
const { DataTypes } = require('sequelize');
const { ORGANIZATION_TABLE } = require('./../models/organizationModel');
const { PRODUCT_TABLE } = require('./../models/productModel');
const { GROUP_TABLE } = require('./../models/groupModel');
const { USER_TABLE } = require('./../models/userModel');
const { TICKETSTATUSES_TABLE } = require('./../models/ticketStatusesModel');
const { TICKETTYPES_TABLE } = require('./../models/ticketTypesModel');
const { TICKETSEVERITIES_TABLE } = require('./../models/ticketSeveritiesModel');
const { CONTACT_TABLE } = require('./../models/contactsModel');
const { CUSTOMER_TABLE } = require('./../models/customerModel');
const { TICKET_TABLE} = require('./../models/ticketModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    queryInterface.changeColumn(TICKET_TABLE, "productID", {
    
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: PRODUCT_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "groupID", {
      
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: GROUP_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "userID", {
     
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "ticket_status_ID", {
      
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: TICKETSTATUSES_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "ticket_type_ID", {
      
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: TICKETTYPES_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "ticket_severity_ID", {
    
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: TICKETSEVERITIES_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "contactID", {
      
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: CONTACT_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    queryInterface.addColumn(TICKET_TABLE, "customerID", {
      
      type: DataTypes.UUID,
      unique: false,
      references: {
        model: CUSTOMER_TABLE,
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(TICKET_TABLE, "productID");
    await queryInterface.removeColumn(TICKET_TABLE, "groupID");
    await queryInterface.removeColumn(TICKET_TABLE, "userID");
    await queryInterface.removeColumn(TICKET_TABLE, "ticket_status_ID");
    await queryInterface.removeColumn(TICKET_TABLE, "ticket_type_ID");
    await queryInterface.removeColumn(TICKET_TABLE, "ticket_severity_ID");
    await queryInterface.removeColumn(TICKET_TABLE, "contactID");
    await queryInterface.removeColumn(TICKET_TABLE, "customerID");
  }
};