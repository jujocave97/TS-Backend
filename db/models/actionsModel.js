const {Model, DataTypes, Sequelize } = require('sequelize');

const ACTION_TABLE= 'actions';

const ActionsSchema = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    ActionTypeID: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    Name: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    Descript: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    TicketID: {
      type: DataTypes.UUID
    }
    
  }

  class Actions extends Model {
    static associate (models){
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: ACTION_TABLE,
            modelName: ACTION_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Actions, ActionsSchema, ACTION_TABLE}