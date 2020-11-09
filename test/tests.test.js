const { validateOrder } = require("../task/atmRefill");

describe("validateOrder", () => {
    test("returns an error if there is invalid number of bank notes or cassettes", () => {

        const custOrder = [
            ['cassettes', 5],
            ['5', 10000],
            ['10', 10000],
            ['20', 10000],
            ['50', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(['error', 'Invalid Cassettes Number or Invalid bank note.']);
    });

    test("returns an error if there is invalid number of bank notes or cassettes", () => {

        const custOrder = [
            ['cassettes', 4],
            ['3', 10000],
            ['10', 10000],
            ['20', 10000],
            ['50', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(
            [
                'error',
                'Invalid Cassettes Number or Invalid bank note.']);
    });

    test("returns an error if there is invalid number of bank notes or cassettes", () => {

        const custOrder = [
            ['cassettes', 1],
            ['3', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(['error', 'Invalid Cassettes Number or Invalid bank note.']);
    });

    test("returns true if there is sufficient number of bank notes to fulfill the request", () => {

        const custOrder = [
            ['cassettes', 1],
            ['5', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(['valid', 'Order valid, sent for packing']);
    });

    test("returns true if there is sufficient number of bank notes to fulfill the request", () => {

        const custOrder = [
            ['cassettes', 2],
            ['5', 10000],
            ['2', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(['error', 'Invalid Cassettes Number or Invalid bank note.']);
    });

    test("returns true if there is sufficient number of bank notes to fulfill the request", () => {

        const custOrder = [
            ['cassettes', 0],
            ['5', 10000],
            ['2', 10000]
        ];
        expect(validateOrder(custOrder)).toEqual(['error', 'Invalid Cassettes Number or Invalid bank note.']);
    });
});