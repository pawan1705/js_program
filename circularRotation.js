function circularRotationArray(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return arr;

  const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
  return rotatedArray;
}

const array = [1, 2, 3, 4, 5];
k = 2;
console.log("original array", array);
const rotatedArray = circularRotationArray(array, k);
console.log(rotatedArray);
