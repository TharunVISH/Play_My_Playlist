
var InsertData = require('./InsertRoomData.js');

const  express = require('express');
const app = express()
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));

app.all('/api/AddSongLink', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});



app.post('/api/AddSongLink',  (req, res)=> {
  console.log(req.body)
  InsertData(req.body)

});



const port = process.env.PORT || 6000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)})