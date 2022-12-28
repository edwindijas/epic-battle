import { uniPos } from "./main";

describe('UniPos', () => {
    it ('Returns the correct style', () => {
        const expected = 'top: 1em; right: 1em; bottom: 1em; left: 1em;';
        expect(uniPos(1).replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
    })

    it ('Correctly ommits items', () => {
        const expected = 'top: 1em; right: 1em; left: 1em;';
        expect(uniPos(1, ['bottom']).replace(/\s/g, '')).toEqual(expected.replace(/\s/g, ''));
    })

})