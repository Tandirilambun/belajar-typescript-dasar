import type { Person } from "../src/function-inside-interface";
import { sayHello } from "../src/null-undefined";
describe('Function Inside Interface', () => {
    it('should support function inside interface', () => {
        const person : Person = {
            name : "Ten",
            sayHello : (name : string) : string => {
                return `Hello ${name}`
            }
        }

        console.log(sayHello);
    });
    
});
