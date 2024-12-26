function replaceWithRanks(arr) {
  // create a sorted copy of the array without duplicate values
  const sortedUniqueArray = Array.from(new Set(arr)).sort((a, b) => a - b);
  // create a map to store the rank
  const rankMap = new Map();

  sortedUniqueArray.forEach((value, index) => {
    rankMap.set(value, index + 1);
  });

  const rankedArray = arr.map((value) => rankMap.get(value));

  return rankedArray;
}

const array = [70, 59, 34, 12, 45, 76];
console.log("Original Array :", array);
const rankArray = replaceWithRanks(array);
console.log("Sorted Array :", rankArray);
