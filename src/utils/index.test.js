import { maxNumber } from './index.js';

describe('maxNumber', () => {
    describe('Given an empty array', () => {
        it('returns 0', () => {
            expect(maxNumber([])).toEqual(0);
        })
    })

    describe('Given an array of numbers', () => {
        it('Returns the max number', () => {
            expect(maxNumber([1, 2, 3])).toEqual(3);
        })
    })
});