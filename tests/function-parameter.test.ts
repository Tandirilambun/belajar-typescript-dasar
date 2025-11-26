import { sayHello, sayHello2, sum } from "../src/function-parameter";

describe('Function Parameter', () => {
    it('should support function parameter', () => {
        expect(sayHello("Ten")).toBe("Hello Ten");

        expect(sayHello()).toBe("Hello Guest");
    });

    it('should support rest parameter', () => {
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        expect(sayHello2("Ten")).toBe("Hello Ten");
        expect(sayHello2("Ten", "Budi")).toBe("Hello Ten Budi");
    });
});
