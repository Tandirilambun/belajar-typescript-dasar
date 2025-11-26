//function pada TS bisa memiliki banyak paramter, rest parameter(variable argument) sampai default falue
// Function yang perameternya bersifat nullable bisa menggunakan "?"

export function sayHello(name: string = "Guest"): string {
    return `Hello ${name}`
}

//Rest Paramter
export function sum(...values: number[]): number {
    let total: number = 0;
    for (const value of values) {
        total += value;
    }

    return total;
}

export function sayHello2(firstName: string, lastName?: string): string {
    if (lastName) {
        return `Hello ${firstName} ${lastName}`
    }
    else {
        return `Hello ${firstName}`
    }
}