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

  public static totalScore(blocks, n) {
    if (n = 0) { return 0; }

    var total = 0
    var scores = [];
    var scorePointer = -1;

    for (var i = 0; i < blocks.length; i++) {
      if (typeof blocks[i] === 'number') {
        scores.push(blocks[i]);
        scorePointer++;
        total += blocks[i];
      }

      if (scorePointer > -1) {
        switch (blocks[i]) {
          case 'X':
            var score = scores[scorePointer] * 2
            scores.push(score);
            scorePointer++;
            total += score;
            break;
          case '+':
            var score = 0;
            if (scorePointer === 0) {
              score = scores[scorePointer];
            } else {
              score = scores[scorePointer] + scores[scorePointer - 1];
            }
            scores.push(score);
            scorePointer++;
            total += score;
            break;
          case 'Z':
            var removed = scores.pop();
            scorePointer--;
            total -= removed;
            break;
        }
      }
      // console.log("total", total, "scores", scores, "pointer", scorePointer);
      // console.log("-----")
    }
    return total;
  }

  public static matchLunches(lunchMenuPairs, teamCuisinePreference) {
    if (lunchMenuPairs.length === 0 || teamCuisinePreference.length === 0) { return []; }

    var orders = [];

    for (var i = 0; i < teamCuisinePreference.length; i++) {
      for (var k = 0; k < lunchMenuPairs.length; k++) {
        if (teamCuisinePreference[i][1] === lunchMenuPairs[k][1]) {
          orders.push([teamCuisinePreference[i][0], lunchMenuPairs[k][0]]);
        }
        if (teamCuisinePreference[i][1] === '*') {
          orders.push([teamCuisinePreference[i][0], lunchMenuPairs[k][0]]);
        }
      }
    }
    return orders;
  }
  /* [[3, 5, 2], [6, 0, 1], [2, 4, 7]] */
  public static zeroOutRowsAndColumns(matrix: number[][]): number[][] {
    if (matrix.length === 0) { return []; }

    let columns = [];
    let rows = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let k = 0; k < matrix[i].length; k++) {
        if (matrix[i][k] === 0) {
          columns.push(k);
          rows.push(i);
        }
      }
    }
    /* Nullify rows */
    for (let i = 0; i < rows.length; i++) {
      for (let k = 0; k < matrix[rows[i]].length; k++) {
        matrix[rows[i]][k] = 0;
      }
    }
    /* Nullify columns */
    for (let j = 0; j < columns.length; j++) {
      for (let k = 0; k < matrix.length; k++) {
        matrix[k][columns[j]] = 0;
      }
    }
    return matrix;
  }
}

export default MyArrays;