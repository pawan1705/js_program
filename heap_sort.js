function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left child
  let right = 2 * i + 2; // right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  const n = arr.length;

  // Build a maxheap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Test the heapSort function
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
const sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);
