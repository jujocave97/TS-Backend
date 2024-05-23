const  insertTicketStatus  = require('../services/ticketStatusesService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

function objectList(){
    const data = fs.readFileSync("./json/ticketStatus.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketSeverities = objectList.TicketStatuses;
    return ticketSeverities;
}

const ticketStatus = objectList();


ticketStatus.forEach(ticket => {
    if ( ticket.CreatorID == 1532741 )
        ticket.CreatorID = "16e648ff-a2c6-430d-9424-5a72d51279ad";
    if ( ticket.ModifierID == 1532741 )
        ticket.ModifierID = "16e648ff-a2c6-430d-9424-5a72d51279ad";

    if ( ticket.TicketTypeID == 22695 )
        ticket.TicketTypeID = "00f2cff3-8740-43c0-807e-7f4fbda802ab";
    if ( ticket.TicketTypeID == 22693 )
        ticket.TicketTypeID = "13946028-db64-46d0-87fc-5a141ff22030";
    if ( ticket.TicketTypeID == 22694 )
        ticket.TicketTypeID = "3cbf2ef1-86d7-4332-91c4-d989484ae267";
    if ( ticket.TicketTypeID == 22787 )
        ticket.TicketTypeID = "4cd7f0c4-b96b-4cd0-96e5-b1572d938e62";
    if ( ticket.TicketTypeID == 22696 )
        ticket.TicketTypeID = "83a0fb16-f9cc-4ca8-a3a2-588459b64965";
  

    ticket.DateModified = swapEngCalendar( ticket.DateModified);
    ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
    insertTicketStatus( ticket);
});
// funciona  INSERTADO