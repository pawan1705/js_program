function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let swapped = false;

    for (let j = 0; j <= n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

const array = [34, 76, 87, 45, 234, 657, 55, 44, 1234, 56787, 76543, 986, 2334];
const sortedArray = bubbleSort(array);
console.log(sortedArray);
