function factorial(n){
let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


console.log("Facorial series is:", factorial(5));

/**
 * function factorial(n){
 * if (n <= 1) return 1;
  return n * factorial(n - 1);
 * }
 * 
 */

  /*

    function factorial(n){
    let result =1;
    while(n>1){
    result = result*1;
    n--;
    }
    return result;
    }

  */