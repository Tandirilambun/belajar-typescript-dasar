//Saat menggunakan "?" pada variable atau parameter, secara otomatis kita bisa mengirim data "undefined",
//namun ada kasus yang membutuhkan data null

export function sayHello(name?: string | null) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log("Hello");
    }
}

//null dianggap suatu tipe data yang berbeda 