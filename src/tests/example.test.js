import { sum } from "../scripts/Example";
import {fizzBuzz} from "../scripts/FizzBuzz"
describe('Just an example to testing jest installation', () => {
    test('should be two', () => {
        expect(sum(1,1)).toBe(2);
    });
    test("Return Fizz if divisible by 3", () => {
        let result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    });
    test("Return Buzz if divisible by 5", () => {
        let result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    });
    test ("Return FizzBuzz if divisible by 3 and 5", () => {
        let result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });

 test("Return Fizz if divisible by 3 or contains 3", () => {
        let result = fizzBuzz(37);
        expect(result).toBe("Fizz");
    });
    test("Return Buzz if divisible by 5 or contains 5", () => {
        let result = fizzBuzz(59);
        expect(result).toBe("Buzz");
    });
});