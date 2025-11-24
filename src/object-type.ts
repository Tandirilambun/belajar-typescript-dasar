//Dapat membuat tipe data JS Object secara langsung dengan mendefinisikan detail type nya ketika membuat variablenya
const person: { id: number, name: string } = {
    id: 1,
    name: "Ten"
}
//Artinya variable person dengan properti id memiliki tipe data number dan
//properti name memiliki tipe data string

// person.isMarried = true;
// Tidak dapat dilakukan karena properti "isMarried" tidak ada pada deklarasi properti 