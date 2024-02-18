const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];

  for (const num of arr) {
    if (currentSubarray.reduce((sum, el) => sum + el, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      result.push([...currentSubarray]);
      currentSubarray = [num];
    }
  }

  // Add the last subarray to the result
  result.push([...currentSubarray]);

  return result;
};

const inputN = prompt("Enter n: ");
const parsedN = parseInt(inputN, 10);

if (!isNaN(parsedN) && parsedN > 0) {
  alert(JSON.stringify(divide(arr, parsedN)));
} else {
  alert("Invalid input for n. Please enter a positive integer.");
}
