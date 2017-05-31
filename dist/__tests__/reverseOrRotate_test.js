"use strict";
const reverseOrRotate_1 = require('../reverseOrRotate');
const chai_1 = require('chai');
require('mocha');
describe('reverseOrRotate function', () => {
    it('should return an empty string when the size is 0', () => {
        const result = reverseOrRotate_1.default('2471', 0);
        chai_1.expect(result).to.equal('');
    });
});
