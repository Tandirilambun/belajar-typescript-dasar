import { sayHello, toUpper } from "../src/function-as-parameter";

describe('Function As Parameter', () => {
    it('should support function as parameter', () => {
        expect(sayHello("Ten", toUpper)).toBe("Hello TEN");
    });

    it('should support anonymous function as parameter', () => {

        //via anonymouse function tanpa membuat function toUpper dulu
        //sehingga dapat langsung memasukkan anonymous function ke dalam parameter
        expect(sayHello("Tenten", function (name: string): string {
            return name.toUpperCase();
        })).toBe("Hello TENTEN");

        //via arrow function
        expect(sayHello("Enma", (name: string): string => name.toUpperCase())).toBe("Hello ENMA");
    });
});
