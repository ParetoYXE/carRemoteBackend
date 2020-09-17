//Liam Iverson
//EVOLVO
//ExpressJS Server and Database Wrappe


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient
var db;
var quotesCollection;

//Database connection string

conString = "mongodb+srv://admin:evolvo@cluster0.kzsnt.mongodb.net/carData?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())



//Load and QueryDataBase
MongoClient.connect(conString,{ useUnifiedTopology: true }).then(client =>{

    db = client.db('CAR')
    quotesCollection = db.collection('DASH')

    //Load Initial Database
    const cursor = db.collection('DASH').find().toArray()
		.then(results =>{
			console.log(results)
		}).catch(error => console.error(error))



})

//Writes to DB everytime the form is updated
app.post('/car', (req, res) => {
	quotesCollection.insertOne(req.body)
	.then(result => {
		res.redirect('/')
	 })
	.catch(error => console.error(error))
	})

//Loads index and on refresh reads from the DB
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html'
		const cursor = db.collection('DASH').find().toArray()
		.then(results =>{
			console.log(results)
		}).catch(error => console.error(error))
	})


	//When the Server recieves data it writes to the db
	app.put('/car',(req,res)=>{
		quotesCollection.insertOne(req.body)
		res.sendFile(__dirname + '/index.html')
		const cursor = db.collection('DASH').find().toArray()
		.then(results =>{
			console.log(results)
		}).catch(error => console.error(error))
	})


	//Tell Server to begin listening on PORT 3000
	app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
	})


	app.use(express.static('public'))

