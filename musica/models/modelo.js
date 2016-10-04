var mongoose = require('mongoose');
var schema = mongoose.Schema;
//var md5 = require('md5');






var Modelo = schema({
	name : String,	
	password: String,
	nickname: String,
	song: String

});

var Name = mongoose.model('Name',Modelo);
module.exports = Name;