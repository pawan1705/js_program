// write a code to find the longest palindrome string  in the array
function isPalindrome(str) {
  const normalizeString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const strRev = normalizeString.split("").reverse().join("");
  return normalizeString === strRev;
}

function longestPalindrome(arr) {
  let longest = "";
  for (const str of arr) {
    if (isPalindrome(str) && str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
}

const arr = ["racecar", "level", "noon", "pawannawap"];
const longestStr = longestPalindrome(arr);
console.log(longestStr);
