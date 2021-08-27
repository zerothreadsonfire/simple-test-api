const express = require("express");
const data = require('./data/data.json');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Test API hostend on Heroku');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(5000, ()=> {
    console.log('listening on port 5000');
})