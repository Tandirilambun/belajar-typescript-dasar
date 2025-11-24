describe("Union Type", function () {
    it("should support Union Type", function () {
        let sample: string | number | boolean = "Test";
        console.log(sample);

        sample = 10;
        console.log(sample);

        sample = true;
        console.log(sample);
    });

    it("should support typeof operator", function () {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }

        expect(process("ten")).toBe("TEN");
        expect(process(10)).toBe(12);
        expect(process(true)).toBe(false);
    });
});