//Intersection merupakan membuat tipe data dengan menggabungkan dua tipe data yang lain
//Hal ini cocok digunakan ketika tidak bisa melakukan extends pada interface
//dibuat dengan menggunakan kata kunci "&"

export interface HasName {
    name: string;
}

export interface HasId {
    id: string;
}

//bagaimana membuat tipe data tapi tipe data ini adalah gabungan name dan id

export type Domain = HasId & HasName;