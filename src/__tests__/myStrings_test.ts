import MyStrings from '../MyStrings';
import { expect } from 'chai';
import 'mocha';


describe('MyStrings class', () => {
	describe('static "greet" function', () => {
		it('should print Hi + the input', () => {
			const result = MyStrings.greet("Apples");

			expect(result).to.equal('Hi Apples');
		});
	});

	describe('static "reverseString" function', () => {
		it('should return empty if the input is empty', () => {
			const result = MyStrings.reverseString('');

			expect(result).to.equal('');
		});

		it('should include spaces', () => {
			const result = MyStrings.reverseString(' this is a string space  .');

			expect(result).to.equal('.  ecaps gnirts a si siht ');
		});

		it('should reverse the input', () => {
			const result = MyStrings.reverseString('Apples');

			expect(result).to.equal('selppA');
		});
	});

	describe('static "isPalindrome" function', () => {
		it('should return false if the input is empty', () => {
			const result = MyStrings.isPalindrome('');

			expect(result).to.be.false;
		});

		it('should return true if the input is a palindrome', () => {
			const result = MyStrings.isPalindrome('racecar');

			expect(result).to.be.true;
		});

		it('should return true if the input is a palindrome with upper and lower case letters', () => {
			const result = MyStrings.isPalindrome('RaceCar');

			expect(result).to.be.true;
		});

		it('should return true if the palindrome is alphanumeric', () => {
			const result = MyStrings.isPalindrome('1 eye 4 eye 1');

			expect(result).to.be.true;
		});

		it('should return remove all alphanumeric, punctuation, or symbols', () => {
			const result = MyStrings.isPalindrome('A man, a plan*, a_canal. Panama!');

			expect(result).to.be.true;
		});

		it('should areturn false if the input is not a palindrome', () => {
			const result = MyStrings.isPalindrome('Apples');

			expect(result).to.be.false;
		});
	});
});