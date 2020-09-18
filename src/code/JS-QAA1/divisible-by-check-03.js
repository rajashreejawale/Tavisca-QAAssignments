/* Write a program that alerts/log to console 
"Divisible by 5" when number is divisible by 5, 
alerts "Divisible by 3" when it is divisible by 3 and alerts 
"Divisible by 15" when it is divisible by 15. 
Sample data - [100, 20, 15, 30,6,9, 10, 12, 150] */

var numArray = [100, 3, 6, 0];
console.log(divisibleByCheck(numArray));

// Iterate array to check each element divisability by 3,5 & 15
function divisibleByCheck(numArray) {
    let resultArray =[];
    for(let i=0; i < numArray.length; i++) {
       if(numArray[i] % 3 == 0 && numArray[i] % 5 == 0 ) {
            resultArray.push(`${numArray[i]} divisible by 15`);
            //console.log(numArray[i] + " divisible by 15");
        } else if (numArray[i] % 5 == 0) {
            resultArray.push(`${numArray[i]} divisible by 5`);
            //console.log(numArray[i] + " divisible by 5");
        }else if (numArray[i] % 3 == 0 ) {
            resultArray.push(`${numArray[i]} divisible by 3`);
            //console.log(numArray[i] + " divisible by 3");
        } else {
            resultArray.push(`${numArray[i]} is not divisible by 3, 5 and 15`);
            //console.log(numArray[i] + " is not divisible by 3, 5 and 15");
        }          
    }
    return resultArray;
}

module.exports =divisibleByCheck;