// Penulisan variable dalam TypeScript
// const namaVariable : tipedata = value
// apabila tidak ada tipe data maka akan menganggap tipe data dari valuenya

//Tipe Data Primitif
const name: string = "Ten";
const age: number = 20;
const isMarried: boolean = false;

//Tipe Data array style 1
const arrStr: Array<string> = ["a", "b", "c"];
const arrNum: Array<number> = [1, 2, 3];

//Tipe Data array style 2
const arrStr2: string[] = ["a", "b", "c"];
const arrNum2: number[] = [1, 2, 3];

//Tipe Data Readonly Array
const arrStr3: readonly string[] = ["a", "b", "c"];
const arrNum3: readonly number[] = [1, 2, 3];

//Tipe Data Readonly array
const arrStr4: ReadonlyArray<string> = ["a", "b", "c"];
const arrNum4: ReadonlyArray<number> = [1, 2, 3];

//Tipe Data Tuple
//Tipe data tuple tidak dapat diubah  
//Length, tipe data di index sudah ditentukan
const tuple: readonly [string, number] = ["Ten", 20];

//Tipe data Any
//Tipe data Any tidak akan dicek tipe data apapun terhadap value di dalamnya
//Tidak direkomendasikan terlalu sering menggunakan datatype "any"
let anyData: any = "Ten";
anyData = 20;

//Any digunakan biasanya jika menggunakan library dari dev lainnya
//Karena tipe data dari library tersebut tidak diketahui
//atau attribute tidak pasti

