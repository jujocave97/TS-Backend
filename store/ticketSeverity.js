const  insertTicketSeverity  = require('../services/ticketSeveritiesService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

function objectList(){
    const data = fs.readFileSync("./json/ticketSeverities.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketSeverities;
    return ticketSeverities;
}

const ticketSeverities = objectList();


ticketSeverities.forEach(ticket => {
    if ( ticket.CreatorID = 1532741 )
        ticket.CreatorID = "16e648ff-a2c6-430d-9424-5a72d51279ad";
    if ( ticket.ModifierID = 1532741 )
        ticket.ModifierID = "16e648ff-a2c6-430d-9424-5a72d51279ad";

    ticket.DateModified = swapEngCalendar( ticket.DateModified);
    ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
    insertTicketSeverity( ticket);
});

// funciona  INSERTADO