//Optional properties untuk memberikan optional apakah mandatory atau tidak
//Dengan cara menambahkan "?" setelah tipe nama propertinya
export type ID = string | number;

export type Category = {
    id: ID;
    name: string;
    description? : string; // properti description menjadi optional
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description? : string;
}