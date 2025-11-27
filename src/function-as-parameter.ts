//Parameter yang berupa function, perlu kita beri tahu bahwa parameter tersebut adalah function
//Bisa menggunakan Function Interface, atau langsung dideklarasi di parameternya

export function sayHello(name: string, filter: (name: string) => string) {
    return `Hello ${filter(name)}`
}

export function toUpper(name: string): string {
    return name.toUpperCase();
}

//parameter "filter" tersebut merupakan sebuah function dengan nama "filter"
//dengan parameter name dan return type string
//sehingga untuk pemanggilan functionnya didalam function parentnya
//bisa langsung memanggil nama functionnya


//untuk alur pengeksekusiannya
//contoh : sayHello("Ten", toUpper)
// 1. Akan memanggil function sayHello dengan memasukkan "Ten", dan function toUpper
// 2. Ketika sudah masuk ke function sayHello, parameter name yang diisi dengan "Ten" akan dikirimkan ke function toTupper yang diwakili oleh parameter "filter" untuk dieksekusi
// 3. Akan memanggil function toUpper dan return nilainya
// 4. Kembali ke function sayHello dan return nilainya

//dalam satu kondisi kadang harus ribet untuk harus bikin functionnya dulu
//sehingga bisa langsung memasukkan anonymous function ke dalam parameternya

// sayHello("Ten", function (name:string):string {
//     return name.toUpperCase();
// })