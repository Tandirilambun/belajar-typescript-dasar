describe("Object Type", function () {
    it("should support object", function () {
        const person: { id: number, name: string } = {
            id: 1,
            name: "Ten"
        }

        console.log(person);

        person.id = 2;
        person.name = "Tenten";

        console.log(person);
    });
})