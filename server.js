const express = require('express');
const app = express();
const fs = require('fs');

app.get('/update', function (req, res) {
console.log(req.connection.remoteAddress);
if(req.connection){
  let ip = req.connection.remoteAddress.match(/([0-9]+\.?){4}/g)[0];
  fs.writeFileSync(__dirname+"/homeip.txt", ip);
  console.log("Neue IP: "+ip);
}
res.send('OK');
})

app.listen(3000)