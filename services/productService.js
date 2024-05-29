const { seq } = require('./../libs/sequelize');
const { Product, ProductSchema } = require('./../db/models/productModel')
const {addTOJson} = require('../keys/addToKeysToJSON');
Product.init(ProductSchema, Product.config(seq));

async function insertProduct(dataProduct) {
  try {
    const newProduct = await Product.create(dataProduct);
    addTOJson(dataProduct.ID, newProduct.id, './keys/Products.json');
    console.log('Nuevo ID de producto:', newProduct.id);
  } catch (error) {
    console.error('Error al insertar el producto:', error);
  }
}


module.exports = {insertProduct};