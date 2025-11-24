import type { Seller } from "../src/interface";

describe("Interface", function () {
    it("should support Interface", function () {
        const seller: Seller = {
            id: 1,
            name: "Ten",
            address: "Jakarta"
        }

        console.log(seller);
    });
})