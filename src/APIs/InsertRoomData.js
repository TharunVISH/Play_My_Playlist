function InsertRoomData(DataObj){
    
    const MongoClient  = require("mongodb").MongoClient;
    const connection_string= "mongodb://127.0.0.1:27017/"
    MongoClient.connect(connection_string,{useUnifiedTopology:true},  (err,client)=>{

    if(err) throw error;
    console.log("connected to db")
    var db=client.db("PlayMyPlayList_db");
    db.collection("roomInfo").insertOne(DataObj,(err,res)=>{
        if(err) throw error;
        console.log("One room inserted")
        client.close()
    })

})

    var fs = require('fs')
    fs.readFile('../DataBase/SavedRooms.json', function (err, data) {
        if (err)
        {
            var database = {
            RoomInfo: []
            };
            database.RoomInfo=[DataObj]; 

            fs.writeFile('../DataBase/SavedRooms.json', JSON.stringify(database),(err, data)=>{})
        }
        else {

            var data = JSON.parse(data)
            data.RoomInfo.push(DataObj); 

            fs.writeFile('../DataBase/SavedRooms.json', JSON.stringify(data),(err, data)=>{})
        }
        })



}

 module.exports =InsertRoomData