var express = require('express')
var app 	= express();

app.use(express.static(__dirname + "/public"));

app.get('/contato',function(req, res){
	console.log('Get Request received!')

	person1 = {
		name: 'Nome 1',
		email: 'nome1@email.com',
		telefone: '(41) 9999-9999'
	};									
		
	person2 = {
		name: 'Nome 2',
		email: 'nome2@email.com',
		telefone: '(42) 9999-9999'
	};

	person3 = {
		name: 'Nome 3',
		email: 'nome3@email.com',
		telefone: '(43) 9999-9999'
	};

	person4 = {
		name: 'Nome 4',
		email: 'nome4@email.com',
		telefone: '(44) 9999-9999'
	};

	var contactList = [person1, person2, person3, person4];
	res.json(contactList);
});

app.listen(3000);
console.log("Server running on port 3000");
