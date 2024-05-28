const  {insertProduct}  = require('../services/productService');
const {swapEngCalendar} = require('./../formats/changeDate');
const path = require('path');
const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/products.json",'utf8');
    const objectList = JSON.parse(data);
    const products = objectList.Products;
    return products;
}


async function processProducts(products){
    products.forEach(async product => {
        product.DateModified = swapEngCalendar( product.DateModified);
        product.DateCreated = swapEngCalendar( product.DateCreated);
        product.OrganizationID = 748448
        await insertProduct( product);
    });
}
 
async function insertProducts() {
    try{
        const products = objectList();
        await processProducts(products);
        console.log("Se han insertado los productos");
    }catch(error){
        console.log("Error al insertar productos ", error);
    }
    
}

module.exports = {insertProducts}
// solo se referencia a la organizacion,
// se le añade el atributo porque en el json generado no aparece y tiene que estar la org a la que pertenece
// select * FROM products P INNER JOIN organizations O ON P.organizationID = O.id;
// funciona y crea el json