var Room_model = require('../model/room');


function roomLastId () {
    return room_model.findOne({}, { '_id': 0,'id':1}).sort({ _id: -1 }).exec()
  .then((idObj) => {
  
    if (idObj.id){

        let idNum=parseInt(idObj.id.slice(4));
        idNum+=1;
     
        let idStr='RID'+idNum.toString().padStart(4, "0")
        console.log(idStr);
        return idStr;
    }
    else{
        return 'RID0001'
    }
  })
  .catch((err) => {
    if (err) console.log( 'Error occured while retriving last id');
  });
}
module.exports =roomLastId