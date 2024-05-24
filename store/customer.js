const  insertCustomer  = require('../services/customerService');
const path = require('path');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

function objectList(){
    const data = fs.readFileSync("./json/customers.json",'utf8');
    const objectList = JSON.parse(data);
    const customers = objectList.Customers;
    return customers;
}

// no hace falta referenciar ninguna tabla, el campo ajeno es la organizacion y siempre es el mismo valor
function processCustomers( customers ){
    customers.forEach(customer => {
        customer.DateModified = swapEngCalendar( customer.DateModified);
        customer.DateCreated = swapEngCalendar( customer.DateCreated);
        insertCustomer( customer);
    });
}
// funciona insertado

function insertCustomers (){
    const customers = objectList();
    processCustomers(customers);
}

insertCustomers()  // los inserta y crea el JSON

module.exports = {insertCustomers}