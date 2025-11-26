//Cara pembuatan function di TypeScript sama dengan JavaScript
//Bedanya jika memiliki parameter, maka harus ditentukan tipe data dari parameternya
//Begitu pula dengan return typenya harus didefinisikan
//Apabila itu void function maka pembuatannya sama dengan JavaScript pada umumnya

export function sayHello(name: string): string {
    return `Hello ${name}`;
}

export function printHello(name: string): void {
    console.log(`Hello ${name}`);
}



