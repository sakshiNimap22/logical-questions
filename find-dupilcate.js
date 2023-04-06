//WAP with 2 different logic, to find all duplicate number in an array

const arr = [1, 2, 3, 4, 2, 5, 6, 3];

// Solution 1: Using a nested loop
function findDuplicates1(arr) {
  const duplicates = [];

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    // Loop through each element again to compare
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    // If the element is duplicate, add it to the list of duplicates
    if (count > 0 && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

console.log("Duplicates using solution 1: ", findDuplicates1(arr));


// second way

// Solution 2: Using an object to count occurrences
function findDuplicates2(arr) {
  const duplicates = [];
  const counts = {};

  // Count the occurrences of each element in the array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // Add the duplicate elements to the list of duplicates
  for (const key in counts) {
    if (counts.hasOwnProperty(key) && counts[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// Call the function and print the output
console.log("Duplicates using solution 2: ", findDuplicates2(arr));