const  insertTicketType  = require('../services/ticketTypesService');
const {createListSync} = require('./../formats/createListOfJSON');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

const userList = createListSync('Users');

function objectList(){
    const data = fs.readFileSync("./json/ticketTypes.json",'utf8');
    const objectList = JSON.parse(data);
    const ticketTypes = objectList.TicketTypes;
    return ticketTypes;
}

async function processTicketTypes(ticketTypes){
    ticketTypes.forEach(async ticket => {
        const creator = userList[ticket.CreatorID];
        ticket.CreatorID = creator;
    
        const modifier = userList[ticket.ModifierID];
        ticket.ModifierID = modifier;
    
        ticket.DateModified = swapEngCalendar( ticket.DateModified);
        ticket.DateCreated = swapEngCalendar( ticket.DateCreated);
        await insertTicketType( ticket);
    });
}

async function insertTicketTypes(){
    try{
        const ticketTypes = objectList();
        await processTicketTypes(ticketTypes);
        console.log("Se han introducido correctamente los ticket types");
    }catch(error){
        console.log("Se han cometido errores con ticket types", error)
    }
    
}


module.exports = {insertTicketTypes}

// funciona, inserta y crea JSON