var express = require('express');
var app = express();

app.all("*", function (req, res) {
  console.log("request: " + req.path);
  res.sendFile( req.path + ".json" , {root: "./mock_server/data", headers: {"Access-Control-Allow-Origin": "*"}});
});

app.listen(process.env.PORT || 8888);