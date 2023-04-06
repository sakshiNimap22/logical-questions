//WAP to find missing elements from the array?

const arr = [1, 2, 4, 6, 8];

//  Find missing elements from the array
function findMissingElements(arr) {
  const n = arr.length;
  const missing = [];

  // Loop through each number from 1 to n
  for (let i = 1; i <= n; i++) {
    if (arr.indexOf(i) === -1) {
      missing.push(i);
    }
  }

  return missing;
}


console.log("Original array: ", arr);
console.log("Missing elements: ", findMissingElements(arr));


