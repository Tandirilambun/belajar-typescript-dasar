//Interface bisa dilanjutkan ke interface lain
//yang secara otomatis attributenya akan dimiliki juga oleh interface baru
//cocok untuk tipe data kompleks

export interface Employee {
    id: string;
    name: string;
    division: string;
}

//otomatis Manager ini memiliki semua attribute dari interface Employee
export interface Manager extends Employee {
    numberOfEmployees: number;
}