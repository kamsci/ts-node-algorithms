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
});