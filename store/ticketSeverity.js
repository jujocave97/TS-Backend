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

async function processTicketSeverities(ticketSeverities){
    ticketSeverities.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        await insertTicketSeverity( ticket);
    });
}

async function insertTicketSeverities() {
    const ticketSeverities = objectList();
    await processTicketSeverities(ticketSeverities)
}

insertTicketSeverities()

module.exports = {insertTicketSeverities}

// funciona  INSERTADO y crea json