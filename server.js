var express 	= require('express')
var app 		= express();
var mongojs 	= require('mongojs')
var db			= mongojs('curitibaVegana',['contactList'])
var bodyParser 	= require('body-parser')

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contato',function(req, res) {
	console.log('Get Request received!')

	db.on('ready',function() {
    	console.log('database connected');
	});

	db.curitibaVegana.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});

	app.post('/contato', function(req, res) {
		console.log(req.body);
		db.curitibaVegana.insert(req.body, function(err, doc) {
			res.json(doc);
		})
	});

	app.delete('/contato/:id', function(req, res) {
		var id = req.params.id;
		db.curitibaVegana.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
			res.json(doc);
		})
	});

	app.get('/contato/:id', function(req, res) {
		var id = req.params.id;
		console.log(id);
		db.curitibaVegana.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
			res.json(doc);
		})
	});

	app.put('/contato/:id', function(req, res) {
		var id = req.params.id;
		console.log(req.body.name);
		db.curitibaVegana.findAndModify({query: {_id: mongojs.ObjectId(id)},
			update: {$set: {name: req.body.name, email: req.body.email, telefone: req.body.telefone}},
			new: true}, function (err, doc) {
				res.json(doc);
			});
	});

});

app.listen(3000);
console.log("Server running on port 3000");
