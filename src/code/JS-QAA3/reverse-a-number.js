/* Write a JavaScript function that reverse a number.
Example x = 32243; Expected Output : 34223 */
//using builtin method
console.log(reversedNumber(320));
//reverseNumberTraditionalway(67895);

// Function to get reverse number using builtin methods
function reversedNumber(n) {
    let str = n.toString();
    let reversedString =str.split("").reverse().join("");
    let reversedNumber = parseInt(reversedString);
    return reversedNumber; 
}  

// Tradinal way of getting reverse numver using traditinal way
function reverseNumberTraditionalway(number) {
let rem, temp, reversedNumber = 0;
temp=number;
while(temp > 0) {
    rem = temp%10;
    temp = parseInt(temp/10);
    reversedNumber = reversedNumber*10+rem;
}
return reversedNumber;
}

module.exports = {reversedNumber, reverseNumberTraditionalway} ;
//module.exports = reverseNumberTraditionalway; 