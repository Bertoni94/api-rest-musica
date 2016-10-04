var express = require('express');
var router = express.Router();
var md5 = require('md5');

var Modelo = require('../models/modelo');

   
   

router.get('/',function(reg,res,next){
	Modelo.find({},function(err1,data){
		res.json(data); 
	});
});

router.post('/',function(req,res,next){
	Modelo.create(req.body,function(err2,data){
		var objeto = req.body;
		//var password = req.body;
		

		objeto.name = String(req.body.name);
		objeto.password = String(req.body.password);
		objeto.nickname = String(req.body.nickname);
		objeto.song = String(req.body.song);

		
		res.json(data); 
	});
});


router.put('/:id',function(req,res,next){
	var id = req.params.id;
	Modelo.findById({_id:id},function(err,data){
		if (err) 
			console.log(err);
		data.password = req.body.password;
		
		Modelo.update(id,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});

/*router.put('/:name',function(req,res,next){
	var name = req.params.id;
	Modelo.findOne({name:name},function(err,data){
		if (err) 
			console.log(err);
		data.song = req.body.song;
		
		Modelo.update(name,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});*/



router.delete('/',function(req,res,next){
	Modelo.remove(req.body,function(err2,data){
		var objeto = req.body;
		//var password = req.body;
		

		objeto.name = String(req.body.name);
		

		
		res.json(data); 
	});
});


module.exports = router;