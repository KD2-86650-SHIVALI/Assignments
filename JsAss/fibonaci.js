
//Q1. Print Fibonacci series for n numbers
function fib(n){
    let a=0, b=1;
    let result = [0];
    for (let i = 1; i <= n; i++) {
    result.push(b);
    [a, b] = [b, a + b]; 
  }
  return result.join(", ");
}
console.log("Fibonacci series..");
console.log(fib(5));

/**
 * function fib(n){
 * let result =[];
 * for(int i=0; i<=n ; i++){
 * result.push(fib(i));
 * return result.join(" , ");
 * 
 * }
 * }
 * 
 */