function InsertRoomData(DataObj){

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