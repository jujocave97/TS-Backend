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

const products = objectList();

products.forEach(product => {
    product.DateModified = swapEngCalendar( product.DateModified);
    product.DateCreated = swapEngCalendar( product.DateCreated);
    product.OrganizationID = 748448
    insertProduct( product);
});
//funciona  insertado
// select * FROM products P INNER JOIN organizations O ON P.organizationID = O.id;