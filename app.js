var express = require('express');
const bodyParser = require('body-parser')
var app = express();


const MongoClient = require('mongodb').MongoClient


conString = "mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


MongoClient.connect(conString,{ useUnifiedTopology: true }).then(client =>{

    const db = client.db('CAR')
    const quotesCollection = db.collection('DASH')


	app.get('/', function(req, res){
		   res.send("Hello world!");
		});

	app.get('/car',function(req,res){
		
		res.send("Car data requested.")
	})


})


//Tell Server to begin listening on PORT 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use(express.static('public'))
