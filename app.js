var http = require('http');

let data_array = [10,20,30];
let data_object = {
	'nama' : 'Nur',
	'kursus' : 'Nodejs',
	'rating' : 5
}

var server = http.createServer(function (req, res){
	res.end("Selamat datang di Nodejs")
});

server.listen(8000);
console.log("server berjalan pada url http://localhost:8000")
console.log(data_array[0])
console.log(data_object.nama)

let JSON_data = JSON.stringify(data_object)