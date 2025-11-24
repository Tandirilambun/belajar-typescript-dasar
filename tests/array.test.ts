describe("Array", function () {
    it("should same with javascript", function () {

        const names: string[] = ["a", "b", "c"];
        const values: number[] = [1, 2, 3];

        const names2: Array<string> = ["a", "b", "c"];
        const values2: Array<number> = [1, 2, 3];

        console.log(names);
        console.log(values);
        console.log(names2);
        console.log(values2);
    });

    it("should support readonly array", function () {
        const arrStr3: readonly string[] = ["a", "b", "c"];
        const arrNum3: readonly number[] = [1, 2, 3];

        const arrStr4: ReadonlyArray<string> = ["a", "b", "c"];
        const arrNum4: ReadonlyArray<number> = [1, 2, 3];

        console.log(arrStr3);
        console.log(arrNum3);
        console.log(arrStr4);
        console.log(arrNum4);
    });

    it("should support tuple", function () {
        const person: readonly [string, string, number] = ["Ten", "Ten", 20];

        console.log(person);
    });
})