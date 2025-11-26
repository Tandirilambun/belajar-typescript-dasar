//di TypeScript, setiap jenis data secara ideal memiliki deklarasi tipe datanya
//conoth saat ingin menggunakan Object di JS, isi atrribute idealnya memiliki ketentuan namun
//di JavaScript tidak perlu seperti itu

//pada TypeScript dipat membuat tipe data bebas dengan menggunakan any
//Tipde data any menjadikan TS tidak melakukan pengecekan terhadap akses data/attribute tersebut

describe("Data Type Any", function () {
    it("should support any", function () {
        let anyData: any = "Ten";
        anyData = 10;

        let anyObject: any = {
            id: 1,
            name: "Ten",
            age: 20,
            isMarried: false
        };

        anyObject.age = 30;
        anyObject.isMarried = true;
        anyObject.address = "Jakarta";

        console.log(anyData);
        console.log(anyObject);
    });
});