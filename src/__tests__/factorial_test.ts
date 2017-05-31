import factorial from '../factorial';
import { expect } from 'chai';
import 'mocha';


describe('factorial function', () => {
	it('should return 1 if number is 0', () => {
		const result = factorial(0);

		expect(result).to.equal(1);
	});

	it('should return 1 if number is 1', () => {
		const result = factorial(1);

		expect(result).to.equal(1);
	});

	it('should return 2 if number is 2', () => {
		const result = factorial(2);

		expect(result).to.equal(2);
	});

	it('should return 6 if number is 3', () => {
		const result = factorial(3);

		expect(result).to.equal(6);
	});

	it('should return 120 if number is 5', () => {
		const result = factorial(5);

		expect(result).to.equal(120);
	});

	it('should return 3,628,800 if number is 10', () => {
		const result = factorial(10);

		expect(result).to.equal(3628800);
	});
});
