const  express = require('express');
const app = express()
app.get('/api/GenerateID', function (req, res) {
  Id=Math.floor(Math.random() * 1000);
  var Data={"Id":Id}
  res.send(Data)
});

const port = process.env.PORT || 4000;
app.listen(port,()=>{console.log(`Listening to port ${port}`)})