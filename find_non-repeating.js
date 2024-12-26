function findNonRepeatingCharacter(str) {
  const charCount = {}; //return object of character count
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const nonRepeatingCharacter = []; //return array that do not have any repeated character
  for (char of str) {
    if (charCount[char] === 1) {
      nonRepeatingCharacter.push(char);
    }
  }
  return nonRepeatingCharacter;
}

const str = "pawansangare";
const res = findNonRepeatingCharacter(str);
console.log(res);
