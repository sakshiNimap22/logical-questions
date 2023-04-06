//WAP to reverse an integer without converting it to a string, without using any builtin methods.

function reverseInt(num) {
    let result = 0;
    
    while (num !== 0) {
      const remainder = num % 10;
      result = (result * 10) + remainder;
      num = Math.trunc(num / 10);
    }
    
    return result;
  }
  
  console.log(reverseInt(12345)); 