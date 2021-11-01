var express = require('express');


var router = require('./routes/api');
var app = express();
app.use(express.json());



//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://user:user123@cluster0.h0yew.mongodb.net/db_PlayMyPlaylist?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.all('/api', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
  });

app.use('/api', router);




const port = process.env.PORT || 6000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)})