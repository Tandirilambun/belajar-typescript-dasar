import { CustomerType, type Customer } from "../src/enum-type";

describe("Enum Type", function () {
    it("should support Enum type", function () {
        const customer : Customer = {
            id: 1,
            name : "Ten",
            type : CustomerType.REGULAR
        }

        console.log(customer);
    });
})