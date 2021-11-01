const { ObjectId } = require('bson');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SongSchema = new Schema(
  {
    link: {
      type: String,
      required: [true, 'Email address is required']
    },
    roomId: {
        type: String,
        required: [true, 'RoomId address is required']
      },
    userId: {
      type: ObjectId,
      required: [true, 'userId is required']
    }
  }
);


//Export model
module.exports = mongoose.model('songs', SongSchema);