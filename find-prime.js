// Find prime numbers from 1 ....n 

const n = 20;

//  Find prime numbers from 1 to n
function findPrimes(n) {
  const primes = [];

  // Loop through each number from 2 to n
  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    // Check if the number is prime
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // Add the number to the primes array if it is prime
    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

// Call the function and print the output
console.log("Prime numbers from 1 to", n, ": ", findPrimes(n));