import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
    it("should return hello Ten", function (): void {
        expect(sayHello("Ten")).toBe("Hello Ten");
    });
});
