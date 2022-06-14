const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const routes = require('./server/routes');
const app = express();
var cors = require('cors');
const morgan = require("morgan");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors())
app.use('/api', routes);


const PORT = 6700;



const port = PORT || '6000';
const MONGODB_URI = 'mongodb+srv://root:root_1@cluster0.oqsqu.mongodb.net/callmanagement?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,

}).then(connrction => console.log("Application is connected to db")).catch(err => console.log(err));
mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));
mongoose.connection.once('open', function() {
    console.info('Successfully connected to the database');
});
app.set('port', port);



const server = http.createServer(app);

server.listen(port, function() {
    console.info(`Server started on http://localhost:${port}`)
});
