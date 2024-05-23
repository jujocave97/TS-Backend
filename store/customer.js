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

const customers = objectList();


customers.forEach(customer => {
    customer.DateModified = swapEngCalendar( customer.DateModified);
    customer.DateCreated = swapEngCalendar( customer.DateCreated);
    insertCustomer( customer);
});
// funciona insertado

