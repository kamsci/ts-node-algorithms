export function reverseOrRotate(input: string, sectionSize: number): string {
    /* The input is a string of digits. 
    Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).
    If a chunk represents an integer where the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
    Otherwise rotate it to the left by one position. 
    Put together these modified chunks and return the result as a string.
    */

    if (input === "" || sectionSize === 0 || sectionSize > input.length) { return ""; }
    let pointer: number = sectionSize;
    let sumOfCubes: number = 0;
    let answer: string = "";

    for (let i: number = 0; i < input.length; i++) {
        if (i < pointer) {
            sumOfCubes += parseInt(input[i], 10) * parseInt(input[i], 10);
        }
        if (i === pointer - 1) {
            if (sumOfCubes % 2 === 0) {
                for (let k = pointer - 1; k > i - sectionSize; k--) {
                    answer += input[k];
                }
            }
            else {
                let tempStr = input.substring(i - (sectionSize - 2), i + 1);
                answer += tempStr;
                answer += input[i - (sectionSize - 1)];
            }
            pointer += sectionSize;
            sumOfCubes = 0;
        }
    }
    return answer;
}

export default reverseOrRotate;