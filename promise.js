// Callback
// let nilai = 5;
// function kuadrat(nilai, ceknilai) {
// 	let hasil = nilai * nilai;
// 	let error = null;

// 	if (hasil === 0)
// 		error = 'Error'
// 	ceknilai(error,hasil);
// }

// let ceknilai = function(error,hasil){
// 	if(error)
// 		console.error(error);
// 	else
// 		console.log(hasil);
// }

// kuadrat(nilai, ceknilai);

// Promise
// let kuadrat = function (nilai, ceknilai) {
// 	let hasil = nilai * nilai;
// 	let error = null;

// 	if (hasil === 0)
// 		error = 'error';
// 	ceknilai(error, hasil);
// }

// const {promisify} = require('util');
// const kuadratPromise = promisify(kuadrat);

// let nilai = 5;

// kuadratPromise(nilai)
// 	.then(hasil => console.log(hasil))
// 	.catch(error => console.error(error));

// Multiple Promise
let hasil = 0;
let error = null;
const promiseA = new Promise((resolve, reject) => {
	hasil = 1+1;
	if(hasil == 0) reject("error")
		resolve(hasil)
});
const promiseB = new Promise((resolve, reject) => {
	hasil = 2+2;
	if(hasil == 0) reject("error")
		resolve(hasil)
});
const promiseFail = new Promise((resolve,reject) => {
	hasil = 3*3;
	if(hasil == 0) reject("error")
		resolve(hasil)
});

promiseA
.then(resA => {
	console.log('hasil A: ', resA);
	return promiseB;
})
.then(resB => {
	console.log('hasil B: ', resB);
	return promiseFail;
})
.catch(err => console.log('error: ', err));