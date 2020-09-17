var express = require('express');
const bodyParser = require('body-parser')
var app = express();


const MongoClient = require('mongodb').MongoClient


conString = "mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())




app.get('/', function(req, res){
	   testFunction()
	   res.send("Hello world!");
	});

app.get('/car',function(req,res){
	
	res.send("Car data requested.")
})
app.listen(3000);





function testFunction(){
	console.log("test")
}
