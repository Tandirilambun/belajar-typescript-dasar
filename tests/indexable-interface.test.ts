import type { StringArray, StringObject } from "../src/indexable-interface";

describe('Indexable Interface', () => {
    it('should support indexable interface with array', () => {
        //Contoh variable array dengan tipe StringArray(interface)
        const array: StringArray = ['a', 'b', 'c'];

        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);
    });

    it('should support indexable interface with object', () => {
        //Contoh variable object dengan tipe StringObject(interface)
        const object: StringObject = {
            name: 'Ten',
            address: 'Jakarta'
        }

        console.log(object["name"]);
        console.log(object["address"]);

        expect(object["name"]).toBe('Ten');
        expect(object["address"]).toBe('Ten');
    });
});
