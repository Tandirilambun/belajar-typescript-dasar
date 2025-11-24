describe("Data Type Any", function () {
    it("should support any", function () {
        let anyData: any = "Ten";
        anyData = 10;

        let anyObject: any = {
            id: 1,
            name: "Ten",
            age: 20,
            isMarried: false
        };

        anyObject.age = 30;
        anyObject.isMarried = true;
        anyObject.address = "Jakarta";

        console.log(anyData);
        console.log(anyObject);
    });
});