const  insertTicket  = require('../services/ticketService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

function objectList(){
    const data = fs.readFileSync("./json/tickets.json",'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;
    return tickets;
}

const tickets = objectList();


tickets.forEach(ticket => {
    ticket.SlaViolationHours = 0.00;
    ticket.SlaWarningHours = 0.00;

    ticket.DateModified = swapEngCalendar( ticket.DateModified);
    ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
    ticket.DateClosed = swapEngCalendar( ticket.DateClosed);
    ticket.DueDate = swapEngCalendar( ticket.DueDate);
    insertTicket( ticket);
});

// funciona