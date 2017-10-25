// Raziur Rahman, 2017

const express = require("express")
const bodyPaser = require("body-parser")
const app = express()

app.use(bodyPaser.urlencoded({extended: true}))

app.get('/', function(req, res){
	res.sendFile(__dirname + '/frontend/index.html')
})

app.post('/events', function(req, res){
	console.log(req.body)
})

app.listen(3000, function(){
	console.log("Listening on port 3000...")
})