import { sayHello, printHello } from "../src/function";

describe('function', () => {
    it('should support function', () => {
        let name : string = sayHello("Ten");
        console.log(name);
        
        expect(sayHello("Ten")).toBe("Hello Ten");

        printHello("Ten");
    })
});
