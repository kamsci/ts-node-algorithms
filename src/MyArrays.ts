export class MyArrays {

  public static diffArrays(array1: any[], array2: any[]): any[] {
    if (array1.length === 0 && array2.length === 0) { return []; }
    if (array1.length === 0) { return array2; }
    if (array2.length === 0) { return array1; }

    for (let i = 0; i < array1.length; i++) {
      for (let k = 0; k < array2.length; k++) {
        if (array1[i] === array2[k]) {
          array1.splice(i, 1);
          i--;
          array2.splice(k, 1);
          k--;
        }
      }
    }
    return array1.concat(array2);
  }

  public static sumNumbersInRange(x: number, y: number): number {
    if (x === 0 || y === 0) { return 0; }

    let start = Math.min(x, y);
    let end = Math.max(x, y);
    let sum = 0;

    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }

  public static indexToInsertSorted(unsortedArray: number[], num: number): number {
    if (unsortedArray.length === 0) { return 0; }

    let sortedArray = unsortedArray.sort(function (a, b) { return a - b; });

    for (let i = 0; i < sortedArray.length; i++) {
      if (num <= sortedArray[i]) {
        return i;
      }
    }
    return sortedArray.length;
  }

}

export default MyArrays;