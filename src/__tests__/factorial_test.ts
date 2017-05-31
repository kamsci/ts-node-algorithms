import factorial from '../factorial';
import { expect } from 'chai';
import 'mocha';


describe('factorial function', () => {
	it('should return 1 if number is 0', () => {
		const result = factorial(0);

		expect(result).to.equal(1);
	});
});
