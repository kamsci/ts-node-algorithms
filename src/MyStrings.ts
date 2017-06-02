export class MyStrings {

  public static greet(input: string): string {
    let result = "Hi " + input;
    return result;
  }

  public static reverseString(input: string): string {
    if (input === '') { return ''; }

    let reversedString = "";

    for (let i = input.length - 1; i >= 0; i--) {
      reversedString += input[i];
    }
    return reversedString;
  }

  public static isPalindrome(input: string): boolean {
    if (input === '') { return false; }

    input = input.replace(/\W|_/g, '').toLowerCase();
    let pointer = input.length - 1;

    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] !== input[pointer]) { return false; }
      pointer--;
    }
    return true;
  }

  public static translateToPigLatin(input: string): string {
    if (input === '') { return ''; }

    input = input.toLowerCase();

    if (this.isVowel(input[0])) {
      return input + 'way';
    }

    let consonantCluster = '';
    let pointer = 0;

    for (let i = 0; i < input.length; i++) {
      if (!this.isVowel(input[i])) {
        consonantCluster += input[i];
        pointer++;
      }
      else {
        break;
      }
    }
    let temp = input.substring(pointer, input.length);
    temp = temp + consonantCluster + 'ay';

    return temp;
  }

  public static findMissingLetters(input: string): string {
    if (input === '') { return; }

    let charCode = input.charCodeAt(0);
    let missingLetters = '';

    for (let i = 0; i < input.length; i++) {
      while (input.charCodeAt(i) !== charCode) {
        missingLetters += String.fromCharCode(charCode);
        charCode++;
      }
      charCode++;
    }
    return missingLetters;
  }

  public static decodeROT13Cypher(codedMessage: string): string {
    if (codedMessage === '') { return ''; }

    let decodedMessage = '';

    for (let i = 0; i < codedMessage.length; i++) {
      if (codedMessage.charCodeAt(i) > 64 && codedMessage.charCodeAt(i) < 91) {
        decodedMessage += this.decodeLetter(codedMessage[i], 13);
      }
      else {
        decodedMessage += codedMessage[i];
      }
    }
    return decodedMessage;
  }

  public static allUniqueCharacters(input: string): boolean {
    if (input === '') { return false; }

    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let pointer = 0;
      while (pointer < input.length) {
        if (i !== pointer && input[i] !== ' ' && input[i] === input[pointer]) {
          return false;
        }
        else {
          pointer++;
        }
      }
    }
    return true;
  }

  public static isPermutation(firstWord: string, secondWord: string): boolean {
    if (firstWord === '' || secondWord === '' || firstWord.length !== secondWord.length) { return false; }

    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase();

    let sortedFirstWord = firstWord.split('').sort();
    let sortedSecondWord = secondWord.split('').sort();

    if (sortedFirstWord.join('') === sortedSecondWord.join('')) { return true; }
    return false;
  }

  public static replaceSpaces(sentence: string): string {
    if (sentence === '') { return ''; }

    let sentenceArr = sentence.trim().split('');

    for (let i = 0; i < sentenceArr.length; i++) {
      if (sentenceArr[i] === ' ') {
        sentenceArr[i] = '%20';
      }
    }
    return sentenceArr.join('');
  }

  public static lowerCaseCompression(input: string): string {
    if (input === '') { return ''; }

    let compression = '';
    let counter = 1;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        counter++;
      }
      else {
        compression = compression.concat(input[i], counter.toString());
        counter = 1;
      }
    }
    if (compression.length < input.length) { return compression; }
    return input;
  }

  /* Private Methods */
  private static isVowel(letter: string): boolean {
    if (letter === 'a'
      || letter === 'e'
      || letter === 'i'
      || letter === 'o'
      || letter === 'u') {
      return true;
    }
    else { return false; }
  }

  private static decodeLetter(letter: string, key: number): string {
    if (letter === '') { return ''; }

    let codeValue = letter.charCodeAt(0);
    let decodeValue = codeValue + key;

    if (decodeValue > 90) {
      let overlap = key - (90 - codeValue);
      decodeValue = 64 + overlap;
    }
    return String.fromCharCode(decodeValue);
  }

  private static sortAlpha(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a > b) { return 1; }
    if (a < b) { return -1; }
    if (a == b) { return 0; }
  }
}

export default MyStrings;