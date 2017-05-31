export function reverseOrRotate(str, sz) {
    /* The input is a string of digits. 
    Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).
    If a chunk represents an integer where the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
    Otherwise rotate it to the left by one position. 
    Put together these modified chunks and return the result as a string.
    */

    if (str === "" || sz === 0 || sz > str.length) { return ""; }
    let pointer = sz;
    let sumOfCubes = 0;
    let answer = "";

    for (let i = 0; i < str.length; i++) {
        if (i < pointer) {
            sumOfCubes += str[i] * str[i];
        }
        if (i === pointer - 1) {
            if (sumOfCubes % 2 === 0) {
                for (let k = pointer - 1; k > i - sz; k--) {
                    answer += str[k];
                }
            }
            else {
                let tempStr = str.substring(i - (sz - 2), i + 1);
                answer += tempStr;
                answer += str[i - (sz - 1)];
            }
            pointer += sz;
            sumOfCubes = 0;
        }
    }
    return answer;
}

export default reverseOrRotate;