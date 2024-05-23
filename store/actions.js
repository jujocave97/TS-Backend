const  insertAction  = require('../services/actionsService');
const fs = require ('fs');
const {swapEngCalendar} = require('./../formats/changeDate');

function objectList(){
    const data = fs.readFileSync("./json/.json",'utf8');
    const objectList = JSON.parse(data);
    const actions = objectList.Actions;
    return actions;
}

const actions = objectList();


actions.forEach(action => {
    if ( action.CreatorID == 1532741 )
        action.CreatorID = "16e648ff-a2c6-430d-9424-5a72d51279ad";
    if ( action.ModifierID == 1532741 )
        action.ModifierID = "16e648ff-a2c6-430d-9424-5a72d51279ad";

    action.DateModified = swapEngCalendar( action.DateModified);
    action.DateCreated = swapEngCalendar( action.DateCreated);
    insertAction( action);
});
