const  insertProduct  = require('../services/productService');
const {swapEngCalendar} = require('./../formats/changeDate');
const path = require('path');
const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/products.json",'utf8');
    const objectList = JSON.parse(data);
    const products = objectList.Products;
    return products;
}


function processProducts(products){
    products.forEach(product => {
        product.DateModified = swapEngCalendar( product.DateModified);
        product.DateCreated = swapEngCalendar( product.DateCreated);
        product.OrganizationID = 748448
        insertProduct( product);
    });
}
 
function insertProducts() {
    const products = objectList();
    processProducts(products);
}

module.exports = {insertProducts}
// solo se referencia a la organizacion,
// se le añade el atributo porque en el json generado no aparece y tiene que estar la org a la que pertenece
// select * FROM products P INNER JOIN organizations O ON P.organizationID = O.id;