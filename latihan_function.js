var http = require('http');

// function panggilAku() {
// 	var hasil = "Aku adalah murid";
// 	return hasil;
// }

// function hitung(angka1,angka2) {
// 	var hasil = angka1 * angka2;
// 	var result = `${ angka1 } + ${ angka2 } = ${ hasil }`;
// 	return result;
// }

const hitung = (angka1,angka2) => {
	let hasil = angka1 *angka2;
	let result = `${angka1} + ${angka2} = ${hasil}`;
	return result;
}

// const hitung = (angka1,angka2) => angka1*angka2;
// const hitung = angka => angka *angka

var server = http.createServer(function(req,res){
	var nama = "babastudio";
	// res.end(panggilAku());
	res.end(hitung(5,4));
})

server.listen(8000);

console.log("server berjalan pada url http://localhost:8000");