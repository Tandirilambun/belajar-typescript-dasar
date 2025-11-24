//interface dapat digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array/object

//dalam bentuk array
export interface StringArray {
    [index: number]: string
    //format
    //[prop:type]: {type} value dari arraynya
}

//dalam bentuk object
export interface StringObject {
    [key: string]: string
    //format
    //[prop:type]: {type} value dari objectnya
}