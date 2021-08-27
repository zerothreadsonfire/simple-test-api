const express = require("express");
const data = require('./data/data.json');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to my Test API hostend on Heroku');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})