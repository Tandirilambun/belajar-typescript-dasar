import type { Person } from "../src/function-inside-interface";

describe('Assertion Type', () => {
    it('should support assertion type', () => {
        const person: any = {
            name: "Ten",
            age: 20
        }

        const person2: Person = person as Person;

        console.log(person2);
    });

});
