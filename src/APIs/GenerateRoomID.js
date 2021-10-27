const  express = require('express');
const app = express()

const MongoClient  = require("mongodb").MongoClient;
    const connection_string= "mongodb://127.0.0.1:27017/"
   

app.all('/api/GenerateID', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.get('/api/GenerateID', function (req, res) {
  Id=Math.floor(Math.random() * 1000);
  

  var Data={"Id":Id}
  res.send(Data)
});
app.all('/api/GetRoomInfo', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.get('/api/GetRoomInfo', function (req, res) {
  let Id=req.query.id;
  console.log(Id)
  let RoomData=SelectRoomData(Id)
  console.log(RoomData)
  res.send(RoomData)
});




const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)})


function SelectRoomData(id){

let response={PlayerName:null,RoomName:null,GameRule:null}
  var fs = require('fs')
  
  try {
    const data = fs.readFileSync('../DataBase/SavedRooms.json', 'utf8')

    var dataObj = JSON.parse(data)
    for(var i=0; i<dataObj.RoomInfo.length; i++) {
      if (dataObj.RoomInfo[i].RoomID===id){
      response.PlayerName=dataObj.RoomInfo[i].PlayerName
      response.RoomName=dataObj.RoomInfo[i].RoomName
      response.GameRule=dataObj.RoomInfo[i].GameRule
      
      }
      }
   
  
  } catch (err) {
    console.error(err)
    response.PlayerName="Not Defined"
    response.RoomName="Not Defined"
    response.GameRule="Not Defined"
    
  }
  

    return response;
    
   }