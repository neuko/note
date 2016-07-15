/**
 * Created by kobeneuckermans on 14/07/16.
 */

var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(3000,function () {
	console.log('express is running');
});
