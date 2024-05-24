const  insertTicketStatus  = require('../services/ticketStatusesService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createList} = require('./../formats/createListOfJSON');

const ticketTypeList = createList('TicketTypes');
const userList = createList('Users');

function objectList(){
    const data = fs.readFileSync("./json/ticketStatus.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketStatuses;
    return ticketSeverities;
}

async function processTicketStatus(ticketStatus){
    
    ticketStatus.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;

        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;

        const type = ticketTypeList[ticket.TicketTypeID];
        ticket.TicketTypeID = type;

        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        await insertTicketStatus( ticket);
    });
}

async function insertTicketStatuses(){
    const ticketStatus = objectList();
    await processTicketStatus(ticketStatus)
}

insertTicketStatuses()

module.exports = {insertTicketStatuses}
// funciona  INSERTADO y crea json