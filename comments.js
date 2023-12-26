// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create web server
const app = express();

// Set up modules
app.use(cors());
app.use(bodyParser.json());

// Set up routes
app.use('/api', require('./routes/api'));

// Error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Listening for requests');
});