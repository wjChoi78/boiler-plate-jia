var express = require('express');
var app = express();
const mongoose = require('mongoose');
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://choe:wjwj3619@choe-clst.ukekh.mongodb.net/test')
//mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connect......'))
.catch(err => console.log(err))

app.get('/', function (req, res) {
    res.send('Hello World! ji-a love you. COM');
});

app.post('/register', (req,res) => {
    //회원가입 폼에서 갖고온 데이터를 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) 
            return res.json({ success: false, err})
        else 
            return res.status(200).json({ success: true})
    })
})


app.listen(3000, function () {
    console.log('Example app listening.......');
});