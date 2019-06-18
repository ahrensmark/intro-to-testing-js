"use strict";
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
// exercise #10
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when executed', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when executed', function () {
        expect(typeof isFive(5)).toBe("boolean");
    });
    it('should return false when executed', function () {
        expect(typeof isFive("5")).toBe("boolean");
    });
});

// exercise #11
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed a number 2', function () {
        expect(isEven(2)).toBe(true);
    });
});
// describe("isBoolean", function() {
//     it('should be a defined function', function() {
//         expect(typeof isBoolean).toBe('function');
//     });
//     it('should return a boolean value', function() {
//         expect(typeof isBoolean(true)).toBe('boolean');
//         expect(typeof isBoolean("Bob")).toBe('boolean');
//     });
//     it('should return true when passed the boolean true, because true is a boolean value.', function() {
//         expect(isBoolean(true)).toBe(true);
//     });
//     it('should return true when passed the boolean false, because false is a boolean value.', function() {
//         expect(isBoolean(false)).toBe(true)
//     });
//     it('should return true when passed the boolean ' + randomBoolean, function() {
//         expect(isBoolean(randomBoolean)).toBe(true);
//     });
//     it('should return false when passed the number ' + randomPositiveNumber, function() {
//         expect(isBoolean(randomPositiveNumber)).toBe(false);
//     });
//     it('should return false when passed the number ' + randomNegativeNumber, function() {
//         expect(isBoolean(randomNegativeNumber)).toBe(false);
//     });
//     it('should return false when passed the number 0', function() {
//         expect(isBoolean(0)).toBe(false);
//     });
//     it('should return false when passed no inputs (undefined) ', function() {
//         expect(isBoolean()).toBe(false);
//     });
//     it('should return false when passed null', function() {
//         expect(isBoolean(null)).toBe(false);
//     });
//     it('should return false when passed an array', function() {
//         expect(isBoolean(exampleArray)).toBe(false);
//     });
//     it('should return false when passed a string', function() {
//         expect(isBoolean(exampleString)).toBe(false);
//     });
//     it('should return false when passed a string', function() {
//         expect(isBoolean(randomString)).toBe(false);
//     });
//     it('should return false when passed an object', function() {
//         expect(isBoolean(exampleObject)).toBe(false);
//     });
// });