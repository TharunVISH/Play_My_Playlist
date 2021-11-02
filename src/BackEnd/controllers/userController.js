var User_model = require('../model/user');
var Song_model = require('../model/song');
var Room_model = require('../model/room');


var generateId = require('../Funtions/generateId');

exports.signUp =  function (req, res) {
   
    
        var new_user= new User_model({
  
        email: req.email,
        password: req.password
      
        });

        new_user.save((err) => {
            if (err) console.log(err);
            else {
                console.log("One User Inserted Sucessfully");
                res.send("sucess")
            }
        })
    
    }

exports.signIn =  function(req, res) {
    User_model.findOne({ 'email': req.email }, function (err, user) {
        if (err) return handleError(err);
        // Prints "Space Ghost is a talk show host".
        if (!user.email) res.send(JSON.stringify({message:"Invalid user name"}))
        else if (user.password!==req.password) res.send(JSON.stringify({message:"Invalid password"}))
        else if (user.password===req.password) res.send(JSON.stringify({message:"Access granted"}))

      });
}
exports.addSongLink =  function (req, res) {
   
    
    var new_song= new Song_model({

    link: req.link,
    roomId: req.roomId,
    userId: req.userId
  
    });

    new_song.save((err) => {
        if (err) console.log(err);
        else {
            console.log("One song Inserted Sucessfully");
            res.send("sucess")
        }
    })

}


exports.removeSongLink =  function (req, res) {

    Song_model.remove({ _id: req.body.id }, function(err) {
    if (!err) {
        res.send("sucess")
    }
    else {
        res.send("failed")
    }
})}



exports.addRoom = async function (req, res) {
    var room_Id=  await generateId();
    
    var new_room= new Room_model({
        
          roomId: room_Id,
          roomName: req.roomId,
          participentNo: req.participentNo,
          passcode: req.passcode,
          gameRule: req.gameRule,

    });

    new_room.save((err) => {
        if (err) console.log(err);
        else {
            console.log("One room Inserted Sucessfully");
            res.send(JSON.stringify({id:room_Id}))
        }
    })

}
