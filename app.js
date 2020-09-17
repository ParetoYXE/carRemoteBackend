var express = require('express');
const bodyParser = require('body-parser')
var app = express();


const MongoClient = require('mongodb').MongoClient


conString = "mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())




app.get('/', function(req, res){
	   response = testFunction()
	   res.send(response);
	});

app.get('/car',function(req,res){
	
	res.send("Car data requested.")
})
app.listen(3000);





function testFunction(){
	MongoClient.connect(conString,{ useUnifiedTopology: true }).then(client =>{

    const db = client.db('CAR')
    const quotesCollection = db.collection('DASH')
    data = []
    //Load Initial Database
    const cursor = db.collection('DASH').find().toArray()
		.then(results =>{
			data = results
		}).catch(error => console.error(error))



		return data


    

	})

}
