const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const uuid = require('uuid');
//const config = require('../config/appconfig');
const Logger = require('./utils/logger.js');
const moment = require('moment');
const logger = new Logger();
const app = express();
//app.set('config', config); // marvikomo
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet());

app.use(compression());


let authApi = require('./router/auth');

app.use('/api/v1', authApi);

const port = process.env.PORT || 9900;

//const server = http.createServer(app);
// start server
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
});

