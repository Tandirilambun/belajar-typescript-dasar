//Properties tidak dapat diubah
//Dengan menambahkan readonly pada attribute propertinya

export interface Product {
    readonly id: string;
    name: string;
    price: number;
}

export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib: string; //properties ini menjadi readonly
    readonly npwp: string; // properties ini menjadi readonly
}

//bisa optional
//properties readonly biasanya tidak optional dan memiliki nilai awal