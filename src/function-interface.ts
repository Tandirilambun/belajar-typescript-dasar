//Bisa membuat interface menjadi representasi nilai dari suatu variable/function
//Sehingga ketika membuat variable yang berisi function, dapat dengan mudah menggunakan interface tersebut

interface AddFunction {
    (value1: number, value2: number): number
    //format : 
    //(nama & type parameter): return type
}

//Contoh
//variable "add" memiliki type interface AddFunction
//add ini harus memiliki 2 parameter value1 dan value2
//dengan return dari add ini harus bertype number
export const add: AddFunction = function (value1: number, value2: number): number {
    return value1 + value2;
}