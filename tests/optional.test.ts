import type { Category, Product } from "../src/optional-prop";

describe("Alias Type", function () {
    it("should support optional properties", function () {
        const category: Category = {
            id: "1",
            name: "Handphone"
        };

        const product: Product = {
            id: "1",
            name: "Xiaomi",
            price: 100000,
            category: category
        }
    });
})