const { Model, DataTypes, Sequelize } = require('sequelize');
const moment = require('moment');

const USER_TABLE= 'users';

const UserSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
    },
    MiddleName: {
        type: DataTypes.STRING
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    LastLoggin: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    LastActivity: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    LastPing: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    IsSystemAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    IsFinanceAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    IsPortalUser: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    InOffice: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    InOfficeComment: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    ActivatedOn : {
        type: DataTypes.DATE,
        defaultValue: null
    },
    DeactivatedOn : {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DateCreated : {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    DateModified : {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    IsOnline : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    IsChatUser : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    IsAiUser : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    GroupID: {
        type: DataTypes.UUID,
    
    }
}

class User extends Model {
    static associate(models) {
       
    }

    static config(sequelize){
        return {
            sequelize, 
            tableName: USER_TABLE,
            modelName: USER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { User, UserSchema, USER_TABLE};