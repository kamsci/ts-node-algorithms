import reverseOrRotate from '../reverseOrRotate';
import { expect } from 'chai';
import 'mocha';


describe('reverseOrRotate function', () => {
    it('should return an empty string when the size is 0', () => {
        const result = reverseOrRotate('2471', 0);

        expect(result).to.equal('');
    });
});