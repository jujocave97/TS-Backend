const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    Name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.STRING
    },
    DateCreated: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    DateModified: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    OrganizationID: {
        type: DataTypes.INTEGER,
    }
}

class Product extends Model {
    static associate (models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE, 
            modelName: PRODUCT_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE}