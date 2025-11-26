//Impelementasi interface pada JS merupakan sebauh object
//sehingga jika di compile dari TS ke JS akan mengahasilkan sebauh object
//sama halnya di javascript kita bisa menambahkan function sebagai attribute dari sebuah object
//Implementasi dari objectnya harus punya sebuah function/method

export interface Person{
    name :string;
    //format
    //functionName(argument):returnType
    sayHello(name:string):string;
}
//sehingga apabila membuat object dari interface tersebut 
//harus ada attribute name dan function sayHello didalamnya

//example
