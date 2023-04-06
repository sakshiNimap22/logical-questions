// Code to find even numbers in a list

const my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Create an empty array to store even numbers
const even_nums = [];

// Iterate over the list
for (let i = 0; i < my_list.length; i++) {
  // Check if the number is even
  if (my_list[i] % 2 === 0) {
    // Append the even number to the even_nums array
    even_nums.push(my_list[i]);
  }
}

// Print the even numbers
console.log("Even numbers in the list: ", even_nums);
