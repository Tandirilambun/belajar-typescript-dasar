import type { HasId, HasName, Domain } from "../src/intersection-type";
describe('Intersection Type', () => {
    it('should support intersection type', () => {
        //Bisa saja menggunakan
        interface Person extends HasName, HasId {
            age: number;
        }

        const person: Person = {
            name: "Ten",
            id: "1",
            age: 20
        }
        //tapi jika ingin membuat type tanpa menambahkan attribute lagi
        //daripada membuat interface lagi, lebih mudah untuk menggunakan intersection type

        //tapi jika ingin menggunakan intersection type
        const domain: Domain = {
            id: "1",
            name: "Ten"
        }
    });

});
