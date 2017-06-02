import MyArrays from '../MyArrays';
import { expect } from 'chai';
import 'mocha';


describe('MyArrays class', () => {

  describe('static "diffArrays" function', () => {
    it('should return an empty array if both input arrays are empty', () => {
      const result = MyArrays.diffArrays([], []);

      expect(result).to.deep.equal([]);
    });

    it('should return the other array if one array is empty', () => {
      const result = MyArrays.diffArrays([1, 3, 10], []);
      const result2 = MyArrays.diffArrays([], [4, 21, 2])

      expect(result).to.deep.equal([1, 3, 10]);
      expect(result2).to.deep.equal([4, 21, 2]);
    });

    it('should return an array with the value not repeated in array1', () => {
      const result = MyArrays.diffArrays([1, 3, 5], [1, 3]);
      const result2 = MyArrays.diffArrays(["cat", "bird", "cow"], ["bird", "cat"])

      expect(result).to.deep.equal([5]);
      expect(result2).to.deep.equal(["cow"]);
    });

    it('should return an array with only unique values from both arrays', () => {
      const result = MyArrays.diffArrays([1, 3, 5], [1, 3, 4, 32]);

      expect(result).to.deep.equal([5, 4, 32]);
    });
  });


  describe('static "sumNumbersInRange" function', () => {
    it('should return 0 if both numbers are 0', () => {
      const result = MyArrays.sumNumbersInRange(0, 0);

      expect(result).to.deep.equal(0);
    });

    it('should return number if both numbers are equal', () => {
      const result = MyArrays.sumNumbersInRange(4, 4);

      expect(result).to.deep.equal(4);
    });

    it('should return sum of 2 number + all numbers between', () => {
      const result = MyArrays.sumNumbersInRange(1, 4);

      expect(result).to.deep.equal(10);
    });

    it('should return sum in range regardless of  input order', () => {
      const result = MyArrays.sumNumbersInRange(20, 10);

      expect(result).to.deep.equal(165);
    });
  });


  describe('static "indexToInsertSorted" function - return lowest index at which a value should be inserted into an array once it has been sorted ', () => {
    it('should return index 0 if array is empty', () => {
      const result = MyArrays.indexToInsertSorted([], 3);

      expect(result).to.deep.equal(0);
    });

    it('should return index 0 if number is smaller than all numbers in array', () => {
      const result = MyArrays.indexToInsertSorted([22, 33, 11], 3);

      expect(result).to.deep.equal(0);
    });

    it('should return index of array length if number is larger than all numbers in array', () => {
      const result = MyArrays.indexToInsertSorted([22, 33, 11], 63);

      expect(result).to.deep.equal(3);
    });

    it('should return index of appropriate sorted location in array', () => {
      const result = MyArrays.indexToInsertSorted([22, 33, 11], 33);
      const result2 = MyArrays.indexToInsertSorted([12, 7, 35, 111], 44);

      expect(result).to.deep.equal(2);
      expect(result2).to.deep.equal(3);
    });
  });


  describe('static "totalScore" function ', () => {
    it('should return 0 if number of scores is zero', () => {
      const result = MyArrays.totalScore([], 0);

      expect(result).to.deep.equal(0);
    });

    it('should skip if first scores are "Z", "X", or "+"', () => {
      const result = MyArrays.totalScore(['Z', 'X', 9, '+', '+'], 5);

      expect(result).to.deep.equal(36);
    });

    it('should calcualte score 27', () => {
      const result = MyArrays.totalScore([5, -2, 4, 'Z', 'X', 9, '+', '+'], 8);

      expect(result).to.deep.equal(27);
    });

    it('should calcualte score 3', () => {
      const result = MyArrays.totalScore([1, 2, '+', 'Z'], 4);

      expect(result).to.deep.equal(3);
    });

    it('should calcualte score with multiple "Z"s in a row', () => {
      const result = MyArrays.totalScore([5, -2, 4, 'Z', 'Z', 9, 'X'], 7);

      expect(result).to.deep.equal(32);
    });
  });


  describe('static "matchLunches" function ', () => {
    it('should return empty array if eitehr arrays are empty', () => {
      const result = MyArrays.matchLunches([], []);

      expect(result).to.deep.equal([]);
    });

    it('should return all combo options if team member has no preference "*"', () => {
      const menuPairs = [['Pizza', 'Italian'], ['Curry', 'Indian'], ['Masala', 'Indian']];
      const team = [['John', '*']];

      const result = MyArrays.matchLunches(menuPairs, team);

      expect(result).to.deep.equal([['John', 'Pizza'], ['John', 'Curry'], ['John', 'Masala']]);
    });

    it('should return a pair for all meal options of same type as team member preference', () => {
      const menuPairs = [['Pad Thai', 'Thai'], ['Curry', 'Thai'], ['Masala', 'Indian'], ['Korma', 'Indian']];
      const team = [['Meg', 'Thai'], ['Sam', 'Indian']];

      const result = MyArrays.matchLunches(menuPairs, team);

      expect(result).to.deep.equal([['Meg', 'Pad Thai'], ['Meg', 'Curry'], ['Sam', 'Masala'], ['Sam', 'Korma']]);
    });

    it('should return empty array of no meal options match any team member preference', () => {
      const menuPairs = [['Pad Thai', 'Thai'], ['Curry', 'Thai'], ['Masala', 'Indian']];
      const team = [['Meg', 'Mexican'], ['John', 'Italian']];

      const result = MyArrays.matchLunches(menuPairs, team);

      expect(result).to.deep.equal([]);
    });
  });


  describe('static "zeroOutRowsAndColumns" function ', () => {
    it('should return empty array if matrix is empty', () => {
      const result = MyArrays.zeroOutRowsAndColumns([[]]);

      expect(result).to.deep.equal([[]]);
    });

    it('should return entire single row and single column with 0s if there is a 0 in that row/column', () => {
      const result = MyArrays.zeroOutRowsAndColumns([[3, 5, 2], [6, 0, 1], [2, 4, 7]]);
      console.log("matrix", result);
      expect(result).to.deep.equal([[3, 0, 2], [0, 0, 0], [2, 0, 7]]);
    });

    it('should return all rows and columns with 0s if there is a 0 in that row/column', () => {
      const result = MyArrays.zeroOutRowsAndColumns([[0, 5, 2], [6, 0, 1], [2, 4, 7]]);
      console.log("matrix", result);
      expect(result).to.deep.equal([[0, 0, 0], [0, 0, 0], [0, 0, 7]]);
    });
  });
});