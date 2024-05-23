const { seq } = require('./../libs/sequelize');
const { Product, ProductSchema } = require('./../db/models/productModel')

Product.init(ProductSchema, Product.config(seq));

async function insertProduct(dataProduct) {
  Product.create(dataProduct)
  .then(dataProduct => {
    // El nuevo objeto de organización se ha creado con éxito
    console.log('Nuevo objeto de producto:', dataProduct);
  })
  .catch(error => {
    // Se produjo un error al intentar crear el nuevo objeto de organización
    console.error('Error al crear el producto:', error);
  });
}

module.exports = insertProduct;