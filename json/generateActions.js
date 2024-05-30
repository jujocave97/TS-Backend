const https = require('https');
const fs = require('fs');

const organizationID = '748448';
const apiToken = '55e32b85-8a30-4533-84a0-9f5b1b81f45f';
const credentials = `${organizationID}:${apiToken}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

// generar los actions segun el ticket que el corresponda


function former(){
    const data = fs.readFileSync("./json/tickets.json",'utf8');
    const objectList = JSON.parse(data);
    const tickets = objectList.Tickets;

    tickets.forEach(ticket => {
        const options = {
            hostname: 'app.teamsupport.com',
            path: `/api/json/Tickets/${ticket.ID}/Actions`,
            method: 'GET',
            headers: {
              'Authorization': `Basic ${encodedCredentials}`,
              'Content-Type': 'application/json',
              'User-Agent': 'Iditic',
            },
          };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
            data += chunk; 
            });
            res.on('end', () => {
            try {
                const parsedData = data;
                fs.writeFile(`./json/actions-${ticket.ID}.json`, parsedData, (err) => {
                if (err) throw err;
                console.log("Nuevos datos agregados");
                });
                console.log('Parsed Response:', parsedData);
                // Now you can access the data as a JavaScript object
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
            });
        });
        req.on('error', (error) => {
            console.error('Error:', error);
        });
        
        req.end();
        
    });
    
}

former();

