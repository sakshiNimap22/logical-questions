// WAP to find the given string is Palindrome or not

const str = "racecar";

//  Check if the string is a palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}


console.log("String: ", str);
console.log("Is palindrome? ", isPalindrome(str));