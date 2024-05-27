const  insertOrganization  = require('../services/organizationService');
const fs = require ('fs');

async function insertOrganizations(){
    const organizacion = {
        id: 748448,
        name: 'IDITIC-SANDBOX'
    }
    await insertOrganization(organizacion);
}

insertOrganizations()

module.exports = {insertOrganizations}