//Enum adalah tipe data yang nilainya sudah pasti
//Tipe data ini dikonversi menjadi string di JS, namun bisa juga menjadi number

export enum CustomerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}

//Cara akses/menggunakan enum type
// {namaEnumType}.{isiEnum}
// Contoh : CustomerType.REGULAR

//ketika di compile type menjadi number
//defaultnya adalah number
//tidak direkomendasikan menggunakan number karena bisa mengakibatkan bug (tidak konsisten untuk nilainya)

//Solusi tambahkan nilai real dari enumnya agar data tetap konsisiten

// enum CustomerType {
//     REGULAR = 1,
//     GOLD = 2,
//     PLATINUM = 3
// }

// enum CustomerType {
//     REGULAR = "REGULAR",
//     GOLD = "GOLD",
//     PLATINUM = "PLATINUM"
// }