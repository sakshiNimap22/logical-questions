//WAP to find the second largest number in an array without sorting in javascript

const arr = [5, 10, 8, 12, 7, 3, 1];

//  Find the second largest number without sorting
function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Update the largest and second largest numbers
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}



