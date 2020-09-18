/* Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 */

console.log(iterativeFactorial(5));
console.log(factorial(5));
factorialWithWhileLoop(-4);

//Iterative method
function iterativeFactorial(n) {
    let productOfNumbers =1;
    if (n ===0 || n === 1) {
        return productOfNumbers;
    } else if (n < 0) {
        return 'Provide postive integer';
    } else {
        for( let i=n; i >= 1 ; i--) {
            productOfNumbers = productOfNumbers *i;
        }
        return productOfNumbers;
    }
}

//Recursive method
function factorial(n) {
    if (n === 0  || n === 1 ){
        return 1;
    } else if (n < 0) {
        return 'Provide postive integer';
    } else {
        return n * factorial(n-1);
             }   
}

// factorial using while loop
function factorialWithWhileLoop(n){
    if(n < 0) {
        console.log("Negative Number")
    } else {
        if(n==0) {
            console.log(1)
        } else {
            let i = 1;
            let productOfNumbers=1;
            while(i <= n){
                productOfNumbers = productOfNumbers * i;
                i++;
            }
            console.log(productOfNumbers);
        }
    }
}

module.exports =factorial;

// variable name to to be easily understandable
// replacement of (n-1)

