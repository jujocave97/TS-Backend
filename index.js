const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const whieList = [ 'http://localhost:8080', 'https://myapp.com'];
const options = {
    origin: (origin, cb) => {
        if(whieList.includes(origin) || !origin){
            cb(null, true);
        }else {
            cb(new Error('no permitido'));
        }
    }
}

app.use(cors(options));

app.get('/api', (req,res) => {
    res.send('Comienzo de la api');
});

routerApi(app);

app.listen(port, () =>{
    console.log('Puerto '+port);
});