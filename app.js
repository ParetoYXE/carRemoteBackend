var express = require('express');
const bodyParser = require('body-parser')
var app = express();




//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())




app.get('/', function(req, res){
	   res.send("test");
	});

app.get('/car',function(req,res){
	
	res.send("Car data requested.")
})
app.listen(3000);


