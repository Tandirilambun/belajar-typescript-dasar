import { callMe } from "../src/function-overloading";
describe('Function Overloading', () => {
    it('should support function overloading', () => {
        expect(callMe(2)).toBe(2);
        expect(callMe("Ten")).toBe("Ten");
    });
});
