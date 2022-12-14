// Require modules
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/', function(req, res) {
    res.send('Hello World');
  });

app.get('/cars', function(req, res) {
    res.send(`Here's a list of my cars...`);
});
app.post('/cars', function(req, res) {
    res.send('Thanks for the new car!');
});

let name = 'your name here';
app.get('/about-me', function(req, res) {
    res.send(`<h1>Hello World, I am ${name}!</h1>`);
});


// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});