// WAP to print Fibonacci series with recursion

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const limit = 10;
  for (let i = 0; i < limit; i++) {
    console.log(fibonacci(i));
  }