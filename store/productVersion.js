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

productV.forEach(product => {
    product.DateModified = swapEngCalendar( product.DateModified);
    product.DateCreated = swapEngCalendar( product.DateCreated);
    insertProductVerion( product);
});


// funciona insertado