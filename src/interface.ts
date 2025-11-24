//Interface merupakan cara lain untuk mendeklarasikan tipe data selain Type alias
//Digunakan pada tipe data yang kompleks sehingga lebih dipilih dibanding Type alias

export interface Seller {
    id: number;
    name: string;
    address?: string
}

//Pembuatannya sama seperti Type alias hanya saja menggunakan keyword "interface"
//Jika di compile menjadi JS, akan menjadi object kosong