const  {insertTicket}  = require('../services/ticketService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');
const {createList} = require('./../formats/createListOfJSON');

const productList = createList('Products');
const groupList = createList('Groups');
const userList = createList('Users');
const ticketStatusList = createList('TicketStatus');
const ticketTypeList = createList('TicketTypes');
const ticketSeverityList = createList('TicketSeverities');

function objectList(){
    const data = fs.readFileSync("./json/tickets.json",'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;
    return tickets;
}

async function processTickets(tickets){
    tickets.forEach(async ticket => {

        if(ticket.ProductID in productList){
            const product = productList[ticket.ProductID];
            ticket.ProductID = product;
        }
    
        if(ticket.GroupID in groupList){
            const group = groupList[ticket.GroupID];
            ticket.GroupID = group;
        }
    
        if(ticket.UserID in userList){
            const user = groupList[ticket.UserID];
            ticket.UserID = user;
        }
    
        if(ticket.TicketStatusID in ticketStatusList){
            const ticketStatus = ticketStatusList[ticket.TicketStatusID];
            ticket.TicketStatusID = ticketStatus;
        }
    
        if(ticket.TicketTypeID in ticketTypeList){
            const ticketType = ticketTypeList[ticket.TicketTypeID];
            ticket.TicketTypeID = ticketType;
        }
    
        if(ticket.TicketSeverityID in ticketSeverityList){
            const ticketSeverity = ticketSeverityList[ticket.TicketSeverityID];
            ticket.TicketSeverityID = ticketSeverity;
        }
        
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        
        ticket.SlaViolationHours = 0.00;
        ticket.SlaWarningHours = 0.00;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        ticket.DateClosed = swapEngCalendar( ticket.DateClosed);
        ticket.DueDate = swapEngCalendar( ticket.DueDate);
        await insertTicket( ticket);
    });
}

async function insertTickets () {
    const tickets = objectList();
    await processTickets(tickets);
}

insertTickets() 

module.exports = {insertTickets}
// funciona y crea los json