/**
 * Created by kobeneuckermans on 14/07/16.
 */

var express = require('express');
var app = express();
var port = 5000;

app.set('port',(process.env.PORT || port));

// setting up the middleware
app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + 'views'));

// views is directory for all the template files
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.get('/',function (req,res) {
	res.send('hello bahrain');
});

app.get('/books',function (req,res) {
	res.send('hello books');
});

app.listen(app.get('port'),function (err) {
	console.log('Pilotnote app is running on port', app.get('port'));
});

//TODO: check express calls for validity

