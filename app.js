var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/car',function(req,res){
	res.send("Car data requested.")
})

app.listen(3000);
