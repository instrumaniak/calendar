// Raziur Rahman, 2017

const express = require("express")
const bodyPaser = require("body-parser")
const app = express()

app.set('port', (process.env.PORT || 3000))

app.use(bodyPaser.urlencoded({extended: true}))
app.use('/bower_components', express.static('bower_components'))
app.use(express.static('demo'))


app.get('/', function(req, res){
	res.sendFile(__dirname + '/demo/index.html')
})

app.post('/events', function(req, res){
	console.log(req.body)
})

app.listen(app.get('port'), function(){
	console.log("Listening on port: " + app.get('port'))
})