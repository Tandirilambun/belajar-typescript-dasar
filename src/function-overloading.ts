//Overloading function merupakan function yang memiliki nama yang sama tapi berbeda parameter

//dapat di overloading dengan cara
//Deklarasi overloading functionnya
export function callMe(value: number): number;
export function callMe(value : string): string;

// Implementasi function yang akan menangani semua kasus
export function callMe(value: any) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
}