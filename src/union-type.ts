//Union Type dapat membuat variable berubah bentuk tipe data
//Sesuai dengan tipe data yang ditentukan pada Union Type nya

let name: string | number = "Ten"; //Value variable dapat berubah bentuk ke string ataupun number
let age: string | number  = 20; //Value variable dapat berubah bentuk ke string ataupun number
let sample : string | number | boolean = "Test";//Value variable dapat berubah bentuk ke string, number atau boolean

//berhati hati untuk memanggil method terhadap variable tersebut
//di karenakan tipe datanya bisa berubah
//ada baiknya di cek terlebih dahulu tipe datanya menggunakan "typeof"

console.log(typeof name);
console.log(typeof age);
console.log(typeof sample);