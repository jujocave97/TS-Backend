const { seq } = require('./../libs/sequelize');

const { ProductVersion, ProductVersionSchema } = require('./../db/models/productVersionStatuses')

ProductVersion.init(ProductVersionSchema, ProductVersion.config(seq));

async function insertProductVerion(dataPV) {
    try {
      const newProductVersion = await ProductVersion.create(dataPV);

      console.log('Nuevo ID de version de producto:', newProductVersion.id);
    } catch (error) {
      console.error('Error al insertar la version de producto:', error);
    }
}

module.exports = insertProductVerion;