//  Find the reverse of the string
const str = "Hello, world!";

//  Reverse the string
function reverseString(str) {
  let reversed = "";

  // Loop through each character of the string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Call the function and print the output
console.log("Original string: ", str);
console.log("Reversed string: ", reverseString(str));