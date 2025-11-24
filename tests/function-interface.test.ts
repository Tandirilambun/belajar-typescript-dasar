import { add } from "../src/function-interface";
describe('Function Interface', () => {
    it('should support function interface', () => {
        //Pemanggilan function add dengan nilai parameter value1 = 1 dan value2 = 2
        const result = add(1, 2);

        console.log(result);
    });
});
