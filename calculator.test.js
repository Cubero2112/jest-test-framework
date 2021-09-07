const mathOperations = require('./calculator');


describe("Calculator tests", () => {
    test('La suma 1 + 2 deberia retornar 3', () => {
        // arrange and act
        var result = mathOperations.sum(1, 2)

        // assert
        expect(result).toBe(3);
    });
    test("La extraccion de 2 a 10 deberia retornar 8", () => {
        // arrange and act
        var result = mathOperations.diff(10, 2)

        // assert
        expect(result).toBe(8);
    });
    test("La multiplicacion 2 con 8 deberia retornar 16", () => {
        // arrange and act
        var result = mathOperations.product(2, 8)

        // assert
        expect(result).toBe(16);
    });
})


