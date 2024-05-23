const {Model, DataTypes, Sequelize } = require('sequelize');

const CONTACT_TABLE= 'contacts';

const contactSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MiddleName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Title: {
      type: DataTypes.STRING,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    DateCreated: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    DateModified: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    LastLogin: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    LastActivity: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    LastPing: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    },
    IsPortalUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    InOffice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    InOfficeComment: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    ActivatedOn: {
      type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    DeactivatedOn: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    DisableOrganizationTicketsViewOnPortal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    PortalViewOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BlockInboundEmail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    OrganizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerID: {
      type: DataTypes.UUID
    }
  
  }

  class Contact extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: CONTACT_TABLE,
            modelName: CONTACT_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Contact, contactSchema, CONTACT_TABLE}