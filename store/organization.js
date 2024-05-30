const  {insertOrganization}  = require('../services/organizationService');
const fs = require ('fs');
// insercion de la unica organizacion
 async function insertOrganizations(){
    const organizacion = {
        id: 748448,
        name: 'IDITIC-SANDBOX'
    }
    await insertOrganization(organizacion);
}


module.exports = {insertOrganizations}