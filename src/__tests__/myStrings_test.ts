import MyStrings from '../MyStrings';
import { expect } from 'chai';
import 'mocha';


describe('MyStrings class', () => {

	describe('static "greet" function', () => {
		it('should print Hi + the input', () => {
			const result = MyStrings.greet('Apples');

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

		it('should return false if the input is not a palindrome', () => {
			const result = MyStrings.isPalindrome('Apples');

			expect(result).to.be.false;
		});
	});


	describe('static "translateToPigLatin" function', () => {
		it('should return an emtpy string if the input is empty', () => {
			const result = MyStrings.translateToPigLatin('');

			expect(result).to.equal('');
		});

		it('should add "way" to the end of a word beginning with a vowel', () => {
			const result = MyStrings.translateToPigLatin('egg');

			expect(result).to.equal('eggway');
		});

		it('should take the first consonant of an English word, move it to the end of the word and add suffix "ay" ', () => {
			const result = MyStrings.translateToPigLatin('california');

			expect(result).to.equal('aliforniacay');
		});

		it('should take the entire leading consonant cluster of an English word, move it to the end of the word and add suffix "ay" ', () => {
			const result = MyStrings.translateToPigLatin('glove');

			expect(result).to.equal('oveglay');
		});
	});


	describe('static "findMissingLetters" function', () => {
		it('should return undefined if string is empty', () => {
			const result = MyStrings.findMissingLetters('');

			expect(result).to.be.undefined;
		});

		it('should return single missing lowercase letter from alphabet subsection', () => {
			const result = MyStrings.findMissingLetters('ac');
			const result2 = MyStrings.findMissingLetters('abcdefghjklmno');

			expect(result).to.equal('b');
			expect(result2).to.equal('i');
		});

		it('should return single missing uppercase letter from alphabet subsection', () => {
			const result = MyStrings.findMissingLetters('AC');
			const result2 = MyStrings.findMissingLetters('DEFGHJ');

			expect(result).to.equal('B');
			expect(result2).to.equal('I');
		});

		it('should return multiple missing letters from alphabet subsection', () => {
			const result = MyStrings.findMissingLetters('ad');
			const result2 = MyStrings.findMissingLetters('abcdefghlmno');

			expect(result).to.equal('bc');
			expect(result2).to.equal('ijk');
		});
	});


	describe('static "decodeROT13Cypher" function', () => {
		it('should return empty string if the input is empty', () => {
			const result = MyStrings.decodeROT13Cypher('');

			expect(result).to.equal('');
		});

		it('should shift a single letter 13 places to the right', () => {
			const result = MyStrings.decodeROT13Cypher('A');
			const result2 = MyStrings.decodeROT13Cypher('Z');

			expect(result).to.equal('N');
			expect(result2).to.equal('M');
		});

		it('should shift a all letters in message 13 places to the right', () => {
			const result = MyStrings.decodeROT13Cypher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.');
			const result2 = MyStrings.decodeROT13Cypher('SERR CVMMN!');

			expect(result).to.equal('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
			expect(result2).to.equal('FREE PIZZA!');
		});
	});


	describe('static "allUniqueCharacters" function', () => {
		it('should return false if the input is empty', () => {
			const result = MyStrings.allUniqueCharacters('');

			expect(result).to.be.false;
		});

		it('should return false if characters are repeated, regardless of case', () => {
			const result = MyStrings.allUniqueCharacters('apples');
			const result2 = MyStrings.allUniqueCharacters('The cat');

			expect(result).to.be.false;
			expect(result2).to.be.false;
		});

		it('should not count spaces as characters', () => {
			const result = MyStrings.allUniqueCharacters('the dog is can');
			const result2 = MyStrings.allUniqueCharacters('T H E');

			expect(result).to.be.true;
			expect(result2).to.be.true;
		});
	});


	describe('static "isPermutation" function', () => {
		it('should return false if any of the inputs are empty', () => {
			const result = MyStrings.isPermutation('', '');
			const result2 = MyStrings.isPermutation('hat', '');
			const result3 = MyStrings.isPermutation('', 'hat');

			expect(result).to.be.false;
			expect(result2).to.be.false;
			expect(result3).to.be.false;
		});

		it('should return false if one is not a permutation of the other', () => {
			const result = MyStrings.isPermutation('cat', 'can');

			expect(result).to.be.false;
		});

		it('should return true if one is a permutation of the other', () => {
			const result = MyStrings.isPermutation('cat', 'tac');

			expect(result).to.be.true;
		});

		it('should return true if one is a permutation of the other with spaces and capitals', () => {
			const result = MyStrings.isPermutation('Cat is hot', 'Tac to his');

			expect(result).to.be.true;
		});
	});


	describe('static "replaceSpaces" function', () => {
		it('should return empty string if the input is empty', () => {
			const result = MyStrings.replaceSpaces('');

			expect(result).to.equal('');
		});

		it('should trim leading and trailing spaces', () => {
			const result = MyStrings.replaceSpaces('   shoes ');

			expect(result).to.equal('shoes');
		});

		it('should replace spaces with %20 and return a string', () => {
			const result = MyStrings.replaceSpaces('  My shoes are cool !');

			expect(result).to.equal('My%20shoes%20are%20cool%20!');
		});

		it('should replace double spaces with double %20 and return a string', () => {
			const result = MyStrings.replaceSpaces('  My shoes  are cool!');

			expect(result).to.equal('My%20shoes%20%20are%20cool!');
		});
	});


	describe('static "lowerCaseCompression" function', () => {
		it('should return empty string if the input is empty', () => {
			const result = MyStrings.lowerCaseCompression('');

			expect(result).to.equal('');
		});

		it('should take a repeated letter and return that letter plus number of repeats', () => {
			const result = MyStrings.lowerCaseCompression('aaa');

			expect(result).to.equal('a3');
		});

		it('should return original string if compression is longer', () => {
			const result = MyStrings.lowerCaseCompression('abc');

			expect(result).to.equal('abc');
		});

		it('should return string compressed', () => {
			const result = MyStrings.lowerCaseCompression('fffaaaaaggbchhhh');

			expect(result).to.equal('f3a5g2b1c1h4');
		});

		it('should handle leading and trailing single letter', () => {
			const result = MyStrings.lowerCaseCompression('faaaaagggggggbbbbch');

			expect(result).to.equal('f1a5g7b4c1h1');
		});
	});
});