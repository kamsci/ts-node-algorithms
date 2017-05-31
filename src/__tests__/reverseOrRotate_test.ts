import reverseOrRotate from '../reverseOrRotate';
import { expect } from 'chai';
import 'mocha';


describe('reverseOrRotate function', () => {
	it('should return an empty string when the size is 0', () => {
		const result = reverseOrRotate('2471', 0);

		expect(result).to.equal('');
	});

	it('should return an empty string when the size is greater than the string length', () => {
		const result = reverseOrRotate('2471', 7);

		expect(result).to.equal('');
	});

	it('should return an empty string when the string input is empty', () => {
		const result = reverseOrRotate('', 3);

		expect(result).to.equal('');
	});

	it('should return all sections reversed if all cubed sums are divisible by 2', () => {
		const result = reverseOrRotate('247153', 2);

		expect(result).to.equal('421735');
	});

	it('should return all sections rotated to the left by one position if all cubed sums are NOT divisible by 2', () => {
		const result = reverseOrRotate('272715333', 3);

		expect(result).to.equal('722157333');
	});

	it('should return sections rotated OR reversed depending on if all cubed sums are divisible by 2', () => {
		const result = reverseOrRotate('123456987654', 5);

		expect(result).to.equal('2345167896');
	});

	it('should return the input string if size is 1', () => {
		const resultReverse = reverseOrRotate('247153', 1);
		const resultRotate = reverseOrRotate('272715333', 1)

		expect(resultReverse).to.equal('247153');
		expect(resultRotate).to.equal('272715333');
	});

	it('should not return any extra digits that do not complete a section of the given size', () => {
		const resultReverse = reverseOrRotate('2471536', 2);
		const resultRotate = reverseOrRotate('27271533311', 3)

		expect(resultReverse).to.equal('421735');
		expect(resultRotate).to.equal('722157333');
	});

	it('should return answer when size is equal to string length', () => {
		const resultReverse = reverseOrRotate('69876', 5);
		const resultRotate = reverseOrRotate('12345', 5)

		expect(resultReverse).to.equal('67896');
		expect(resultRotate).to.equal('23451');
	});
});