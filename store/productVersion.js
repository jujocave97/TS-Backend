const  insertProductVerion  = require('../services/productVersionStatusesService');
const {swapEngCalendar} = require('./../formats/changeDate');
const fs = require ('fs');

function objectList(){
    const data = fs.readFileSync("./json/productVersion.json",'utf8');
    const objectList = JSON.parse(data);
    const productV = objectList.ProductVersionStatuses;
    return productV;
}

const productV = objectList();

function processProducts(productV){
    productV.forEach(product => {
        product.DateModified = swapEngCalendar( product.DateModified);
        product.DateCreated = swapEngCalendar( product.DateCreated);
        insertProductVerion( product);
    });
}


function insertProductVersions () {
    const productV = objectList();
    processProducts(productV);
}

module.exports = {insertProductVersions}
// solo se referencia a la organizacion y solo hay una organizacion en el sistema
// funciona insertado