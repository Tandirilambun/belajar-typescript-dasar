//Alias digunakan untuk membuat tipe data baru
//Alias dapat digunakan untuk struktur tipe data dari objectnya

export type Category = {
    id: string;
    name: string;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
}

//Alias Type dapat digunakan untuk membuat Union Type

export type ID = string | number;

export type Category2 = {
    id: ID;
    name: string;
}

export type Product2 = {
    id: ID;
    name: string;
    price: number;
    category: Category2;
}