// Raziur Rahman, 2017

const express = require("express")
const bodyPaser = require("body-parser")
const app = express()

app.set('port', (process.env.PORT || 3000))

app.use(bodyPaser.urlencoded({extended: true}))

app.get('/', function(req, res){
	res.sendFile(__dirname + '/frontend/index.html')
})

app.post('/events', function(req, res){
	console.log(req.body)
})

app.listen(app.get('port'), function(){
	console.log("Listening on port: " + app.get('port'))
})