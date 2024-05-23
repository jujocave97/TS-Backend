const  insertOrganization  = require('../services/organizationService');
const fs = require ('fs');


const organizacion = {
    id: 748452,
    name: 'Viticultores'
}

insertOrganization(organizacion);

//funciona insertado