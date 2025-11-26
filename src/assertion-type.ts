//pada suatu situasi kita tahu tipe data apa yang akan kita gunakan
//tapi dari TS tidak tahu tipe data tersebut
//sehingga di TS dapat dilakukan konversi tipe data yang kita mau menggunakan "as"

import type { Person } from "./function-inside-interface";

const person: any = {
    name: "Ten",
    age: 20
}

const person2: Person = person as Person;

//secara default TS tidak menghiraukan isi dalam person ini sama dengan tipe data/interface person sebelumnya
//Harus hati-hati, dipastikan datanya sebenarnya tidak ada

// tidak bisa, karena pada tipe data/interface Person tidak ada attribute age
// person2.age = 30;

//sedangkan akan menghasilkan error karena person2 sudah di konversi ke variable person
//yang mana person ini tidak memiliki attribute sayHello
person2.sayHello("Ten");