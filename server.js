const express = require('express')
const app = express(),
    bodyParser  = require('body-parser'),
    fs          = require('fs')
    customers   = JSON.parse(fs.readFileSync('data/customers.json', 'utf-8')),
    states      = JSON.parse(fs.readFileSync('data/states.json', 'utf-8'));
	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//The dist folder has our static resources (index.html, css, images)
//app.use(express.static(__dirname + '/data')); 

app.get('/api/customers/page/:skip/:top', (req, res) => {
   
    res.json(customers);
});

app.listen(4200, () => console.log('Example app listening on port 4200!'))