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

async function processProducts(productV){
    productV.forEach(async product => {
        product.DateModified = swapEngCalendar( product.DateModified);
        product.DateCreated = swapEngCalendar( product.DateCreated);
        await insertProductVerion( product);
    });
}


async function insertProductVersions () {
    const productV = objectList();
    await processProducts(productV);
}

insertProductVersions()
module.exports = {insertProductVersions}
// solo se referencia a la organizacion y solo hay una organizacion en el sistema
// funciona insertado y crea el json