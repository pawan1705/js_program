const originalString = "Hello World ! Welcome to the World of nodejs";
console.log(originalString);
const substringToReplace = "World";
const newSubstring = "Universe";

const newString = originalString.replace(
  new RegExp(substringToReplace, "g"),
  newSubstring
);
console.log(newString);
