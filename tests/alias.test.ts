import type { Category, Category2, Product, Product2 } from "../src/alias-type";

describe("Alias Type", function () {
    it("should support alias type", function () {
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

        // product.description = "Handphone Xiaomi";
        //Tidak dapat dilakukan karena properti "description" tidak ada pada type "Product"

        console.log(product);
    
        const category2 : Category2 = {
            id : "2",
            name : "Laptop"
        }
        const category3 : Category2 = {
            id : 3,
            name : "Tablet"
        }
        
        const product2 : Product2 = {
            id: "2",
            name: "Samsung",
            price: 100000,
            category: category2
        }
        const product3 : Product2 = {
            id: 3,
            name: "Apple",
            price: 100000,
            category: category3
        }
    });
})