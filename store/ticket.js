const  {insertTicket}  = require('../services/ticketService');
const fs = require ('fs').promises;
const {swapEngCalendar} = require('./../formats/changeDate');
const {createListSync} = require('./../formats/createListOfJSON');



async function objectList(){
    const data =await fs.readFile("./json/tickets.json",'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;
    return tickets;
}

async function processTickets(tickets){
    const productList =await createListSync('Products');
    const groupList =await createListSync('Groups');
    const userList =await createListSync('Users');
    const ticketStatusList =await createListSync('TicketStatus');
    const ticketTypeList = await createListSync('TicketTypes');
    const ticketSeverityList =await createListSync('TicketSeverities');
    
    for(const ticket of tickets){

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
            ticket.TicketStatusID = ticketStatusList[ticket.TicketStatusID];
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
    }
}

async function insertTickets () {
    try{
        const tickets = await objectList();
        processTickets(tickets);
        console.log("Se han introducido los tickets correctamente");
    }catch(error){
        console.log ("Error al introducir los tickets", error);
    }
    
}

module.exports = {insertTickets}
// funciona y crea los json