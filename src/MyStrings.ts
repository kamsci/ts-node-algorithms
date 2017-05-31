export class MyStrings {

  static greet(input: string): string {
    let result = "Hi " + input;
    return result;
  }

  static reverseString(input: string): string {
    let reversedString = "";

    for (let i = input.length - 1; i >= 0; i--) {
      reversedString += input[i];
    }
    return reversedString;
  }

  static isPalindrome(input: string): boolean {
    if (input === '') { return false; }

    input = input.replace(/\W|_/g, '').toLowerCase();
    let pointer = input.length - 1;

    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] !== input[pointer]) { return false; }
      pointer--;
    }
    return true;
  }
}

export default MyStrings;