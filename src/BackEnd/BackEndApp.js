var express = require('express');


var router = require('./routes/api');

app.use(express.json());


var app = express();
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://user:user123@cluster0.ebntt.mongodb.net/db_PlayMyPlaylist?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', apiRouter);



const port = process.env.PORT || 6000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)})