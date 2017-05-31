"use strict";
const revrot_1 = require('../revrot');
const chai_1 = require('chai');
require('mocha');
describe('Revrot function', () => {
    it('should return an empty string when the size is 0', () => {
        const result = revrot_1.default('2471', 0);
        chai_1.expect(result).to.equal('');
    });
});
