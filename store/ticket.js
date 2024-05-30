const { insertTicket } = require('../services/ticketService');
const fs = require('fs').promises;
const { swapEngCalendar } = require('./../formats/changeDate');
const { createListSync } = require('./../formats/createListOfJSON');
// insercion de todos los tickets modificando las FK correspondientes
async function objectList() {
    const data = await fs.readFile("./json/tickets.json", 'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;
    return tickets;
}

async function processTickets(tickets) {
    const productList = await createListSync('Products');
    const groupList = await createListSync('Groups');
    const userList = await createListSync('Users');
    const ticketStatusList = await createListSync('TicketStatus');
    const ticketTypeList = await createListSync('TicketTypes');
    const ticketSeverityList = await createListSync('TicketSeverities');

    const promises = tickets.map(async ticket => {
        if (ticket.ProductID in productList) {
            ticket.ProductID = productList[ticket.ProductID];
        }

        if (ticket.GroupID in groupList) {
            ticket.GroupID = groupList[ticket.GroupID];
        }

        if (ticket.UserID in userList) {
            ticket.UserID = userList[ticket.UserID];
        }

        if (ticket.TicketStatusID in ticketStatusList) {
            ticket.TicketStatusID = ticketStatusList[ticket.TicketStatusID];
        }

        if (ticket.TicketTypeID in ticketTypeList) {
            ticket.TicketTypeID = ticketTypeList[ticket.TicketTypeID];
        }

        if (ticket.TicketSeverityID in ticketSeverityList) {
            ticket.TicketSeverityID = ticketSeverityList[ticket.TicketSeverityID];
        }

        ticket.CreatorID = userList[ticket.CreatorID];
        ticket.ModifierID = userList[ticket.ModifierID];
        ticket.SlaViolationHours = 0.00;
        ticket.SlaWarningHours = 0.00;
        ticket.DateModified = swapEngCalendar(ticket.DateModified);
        ticket.DateCreated = swapEngCalendar(ticket.DateCreated);
        ticket.DateClosed = swapEngCalendar(ticket.DateClosed);
        ticket.DueDate = swapEngCalendar(ticket.DueDate);

        await insertTicket(ticket);
    });

    await Promise.all(promises);
}

async function insertTickets() {
    try {
        const tickets = await objectList();
        await processTickets(tickets);
        console.log("Se han introducido los tickets correctamente");
    } catch (error) {
        console.log("Error al introducir los tickets", error);
    }
}

module.exports = { insertTickets };
