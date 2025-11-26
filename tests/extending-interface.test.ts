import type { Employee, Manager } from "../src/extending-interface";
describe('Extending Interface', () => {
    it('should support extending interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Ten",
            division: "IT"
        }

        console.log(employee);

        const manager: Manager = {
            id: "2",
            name: "Tenten",
            division: "IT",
            numberOfEmployees: 10
        }

        console.log(employee);
    });
});
