var express = require('express');
var app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://choe:wjwj3619@choe-clst.ukekh.mongodb.net/test')
.then(() => console.log('MongoDB Connect......'))
.catch(err => console.log(err))

app.get('/', function (req, res) {
    res.send('Hello World! ji-a love you');
});

app.listen(3000, function () {
    console.log('Example app listening.......');
});