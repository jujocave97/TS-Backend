const  insertTicketType  = require('../services/ticketTypesService');
const {createList} = require('./../formats/createListOfJSON');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

const userList = createList('Users');

function objectList(){
    const data = fs.readFileSync("./json/ticketTypes.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketTypes = objectList.TicketTypes;
    return ticketTypes;
}

function processTicketTypes(ticketTypes){
    ticketTypes.forEach(ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        insertTicketType( ticket);
    });
}

function insertTicketTypes(){
    const ticketTypes = objectList();
    processTicketTypes(ticketTypes)
}

insertTicketTypes()

module.exports = {insertTicketTypes}

// funciona, inserta y crea JSON