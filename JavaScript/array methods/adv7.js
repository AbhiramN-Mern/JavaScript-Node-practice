let array = [10, 40, 30, 90, 50, 80];

// Sort the array in ascending order
array.sort((a, b) => a - b);

// Swap the first element with the element at index 2 (30)
let temp = array[0];
array[0] = array[1];
array[1] = temp;

console.log(array);
