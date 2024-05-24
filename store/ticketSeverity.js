const  insertTicketSeverity  = require('../services/ticketSeveritiesService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createList} = require('./../formats/createListOfJSON');

const userList = createList('Users'); // lista de usuarios id antiguo : id nuevo

function objectList(){
    const data = fs.readFileSync("./json/ticketSeverities.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketSeverities;
    return ticketSeverities;
}

function processTicketSeverities(ticketSeverities){
    ticketSeverities.forEach(ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        insertTicketSeverity( ticket);
    });
}

function insertTicketSeverities() {
    const ticketSeverities = objectList();
    processTicketSeverities(ticketSeverities)
}

module.exports = {insertTicketSeverities}

// funciona  INSERTADO