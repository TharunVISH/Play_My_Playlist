const { ObjectId } = require('bson');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoomSchema = new Schema(
   
  {
    roomId: {
      type: String,
      required: [true, 'Email address is required']
    },
    roomName: {
        type: String,
        required: [true, 'roomName address is required']
      },
      participentNo: {
        type: String,
        required: [true, 'participentNo address is required']
      },
      passcode: {
        type: String,
        required: [true, 'passcode address is required']
      },
      gameRule: {
      type: String,
      required: [true, 'gameRule is required']
    },
    userId: {
        type: ObjectId,
        required: [true, 'userId is required']
  }}
);


//Export model
module.exports = mongoose.model('rooms', RoomSchema);