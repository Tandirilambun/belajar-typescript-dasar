import { sayHello } from "../src/null-undefined";

describe("Null & Undefined ", function () {
    it("should support null and undefined", function () {
        sayHello("Ten");

        const name: string | undefined = undefined;

        sayHello(name);

        sayHello(null);
    });
})