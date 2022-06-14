const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const routes = require('./server/routes');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/api', routes);
const PORT = 6700;



// const port = PORT || '6000';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, function() {
//     console.info(`Server started on http://localhost:${port}`)
// });

app.use(express.static(__dirname + '/dist/call-management'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/call-management/index.html'));
});
const port = process.env.PORT || 3000;
//const MONGODB_URI = process.env.MONGODB_URI;



const MONGODB_URI = 'mongodb+srv://publisher5call:ldomDrTBmHEjR54R@cluster0.uts5esk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI);
mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));
mongoose.connection.once('open', function() {
    console.info('Successfully connected to the database');
});
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function() {
    console.info(`Server started on http://localhost:${port}`)
});