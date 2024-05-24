const  insertOrganization  = require('../services/organizationService');
const fs = require ('fs');

function insertOrganizations(){
    const organizacion = {
        id: 748448,
        name: 'IDITIC-SANDBOX'
    }
    insertOrganization(organizacion);
}

module.exports = {insertOrganizations}