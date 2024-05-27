const  {insertTicketStatus}  = require('../services/ticketStatusesService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createList} = require('./../formats/createListOfJSON');


const userList = createList('Users');

function objectList(){
    const data = fs.readFileSync("./json/ticketStatus.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketStatuses;
    return ticketSeverities;
}

async function processTicketStatus(ticketStatus){

    const ticketTypeList =await createList('TicketTypes');

    ticketStatus.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;

        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;

        if (ticket.TicketTypeID in ticketTypeList){
            ticket.TicketTypeID = ticketTypeList[ticket.TicketTypeID]
        }

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