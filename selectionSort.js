function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum is the first element of the unsorted segment
    let minIndex = i;

    // Find the index of the minimum element in the unsorted segment
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if a new minimum is found
      }
    }

    // If the minimum is not the position of i, swap the elements
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr; // Return the sorted array
}

// Example usage:
const nums = [64, 25, 12, 22, 11];
console.log("original array:", nums);
const sortedNums = selectionSort(nums);
console.log("sorted array :", sortedNums); // Output: [11, 12, 22, 25, 64]
